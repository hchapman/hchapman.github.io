---
title: "The Euclidean Algorithm"
class-date: 2019-10-09
class: f2019-301
class-name: "Math 301"
---

1.  First, let's prove why the Euclidean Algorithm works!

    1.  Show that \\(\gcd(a,b) = \gcd(a, b-a)\\):
    
        1.  Let \\(d = \gcd(a,b)\\) and \\(d' = \gcd(a, b-a)\\)

        2.  Show that \\(d' \mid b\\) and \\(d \mid (b-a)\\).
        
        3.  Explain why \\(d' \le d\\) and \\(d \le d'\\).
        
        4.  Conclude that \\(d' = d\\)
        
    2.  Show our **Fact**, that \\(\gcd(a,b) = \gcd(a,r)\\) by applying part (a)
        repeatedly.
        
2.  Find integers \\(m, n\\) so that \\(\gcd(102, 38) = m102 + n38\\).
