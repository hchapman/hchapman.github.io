---
layout: project
permalink: /projects/pyplcurve/
title: plCurve-python
---

## plCurve-python

The Python interface to
[plCurve](http://www.jasoncantarella.com/wordpress/software/plcurve/)
is implemented with the aid of SWIG.


### Installing plCurve-python

**As of 2014-05-10**, you can find SWIG support lurking in the latest
revision but as the plCurve structure changed a slight bit (namely the
knot identification code was reworked significantly) without updating
how the SWIG interface plugs in. I have a version which has the build
commands uncommented and removes the old interface code which had
building fail.
{: .alert .alert-warning}

So long as you have a version of plCurve which is set up to build the
python interface, installation should be little extra work: It's
possible that Python does not know about the prefix into which plCurve
installs itself.

<div class="panel panel-info"><div class="panel-body" markdown="1">
**If the following python commands don't work**,
you'll have to update your `PYTHONPATH` environment variable. First
you'll need to know the prefix to which plCurve installed: If you've
added your own prefix argument to the `./configure` directive for
plCurve's build then you know this already. Otherwise it's probably
`/usr/local`. Add the following bit to your bash init file
(`.bash_profile` if you're on a Mac or `.bashrc` if you're on Linux)
making the obvious substitutions necessary:<br>

{% highlight bash %}
export PYTHONPATH=$PYTHONPATH:/your/prefix/goes/here
{% endhighlight %}
</div></div>

Let's get started! First, it's probably best to make sure the library
loads without issue. Boot up your python console (you *are* using
iPython by now, correct?) and try the following invocation:

{% highlight pycon %}
>>> import libplcurve.plcurve as pl
{% endhighlight %}

Assuming that there were no errors thrown (if there were, it may be a
problem with your `PYTHONPATH`. See how you may fix it above.) we're
hooked up and ready to go. Let's start out by drawing a random closed arm:

{% highlight pycon %}
>>> N = 50
>>> r = pl.RandomGenerator()
>>> plc = pl.PlCurve.random_closed_polygon(r, N)
>>> plc.components[0]
Strand (closed) with 50 vertices
>>> plc.components[0].vertices
[(-0.0004563321077621033, 0.021037011726962707, 0.014543772633901534),
 (-0.005370435696012072, -0.014320318855877902, -0.02145299992122479),
 (0.01234355180147441, -0.026678638073560575, -0.035588446667361995),
 ... 44 vertices omitted ...
 (0.0331081347427131, -0.009773608676877385, 0.039538580797402204),
 (0.022598041131123285, -0.01600633031308516, -0.0412711435883152),
 (-1.3183898417423734e-16, -6.938893903907228e-18, 2.3592239273284576e-16)]
{% endhighlight %}

If that worked, you should consider your environment prepared! Even
better, the arm ends back at the origin, so things are as they should
be. Let's go a bit deeper into how to use the library.

### Understanding the example

In the last section, we of course started with the ever-important
*importing* of the library. We named it `pl` then just because it is
*bad practice* to import all globals of python libraries but short
since we're presumably going to be calling it a lot! The choice is
yours, but be wary of this. So, if you're going to be using plCurve in
Python, this should probably be somewhere near the top of the code.

{% highlight python %}
import libplcurve.plcurve as pl
{% endhighlight %}

In the first example that we worked above, we generated a random
polygon. Other reasons aside, it's certainly easier to get an
*interesting* (non-contrived) polygon without too much effort by
drawing it randomly. Let's break down the example.

{% highlight python %}
r = pl.RandomGenerator()
{% endhighlight %}

This line initializes a `gsl_rng` object in C as we can see in the SWIG interface code

{% highlight cpp %}
%rename(RandomGenerator) gsl_rng;
typedef struct {
  ...
  %extend {
    gsl_rng() {
      gsl_rng *r;
      const gsl_rng_type *T;

      gsl_rng_env_setup();
      T = gsl_rng_default;
      r = gsl_rng_alloc(T);

      return r;
    }
    ~gsl_rng() {
      gsl_rng_free($self);
    }

    void set(unsigned long int s);
    ...
  }
} gsl_rng;
{% endhighlight %}

which "extends" `gsl_rng` to act more like an honest class with a
standard constructor and destructor. Additionally, SWIG notices that
the declaration of the method `set` has the same signature (with first
argument a pointer to a `gsl_rng`) as the
[library function `gsl_rng_set`](http://www.gnu.org/software/gsl/manual/html_node/Random-number-generator-initialization.html#Random-number-generator-initialization)
and cleverly links the two *with no additional effort*. So if we had
wanted to set a specific seed in our sample experiment above, we could
have added the line (in Python)

{% highlight python %}
r.set(1234)
{% endhighlight %}

before we pulled the random polygon. But how did we create the random
polygon? Similarly to how the interface wraps the `gsl_rng` struct as
a class, the majority of the interface specification wraps the
`plc_type` (a.k.a `plCurve`, this might get a little confusing) struct
(and friends) as a class (with some additional Python directives).

{% highlight cpp %}
%rename(PlCurve) plc_type;
struct plc_type {
  %rename(num_components) nc;
  int         nc;                              /* Number of components */
  ...
  // SWIG extensions
  %extend {
    // Virtual class members
    //
    const varray components;

    // Constructors and destructor
    //
    plc_type(const int components,
             const int * const nv,
             const bool * const open,
             const int * const cc)
    { return plc_new(components, nv, open, cc); }
    plc_type(const plCurve * const L) { return plc_copy(L); }
    ~plc_type() {
      plc_free($self);
    }
    ...
    // Random PlCurve creators
    //
    %newobject random_closed_polygon;
    static plCurve *random_closed_polygon(gsl_rng *r, int nEdges)
    { return plc_random_closed_polygon(r, nEdges); }
    ...
  }
};
{% endhighlight %}

This snippet shows, among other things, that the `PlCurve` class which
Python sees is a wrapper around the `plc_type` that C knows about. It
has a standard constructor, copy constructor, and destructor. It has
loads of methods, namely the static `random_closed_polygon` which
we've used in the example code. Its first argument is a `gsl_rng *`,
so we passed in the `RandomGenerator` object that we had---SWIG
handles the rest. `int`s are easy, but it's not too hard (with a
little extra work) to pass even more complicated Python objects to C
naturally.

Once we've created the random polygon, we access its component (which
SWIG also knows how to wrap thanks to the interface file) and checked
its vertices. If you're using iPython with its *extremely* useful
smart tab completion, this is a great opportunity to explore a component object:

