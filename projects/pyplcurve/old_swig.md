---
layout: project
permalink: /projects/pyplcurve/old_swig/
title: plCurve-python
---

## Warning

The following information is *old* and more than likely outdated.
This information is here for archival purposes.

## plCurve-python

The Python interface to
[plCurve](http://www.jasoncantarella.com/wordpress/software/plcurve/)
is implemented with the aid of SWIG.

### Demos &amp; Examples

There is a (hastily written) example of a plCurve visualizer in Python
which uses pyopengl and pyside Qt bindings: [plcview.py](demos/plcview.py).

### Installing plCurve-python

**As of 2014-05-11**, SWIG build support is enabled (and required I
think, oops!) in SVN master.
{: .alert .alert-success}

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

### Extending the interface; a sample

The interface as it stands is far from complete, and as plCurve is
further developed it will need to be further expanded. Fortunately,
this is really *not too bad* with the aid of SWIG, and in many cases
it should be almost trivial. Let's run through an example.

Recently, the C `plc_classify` method has changed (to not rely upon
ancient Fortran code) and, among other things now requires a `gsl_rng`
argument. We'd like to add `classify` as a method of a `PlCurve` in
Python, so we've added the following lines into the
block for the `plc_type`:

{% highlight cpp %}
struct plc_type {
  ...
  %typemap(in, numinputs=0) int *nposs (int temp) {
    $1 = &temp;
  }
  %typemap(argout) int *nposs {
    PyObject *knottype, *np, *o3;

    np = PyInt_FromLong(*$1);
    if(!PyTuple_Check($result)) {
      knottype = $result;
      $result = PyTuple_New(1);
      PyTuple_SetItem($result,0,knottype);
    }
    o3 = PyTuple_New(1);
    PyTuple_SetItem(o3,0,np);
    knottype = $result;
    $result = PySequence_Concat(knottype,o3);
    Py_DECREF(knottype);
    Py_DECREF(o3);
  }
  ...
  %extend {
    ...
      %newobject classify;
      plc_knottype *classify(gsl_rng *r, int *nposs)
      { return plc_classify(r, $self, nposs); }
    ...
  }
  ...
}
{% endhighlight %}

Remember that the `%extend` directive tells SWIG to add class methods
and members to what it ends up calling a `plc_type` (it's a
`PlCurve`); let's inspect the bit we've added in there. Notice that
`plc_classify` takes three inputs; a `gsl_rng *`, a `plc_type *`, and
an `int *`. So our wrapper asks for a `gsl_rng *` and an `int *` but
knows to pass a pointer to the actual `plc_type` object by passing
`$self` to the C code. It's important to notice now that the `int *`
isn't really an *input* for the C code: It's an additional output!
While Python does not have "integer pointer" capabilities, Python
functions *can* easily return multiple entities as a tuple. This is
what the `%typemap` bits above handle: An in typemap tells SWIG not to
ask Python for this integer pointer and instead creates one
itself. The out typemap then combines both the function's actual
return value and the integer pointer faux return into a tuple which
Python can grok.

The last C subtlety to notice here is that `plc_classify` returns a
pointer to a `plc_knottype` object; a C programmer understands that
this usually means that the function `malloc`s some memory for the
`plc_knottype` object and that we (the end user) must be sure to
`free` it when we are done. This is what the
[`%newobject` SWIG directive](http://www.swig.org/Doc2.0/SWIGDocumentation.html#Customization_ownership)
is for: Once we tell SWIG that a new object is created by this
function, it will know how to appropriately garbage collect the memory
created in C when the Python references are obsolete. This both
prevents against memory leaks and allows us to be Pythonic with Python
(and not have to micromanage every little bit of the C library in our
scripts!).

**As of 2014-05-11**, `plc_classify` does nothing (or even
segfaults!). This is not the interface or Python's fault: the function
`ccode_from_pd_code` is presently just not implemented!
{: .alert .alert-warning}

Something hidden here is that presently, the SWIG interface file also
contains instructions which turn `plc_knottype`s into Python objects!
If you had added a function to the interface without this, your method
should still work: SWIG would return you an object which points to the
C data which you could use in other interfaced C functions without
issue. In order to access the data inside of this pointer object
though, you'd need to expand the interface to know more about this
new type.
