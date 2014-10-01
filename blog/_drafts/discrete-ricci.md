---
title: Discrete Metrics and Conformality (Discrete Ricci Flow I)
author: Harrison
layout: blog_post
---

Last time, we talked about the smooth Ricci flow which, among other
things, flows a metric on a surface conformally to a new one which has
constant Gauss curvature. To talk about "discrete" Ricci flow, we'll
have to first understand these concepts (surface, metric, conformal)
in our discrete setting.

Discrete Surfaces
=================

A *triangular mesh* (our notion of "discrete surface") $$\Sigma$$ is a
two dimensional simplicial complex which is also a manifold: For each
point $$p$$ of $$\Sigma$$ there is a neighborhood $$U(p)$$ of $$p$$
homeomorphic to the plane $$\RR^2$$ or the upper half plane. In the
former case, $$p$$ is an *interior point*; in the latter, a *boundary
point*.

A two dimensional simpliial complex can be expressed as $$\Sigma =
(V,E,F)$$, where $$V$$ is the set of vertices in the complex, $$E$$
the set of edges, and $$F$$ the set of faces.

Metrics on Discrete Spaces
==========================
