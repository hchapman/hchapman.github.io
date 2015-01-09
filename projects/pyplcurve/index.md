---
layout: project
permalink: /projects/pyplcurve/
title: "plCurve for Python: libpl"
---

# plCurve for Python: `libpl`

The Python interface to
[plCurve](http://www.jasoncantarella.com/wordpress/software/plcurve/)
is now built using Cython. The old [SWIG interface documentation can be found here](old_swig).

When plCurve is installed, unless Python bindings are disabled during
configuration, the module `libpl` will be installed (hopefully) to a
location on your PYTHONPATH (this is handled by Python's setuptools,
so if those are working for other Python packages, you should already be
set up to use the `libpl` module).

**Notice** that the Python module is now installed as `libpl`, as
opposed to the old name of the SWIG interface `libplcurve`.
{: .alert .alert-warning}

## The `pdcode` submodule

The most mature and feature-complete Python interface component is the
`pdcode` submodule which is an interface to the objects and functions
for dealing with planar diagram objects (in C: `pd_code_t`, in Python:
`PlanarDiagram`).

### A quick example

The following script demonstrates some fundamentals of working with
the `pdcode` module:

{% highlight python %}
#!/usr/bin/env python
from libpl.pdcode import PlanarDiagram

tricky_knot = PlanarDiagram.torus_knot(2, 9)
print tricky_knot.homfly() # prints "-a^{-4} + -2a^{-2} + a^{-2}z^{2}"
{% endhighlight %}

In the above example, the `PlanarDiagram` class is imported from the
`pdcode` submodule, we create a (2,9)-torus knot, and compute its
HOMFLY polynomial (returns a `pdcode.HOMFLYPolynomial` object, whose
str() output is its LaTeX representation).

### C correspondence

Just as `pd_code_t`'s are built from building blocks, so are
`PlanarDiagram`s. The following table lists the appropriate
correspondences between the two objects.

|C                         | Python               |
|--------------------------|----------------------|
|`pd_code_t`               | `PlanarDiagram`      |
|`pd_crossing_t`           | `Crossing`           |
|`pd_edge_t`               | `Edge`               |
|`pd_face_t`               | `Face`               |
|`pd_component_t`          | `Component`          |
{: .table}

As a rule of thumb, a C function which takes a `pd_code_t` and one of
the four building block types as its first arguments is implemented in
Python as a method of the corresponding building block. Any other C
function which takes a `pd_code_t` as its first building block appears
as a method of the `PlanarDiagram` class.

For the most comprehensive documentation on the Python module and its
objects, there is the [HTML documentation](docs/html)
([for how to build the most up to date documentation from source, see here](#)),
and there is python's `help` function (e.g. in the Python interpreter,
running `from libpl import pdcode; help(pdcode)` or `from libpl.pdcode
import *; help(PlanarDiagram)`. It may also be enlightening to view
the source for the module (at pysrc/libpl/pdcode.pyx) which, while
written as Cython, reads much like typical Python.

## Documentation

A (possibly outdated) version of the documentation can be found [here](docs/html).

### Building from source

Once the `libpl` module is installed, the most up-to-date
documentation can be optionally compiled. This process requires Sphinx
(to install, assuming you have pip installed, run `pip install
sphinx`). The documentation is built in the directory
pysrc/built_docs by the command `make html` from the root build
directory.

## C API

By using the modulename_api.h header files built in the pysrc/libpl
directory, and linking with libpython, it is possible to access
routines which are implemented in Python.

The following example demonstrates the use of `pd_simplify`, which exposes
the `PlanarDiagram.simplify` method to C.

{% highlight cpp linenos %}
#include <plCurve.h>
#include <plcTopology.h>
#include "pdcode_api.h"
#include <Python.h>
#include <stdio.h>

int main(int argc, char** argv) {
    pd_code_t *K;
    pd_code_t **results;
    int ndias = 0;
    int i =0;

    K = pd_build_unknot(7);

    Py_Initialize();
    import_libpl__pdcode();

    printf("Testing pd_simplify on 7-crossing unknot...\n");
    printf("Original diagram had %d crossings\n", K->ncross);

    results = pd_simplify(K, &ndias);
    for (i=0; i<ndias; i++) {
        printf("Result diagram %d has %d crossings\n",
               i+1, results[i]->ncross);
    }

    Py_Finalize();
    return 0;
}
{% endhighlight %}

Aside from the call to `pd_simplify`, which is relatively straightforward,
there are the calls to Python which

1. *Line 15*: Start the interpreter
2. *Line 16*: Import the `libpl.pdcode` module
3. *Line 27*: Close out the interpreter