{% highlight pycon %}
>>> cmp = plc.components[0]
>>> cmp.[[tab key]]
cmp.acquire       cmp.disown        cmp.num_colors    cmp.this
cmp.append        cmp.is_open       cmp.num_vertices  cmp.thisown
cmp.colors        cmp.next          cmp.own           cmp.vertices
>>> plc.[[tab key]]
plc.G                              plc.perturb
plc.MR_curvature                   plc.pfm
plc.acquire                        plc.pointset_diameter
plc.add_component                  plc.project
plc.append                         plc.quant
plc.center_of_mass                 plc.random_closed_plane_polygon
plc.check_constraint               plc.random_closed_polygon
plc.components                     plc.random_equilateral_closed_polygon
plc.constrain_to_line              plc.random_equilateral_open_polygon
plc.constrain_to_plane             plc.random_open_plane_polygon
plc.convert_to_spline              plc.random_open_polygon
plc.cp_num                         plc.random_rotate
plc.cst                            plc.remove_all_constraints
plc.delete_arc                     plc.remove_constraint
plc.disown                         plc.resize_colorbuf
plc.double_vertices                plc.rotate
plc.drop_component                 plc.s
plc.fix_constraints                plc.scale
plc.fix_wrap                       plc.set_fixed
plc.from_file                      plc.subarc_length
plc.gyradius                       plc.this
plc.loop_closure                   plc.thisown
plc.mean_squared_chordlengths      plc.translate
plc.mean_tangent                   plc.turning_angle
plc.next                           plc.unconstrain
plc.num_components                 plc.vertex_num
plc.num_edges                      plc.vt_num
plc.num_vertices                   plc.write
plc.own
{% endhighlight %}

While `acquire`, `disown`, `append`, `own`, `next`, `this`, and
`thisown` are remnants of the SWIGObject base class, the rest of the
options are class members or methods which (should) link appropriately
into the C library code. For example, the component's member `vertices`
grabs the polygon's vertices *as a Python list*!
