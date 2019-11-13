---
title: "Trees, I"
class-date: 2019-11-13
class: f2019-301
class-name: "Math 301"
---

Let \\(G\\) be a connected graph with \\(n\\) vertices. We're going to find
a tree subgraph \\(T\\) of \\(G\\) that contains all vertices of \\(G\\).

1.  Start with any edge (and its two adjacent vertices) in \\(G\\). Call this
    subgraph \\(T_1\\). Explain why \\(T_1\\) has no cycles.

2.  Say we have a tree subgraph \\(T_i\\) of \\(G\\), where \\(T_i\\) has \\(i < n\\)
    vertices. Explain why there is an edge that we can add to \\(T_i\\) to
    produce a new tree subgraph \\(T_{i+1}\\) of \\(G\\).

3.  Repeat step (b) until you have a subgraph \\(T_n\\) of \\(G\\). Explain why...

    1.  \\(T_n\\) is cycle-free

    2.  \\(T_n\\) is connected
    
    This graph \\(T_n\\) is called a spanning tree for \\(G\\).

4.  Draw a graph \\(G\\) with \\(8\\) vertices and \\(13\\) edges.

5.  Apply the above algorithm to your example graph to find a tree subgraph \\(T\\).
