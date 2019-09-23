---
title: "A new counting problem"
class-date: 2019-09-23
class: f2019-301
class-name: "Math 301"
---

1.  Recall our "staircase walk" problem from the last classwork. Let \\(n \in
    \mathbb N\\). We are working on a grid, where we are allowed only to take
    unit-length UP steps and unit-length RIGHT steps.

    1.  How many ways are there to get from the point \\((0,0)\\) to the point
        \\((n,n)\\) using our allowed steps?
        
    2.  How many ways are there to get from the point \\((0,0)\\) to the point
        \\((n-1, n+1)\\) using our allowed steps?
        
    3.  Find a bijection between walks from \\((0,0)\\) to \\((n,n)\\) **that go
        above the line \\(x = y\\)** and all walks from \\((0,0)\\) to \\((n-1,
        n+1)\\). 
        
        **Hint**: If a walk goes about \\(x = y\\), then there is a
        first point where it lands on the line \\(y = x+1\\).
        
    4.  Find a formula for the number of walks from \\((0,0)\\) to \\((n,n)\\)
        **that *do not* go above the line \\(x = y\\)**.
        
2.  Consider words of length \\(2n\\) from the alphabet \\(\\{ (,) \\}\\).
    
    1.  How many such words are there?
    
    2.  How many such words are there **with equal numbers of open- and closed- parentheses**?
    
    2.  How many of these words are **valid parenthesizations**? For example
        \\((())()\\) is valid, since each open parenthesis has a paired closed
        parenthesis to its right, while \\()()(()\\) is invalid, since it has an
        open parenthesis with no closing parenthesis to its right. 
        
        **Hint**:
        Find a bijection with paths counted in 1.d.
