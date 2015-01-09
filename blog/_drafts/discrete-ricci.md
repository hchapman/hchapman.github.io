---
title: Discrete Metrics and Conformality
author: Harrison
layout: blog_post
---

Last time, we talked about the smooth Ricci flow which, among other
things, flows a metric on a surface conformally to a new one which has
constant Gauss curvature. To talk about "discrete" Ricci flow, we'll
have to first understand these concepts (surface, metric, conformal)
in our discrete setting.

### Discrete surfaces

A *triangular mesh* (our notion of "discrete surface") $$\Sigma$$ is a
two dimensional simplicial complex which is also a manifold: For each
point $$p$$ of $$\Sigma$$ there is a neighborhood $$U(p)$$ of $$p$$
homeomorphic to the plane $$\RR^2$$ or the upper half plane. In the
former case, $$p$$ is an *interior point*; in the latter, a *boundary
point*.

A two dimensional simpliial complex can be expressed as $$\Sigma =
(V,E,F)$$, where $$V$$ is the set of vertices in the complex, $$E$$
the set of edges, and $$F$$ the set of faces. It will be convenient to
use the following notation:

+ Let $$n$$ be the number of vertices in a mesh $$\Sigma$$, and
  express those vertices as $$V = \{v_1,v_2,\cdots,v_n\}$$.
+ Index each edge based on the vertices which it connects;
  e.g. $$e_{ij}$$ is the edge connecting vertices $$v_i$$ and
  $$v_j$$. There can be no double edges in a triangle mesh, so
  $$e_{ij}$$ is indeed a unique edge (if it exists in $$E$$).
+ Similarly, index the faces by the vertices around it;
  e.g. $$f_{ijk}$$ is the face with boundary $$e_{ij}e_{jk}e_{ki}$$. A
  face indexed as such is also unique (if it exists in $$F$$).
+ If it is understood we are talking about a face $$f_{ijk}$$, then
  the edge $$e_{i} := e_{jk}$$ is the edge opposite vertex $$v_{i}$$.

### Metrics on discrete spaces

