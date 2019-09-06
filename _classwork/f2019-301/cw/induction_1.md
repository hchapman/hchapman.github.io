---
title: "Induction Practice"
class-date: 2019-09-06
class: f2019-301
class-name: "Math 301"
---

1.  Use induction to prove that
    \\[ 1 + 3 + 5 + \cdots + (2n - 1) = n^2.\\]
    
    1.  First, prove the base case, where \\(n = 1\\).
    
    2.  Second, suppose the **inductive hypothesis** that for any \\(k \in \mathbb N\\), we know that
        \\[ 1 + 3 + 5 + \cdots + (2k - 1) = k^2.\\]
        Using this, show that
        \\[ 1 + 3 + 5 + \cdots + (2k - 1) + (2(k+1) - 1) = (k+1)^2.\\]
    
    3.  Conclude: "By the principle of induction, we conclude that
        \\[ 1 + 3 + 5 + \cdots + (2n - 1) = n^2.\\]
        holds for any natural number \\(n\\). \\(\Box\\)"

2.  Use induction to prove that
    \\[ n! \ge 2^n \\]
    for all \\(n \ge 4\\).
    
    1.  First, prove the base case. Notice that \\(n \ne 1\\) for this base case!
    
    2.  Complete the proof.
    
3.  Use induction to prove that there are \\(n!\\) different ways to order the numbers of the set \\(\\{ 1, 2, 3, \cdots, n \\}\\). (Hint. If I have a shuffled deck of cards, and I wanted to put a new card in the deck, how many ways are there for me to do this?)
