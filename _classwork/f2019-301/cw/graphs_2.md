---
title: "Graphs, II"
class-date: 2019-10-23
class: f2019-301
class-name: "Math 301"
---

1.  Let's show that: If \\(G = (V,E)\\) is disconnected, then \\(\bar G = (V,
    \bar E)\\) is connected. Let \\(a, b\\) be vertices in \\(V\\).
    
    1.  If there is no path between \\(a, b\\) in \\(G\\), explain why there is an
        edge in \\(\bar G\\) connecting \\(a,b\\).
        
        {::options parse_block_html="true" /}
    
        <div class="solution collapse">
        
        There is no path between \\(a,b\\), so there is no edge \\(ab\\) in
        \\(G\\). But this means there is an edge \\(ab\\) in \\(\bar G\\), which
        is a path between them!
        
        </div>

        
    2.  If there is a path between \\(a, b\\) in \\(G\\), explain why there is
        a vertex \\(c \in V\\) for which there is no path to either \\(a\\) or \\(b\\).
        
        {::options parse_block_html="true" /}
    
        <div class="solution collapse">
        
        Because \\(G\\) is disconnected, there is a pair of vertices \\(v,w\\)
        with no path between them. If \\(a,v\\) are not connected by a path, let
        \\(c=v\\). If \\(a,v\\) are connected by a path, let \\(c=w\\). In
        either case, \\(a\\) is not connected to \\(c\\) by a path. Because
        \\(a,b\\) are connected by a path, \\(b,c\\) are not connected by a path
        either (or else we would have a path from \\(a,c\\)!).
        
        </div>
        
    3.  If there is a path between \\(a, b\\) in \\(G\\), explain why there is a
        path connecting \\(a\\) to \\(b\\) in \\(\bar G\\).
        
        {::options parse_block_html="true" /}
    
        <div class="solution collapse">
        
        There's a vertex \\(c\\) with no paths in \\(G\\) to \\(a\\) or \\(b\\)
        by part (b). But this means there's no edges in \\(G\\) between them. So
        in \\(\bar G\\) we have edges \\(ac\\) and \\(bc\\) that determine a
        path between \\(a,b\\) in \\(\bar G\\).
        
        </div>

        
    4.  Conclude that \\(\bar G\\) is connected.
    
        {::options parse_block_html="true" /}
    
        <div class="solution collapse">
        
        In (a) and (c) we determined that there's a path between \\(a,b\\) in
        \\(\bar G\\) if there was a path between them in \\(G\\) or if there
        wasn't. These are the only two possibilities, so there's always a path
        between \\(a,b\\) in \\(\bar G\\) if \\(G\\) was disconnected.
        
        </div>


2.  Let \\(G\\) be connected and cycle-free. Say \\(G\\) has \\(n\\) vertices.

    1.  Show that if we add a new edge to \\(G\\) we introduce a cycle.
    
        {::options parse_block_html="true" /}
    
        <div class="solution collapse">
        
        Consider vertices \\(a,b\\). Since \\(G\\) is connected, there is a path
        between them. Once we add the edge \\(ab\\), that closes the path into a
        cycle.
        
        </div>


    2.  Show that if we remove an edge from \\(G\\) we disconnect it.
    
        {::options parse_block_html="true" /}
    
        <div class="solution collapse">
        
        Consider an edge \\(ab\\). If we remove the edge, and \\(a,b\\) are
        still connected by a path, then that path would have closed into a cycle
        with edge \\(ab\\). But \\(G\\) is cycle-free.
        
        </div>

    3.  Show that \\(G\\) has at least \\(n-1\\) edges.
    
        {::options parse_block_html="true" /}
    
        <div class="solution collapse">
        
        If we have a graph with \\(k\\) connected components, then adding an
        edge will either decrease the number of connected components by 1
        (connect two components with the edge), or leave it fixed (add the edge
        within one component).
        
        Start with the edgeless graph on \\(n\\) vertices; this has \\(n\\)
        connected components. Optimally placed, each edge will lower the number
        of components by \\(1\\). We need at least \\(n-1\\) edges to make this
        graph only have \\(1\\) connected component.
        
        </div>

    
    4.  We'll prove later in class that \\(G\\) has **exactly** \\(n-1\\) edges.
        Can you see how you might show that now?
        
        {::options parse_block_html="true" /}
    
        <div class="solution collapse">
        
        **Hint.** Show that every such graph with \\(n \ge 2\\) has at least one
        vertex of degree 1.
        
        </div>