We say that a discrete surface is with Euclidean (hyperbolic,
spherical) *background geometry* if it is constructed by isometrically
gluing triangles in $$\mathbb E^2$$ ($$\mathbb H^2$$, $$\mathbb
S^2$$). We will nearly exclusively consider the Euclidean case, but
the results still hold so long as the appropriate laws of
sines/cosines are considered. There is more detail on other background
geometries in [the paper](http://arxiv.org/abs/1401.0401). An example
of a discrete surface with Euclidean background geometry is a usual
(triangulated) polygonal mesh seen in computer graphics.

Of course, our triangle meshes have no notion of length yet. Define a
*discrete Riemannian metric* to be a function $$l: E \to \RR^+$$ which
associates to each edge in the mesh a distance satisfying the triangle
inequality; if we denote $$l_{ij} := l(e_{ij})$$ or $$l_{i} :=
l(e_i)$$, then for each face $$f_{ijk}$$

$$ l_{j} + l_{k} > l_{i},\; l_{i} + l_{k} > l_{j},
\;\text{and}\; l_{i} + l_{j} > l_{k}. $$

Given a metric and a background geometry, one can use the appropriate
law of cosines to relate lengths to angles $$\theta_i^{jk}$$ at vertex
$$v_i$$ on face $$f_{ijk}$$; with Euclidean background geometry this
is of course

$$ l_i^2 = l_j^2 + l_k^2 - 2l_jl_k \cos {\theta_i^{jk}}. $$

The notion of angle allows us to define *discrete Gauss curvature*, which is the "angle deficit function" defined on the vertices of the mesh; $$K: V \to \RR$$,

$$ K(v_i) = \left\{ \begin{array}
{}2 \pi - \textstyle\sum_{jk} \theta_i^{jk}, & v \not\in \partial \Sigma \\
\pi - \textstyle\sum_{jk} \theta_i^{jk}, & v \in \partial \Sigma
\end{array} \right., $$

where $$\partial \Sigma$$ denotes the boundary of the mesh.

Quite handily, the Gauss-Bonnet theorem holds for curvature defined in
this way:

**Theorem** (Discrete Gauss-Bonnet) Let $$(\Sigma, l)$$ be a
  triangular mesh with a discrete Riemannian metric and either
  spherical, Euclidean, or hyperbolic background geometry. Then the
  total curvature is a topological invariant; i.e.,

$$ \sum_{v \not \in \partial \Sigma} {K(v)} +
\sum_{v \in \partial \Sigma} {K(v)} + \epsilon A(\Sigma)
= 2 \pi \chi(\Sigma), $$

where $$\chi(\Sigma)$$ is the Euler characteristic of the mesh (either
as a manifold *or* a 2-simplicial complex), $$A(\Sigma)$$ is the total
area $$\sum_{f \in F} {A(f)}$$, and $$\epsilon = \{+1, 0, -1\}$$ if
$$\Sigma$$ has spherical, Euclidean, or hyperbolic background geometry
respectively.

Notice that in the case of Euclidean background geometry, the surface
area term vanishes, and so total curvature depends entirely on Euler
characteristic.

### Circle packing metrics and conformality

The idea of "conformality" is lost on a discrete Riemannian metric
alone, so we will now define a specific type of metric on a triangular
mesh which can.

Let $$\Sigma = (V,E,F)$$ be a triangle mesh with Euclidean, spherical,
or hyperbolic background geometry. A *circle packing metric* is a
4-tuple $$(\Sigma, \gamma, \eta, \epsilon)$$ together with a
background geometry, where:

+ $$\gamma: V \to \RR^+$$ is the *circle radius function,* which
  associates to each vertex on the mesh a radius (imagine a sphere
  about each vertex in the mesh),
+ $$\epsilon: V \to \{+1, 0, -1\}$$ is the *scheme coefficient*, and
+ $$\eta: E \to \RR$$ is the *discrete conformal structure coefficient*.

With circle packing metrics we now have a concept of *discrete
conformal equivalence*: Two circle packing metrics $$(\Sigma_1,
\gamma_1, \eta_1, \epsilon_1)$$ and $$(\Sigma_2, \gamma_2, \eta_2,
\epsilon_2)$$ are conformally equivalent if $$\Sigma_1 = \Sigma_2$$,
$$\eta_1 = \eta_2$$, and $$\epsilon_1 = \epsilon_2$$, i.e., they only
differ by circle radius.

In the smooth case, we considered conformal deformations
$$e^{2u}\mathbf g$$ of a Riemannian metric $$\mathbf g$$, where $$u$$
was a *conformal factor*. Circle packing metrics allow us to transfer
this notion: A *discrete conformal factor* for a circle packing metric
$$(\Sigma, \gamma, \eta, \epsilon)$$ is a scalar function defined for
each vertex, $$u : V \to \RR$$,

$$ u_i := \ln {\gamma_i}. $$

Finally, a circle packing metric is a discrete Riemannian metric; we
can recover the length function $$l$$ in the Euclidean background
geometry case by the relation

$$ l_{ij}^2 = 2 \eta_{ij} e^{u_i + u_j} + \epsilon_i e^{2u_i} +
\epsilon_j e^{2u_j}. $$

### Circle packing schemes

The definition of circle packing metric in this way is at first glance
rather *esoteric*. It does however generalize a more typical
definition so as to unify different circle packing "schemes," and even
encompass different flows such as Yamabe flow.

"Thurston's circle packing" scheme is a classical scheme for covering
a graph embedded in the plane as follows: To each vertex $$v_i$$ of
the graph, there is a circle of radius $$\gamma_i$$. Two circles at
vertices $$v_i$$ and $$v_j$$ intersect if any only if there is an edge
$$e_{ij}$$ between the two vertices. The graph is then called the
*nerve* of the circle packing.

A triple $$(\Sigma, \gamma, \phi)$$, where $$\gamma: V \to \RR^+$$ is
the circle radius function and $$\phi: E \to [0, \frac \pi2]$$ is the
*edge angle* function describes a circle packing metric using the
Thurston packing scheme. The circle radius function $$\gamma$$ is the
same as in the above definition, while the edge angle function
$$\phi$$ is defined so that $$\phi_{ij}$$ is the angle formed by the
lines tangent to the circles about $$v_i$$ and $$v_j$$ at their points
of intersection.

{:.center}
![Thurston's CP Scheme diagram](/res/img/blog/2014/thurstoncp_1.png)

Notice that the definition of $$\phi$$ in the definition of the scheme
is equivalent to how it is positioned in the figure above. From the
circle radii and the edge angles, we can work out the lengths of
edges;

$$ \begin{align}
l_{ij}^2 &= l_{ik}^2 + l_{jk}^2 - 2l_{ik}l_{jk} \cos{(\pi - \phi_{ij})} \\
&= l_{ik}^2 + l_{jk}^2 + 2l_{ik}l_{jk} \cos{\phi_{ij}}.
\end{align} $$

So we can translate this scheme into the more general framework from
the previous section as follows: $$\gamma$$ remains the same, and let
$$\eta_{ij} = \cos {\phi_{ij}}$$, while $$\epsilon \equiv 1$$ is
constant. Then the length relations agree.
