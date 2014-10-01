---
title: Smooth Surface Ricci Flow
author: Harrison
layout: blog_post
---

I've been trying to make sense of
[this paper](http://http://arxiv.org/abs/1401.0401) for a week now, so
it's probably worth summing up what I've learned so far. Let's first
look at the more classical background--that deals with smooth surfaces
rather than "discrete" surfaces. As we'll see, Ricci flow "smooths"
the metric of a surface out. Notably, Ricci flow (in
3-dimensions) was used by Perelman in his proof of the Poincar&eacute;
conjuecture.

Let $$(S, \mathbf g)$$ be a real surface with Riemannian metric
$$\mathbf g$$. (If $$S$$ is embedded in $$\mathbb R^3$$ then it has a
metric induced by the standard Euclidean metric on $$\mathbb
R^3$$). If $$u: S \to \mathbb{R}$$ is a scalar function, then
$$\overline{\mathbf g} := e^{2u}\mathbf g$$ is *also* a Riemannian
metric, and it is such that angles measured by $$\mathbf g$$ are the
same as $$\overline{\mathbf g}$$, so $$\overline{\mathbf g}$$ is a
*conformal deformation* of, or "conformal to" $$\mathbf g$$.

Of course, you could come across other metrics conformally equivalent
to $$\mathbf g$$. The $$e^{2u}$$ in the definition of
$$\overline{\mathbf g}$$ might seem a bit contrived for the moment as
well, but it come in handy soon...

It is possible to express how curvature changes when metrics are
conformally deformed. If $$K$$ is the Gaussian curvature of $$\mathbf
g$$, then the curvature of $$\overline{\mathbf g}$$ will be

$$ \overline{K} = e^{-2u}(-\Delta_{\mathbf g}u + K), $$

where $$\Delta_{\mathbf g}$$ is the Laplace-Beltrami operator of the
original metric $$\mathbf g$$. According to the Gauss-Bonnet theorem,
the total curvature under either metric must be $$2 \pi \chi(S)$$
(with $$\chi(S)$$ being the Euler characteristic of S, an integer
which does not depend on choice of metric).

**Theorem** (Uniformization theorem). If $$(S, \mathbf g)$$ is a
  compact real surface with Riemannian metric $$\mathbf g$$ then there
  is a metric $$\overline{\mathbf g}$$ which is conformal to $$\mathbf
  g$$ with constant Gaussian curvature $$K \in \{+1, 0, -1\}$$
  everywhere.

Such a metric is called the *uniformization metric* of the surface
$$S$$. As a direct consequence of the Gauss-Bonnet theorem, the
constant Gaussian curvature depends only on the Euler characteristic
of $$S$$: It is $$+1$$ if $$\chi(S) > 0$$, $$0$$ if $$\chi(S) = 0$$,
or $$-1$$ if $$\chi(S) < 0$$.

It is then possible using the uniformization metric to embed the
universal covering space of a closed surface into one of the three
constant-curvature surfaces: The sphere $$\mathbb S^2$$ with constant
curvature $$+1$$, the plane $$\mathbb E^2$$ with constant curvature
$$0$$, or the hyperbolic plane $$\mathbb H^2$$ with constant curvature
$$-1$$.

The *normalized Ricci flow* deforms the metric $$\mathbf g$$ on a smooth surface
$$S$$ along a path $$\mathbf g(t)$$ (with $$\mathbf g =: \mathbf
g(0)$$) conformally (so that $$\mathbf g(t) = e^{2u(t)}\mathbf g$$)
according to curvature $$K(t)$$ as

$$ \frac{du(t)}{dt} = \frac{2\pi \chi(S)}{A(0)} -K(t), $$

Where $$A(0)$$ is the initial area of the surface (and so the first
term is the uniform curvature to which the surface will converge).
Theorems by R. Hamilton (1988) and B. Chow (1991) show that the Ricci
flow converges to the uniformization metric $$\mathbf g(\infty)$$ for
closed surfaces of any Euler characteristic. Additionally, given a
target curvature $$\overline{K}$$, there is a modified Ricci flow
which converges on a metric with any desired (admissible, by
Gauss-Bonnet) curvature;

$$ \frac{du(t)}{dt} = \overline{K} - K. $$

In a near-future post, we'll see what ideas from the smooth case that
we can apply to a 2-simplicial complex (a "discrete" surface).
