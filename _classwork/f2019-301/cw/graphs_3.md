---
title: "Graphs, III"
class-date: 2019-10-28
class: f2019-301
class-name: "Math 301"
---

1.  How many walks are there of 6 steps... (a) On \\(K_7\\)? (b) On \\(C_7\\)?
    
2.  How many paths of 3 edges are there... (a) In \\(K_7\\)? (b) In \\(C_7\\)?

3.  Let \\(G\\) be a connected graph with at least two vertices. Prove that
    there is at least one vertex \\(v\\) in \\(G\\) that can be removed (along
    with all edges connected to \\(v\\)) while leaving the remaining graph
    connected.
    
    Here's one way we can prove this.
    
    The **distance** \\(d(u,v)\\) between two vertices \\(u,v\\) in a graph
    \\(G\\) is the length of the shortest path between them (If there is no
    path, the distance is infinite).
    
    1.  Pick a vertex \\(w\\) in \\(G\\).
    
    2.  Explain why there is a vertex \\(v\\) in \\(G\\) which maximizes \\(d(w, v)\\).
    
    3.  Explain why for any vertex \\(u \ne v\\) in \\(G\\) there is a path from
        \\(w\\) to \\(u\\) that does not include \\(v\\).
    
    4.  Conclude that removing \\(v\\) from \\(G\\) leaves \\(G\\) connected.
