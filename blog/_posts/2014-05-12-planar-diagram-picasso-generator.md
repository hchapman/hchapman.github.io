---
title: Cubism &amp; Immersions of graphs in the plane
author: Harrison
layout: blog_post
---

I've been working recently on completing the
[Python interface to plCurve](/projects/pyplcurve/) and in order to
demonstrate the capabilities (and expand my own OpenGL knowledge) I've
written little UIs using only Python, and PySide to display plCurve
objects (one for space polygons and one for planar diagrams). The
first version of the PlanarDiagram viewer load in an example
8-crossing PlanarDiagram from a file and displays it. A PlanarDiagram
is a 4-regular planar graph together with "over-under" crossing data,
edge direction data, and knowledge at each vertex of the order
(e.g. in an anticlockwise direction) of the edges outward.

Of course, graphs (and hence PlanarDiagrams) don't inherently know
anything about the *position* of their vertices or the shape of their
edges (and it's no easy task to computationally shape edges to ensure
the immersion is planar) so the program took a few liberties. Namely,
it picks random coordinates for each vertex to reside in the viewport
(this "solves" the first issue) and it ignores that the graph can be
embedded in the plane, instead drawing each edge as a Bezier curve
which knows the direction at which to plug into its vertex (e.g. an
edge knows to leave north from one vertex and arrive from the east of
its destination). To make things more fun, a click in the viewport
would (while keeping everything else as is) reposition randomly the
vertices of the graph.

This ended up producing a lot of interesting pictures.

<div class="row">
<div class="col-xs-6 col-md-3">
<a class="thumbnail"><img src="/res/img/blog/2014/pd_picasso1.png" alt="..."></a>
</div><div class="col-xs-6 col-md-3">
<a class="thumbnail"><img src="/res/img/blog/2014/pd_picasso2.png" alt="..."></a>
</div><div class="col-xs-6 col-md-3">
<a class="thumbnail"><img src="/res/img/blog/2014/pd_picasso3.png" alt="..."></a>
</div><div class="col-xs-6 col-md-3">
<a class="thumbnail"><img src="/res/img/blog/2014/pd_picasso4.png" alt="..."></a>
</div>
</div>
