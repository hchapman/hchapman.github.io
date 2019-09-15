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
        
    {::options parse_block_html="true" /}
    
    <div class="solution collapse">

    We prove this by induction.
    
    **Base case**: Take \\(n=1\\), and notice that \\(1 = 1^2\\).
    
    **Inductive step**: Suppose as an inductive hypothesis that for \\(n = k\\) with \\(k \ge 1\\),
    \\[ 1 + 3 + 5 + \cdots + (2k - 1) = k^2. \\]
    
    (Remark: We aim to show that the statement holds for \\(n = k+1\\), that is that \\(1 + 3 + 5 + \cdots + (2k - 1) + (2(k+1) - 1) = (k+1)^2.\\))
    
    We'll use algebra to show that the LHS of our desired equality is equal to the RHS:
    
    $$ 
    \begin{align*}
    1 + 3 + 5 + \cdots + (2k - 1) + (2(k+1) - 1) &= (1 + 3 + 5 + \cdots + (2k - 1)) + (2(k+1) - 1) \\
    &= k^2 + (2(k+1) - 1) & \quad \textrm{inductive hypothesis}\\
    &= k^2 + 2k + 1 \\
    &= (k+1)^2
    \end{align*} 
    $$
    
    By the transitive property of equality, we have shown that
    \\[ 1 + 3 + 5 + \cdots + (2k - 1) + (2(k+1) - 1) = (k+1)^2. \\]
    
    Hence, by the principle of induction, the statement is true for all \\(n \in \mathbb N\\).
    
    </div>

2.  Use induction to prove that
    \\[ n! \ge 2^n \\]
    for all \\(n \ge 4\\).
    
    1.  First, prove the base case. Notice that \\(n \ne 1\\) for this base case!
    
    2.  Complete the proof.
    
    {::options parse_block_html="true" /}
    
    <div class="solution collapse">

    We prove this by induction.
    
    **Base case**: Take \\(n=4\\), and notice that \\(4! = 24 \ge 16 = 2^4\\).
    
    **Inductive step**: Suppose as an inductive hypothesis that for \\(n = k\\), with \\(k \ge 4 \\);
    \\[ k! \ge 2^{k}. \\]
    
    (Remark: We aim to show that the statement holds for \\(n = k+1\\), that is that \\( (k+1)! \ge 2^{k+1}.\\))
    
    We'll use algebra to show that the LHS of our desired inequality is larger than the RHS.
    
    $$ 
    \begin{align*}
    (k+1)! &= (k+1)k! \\
    &\ge (k+1)2^k & \quad \textrm{inductive hypothesis}\\
    &\ge (2)2^k & \quad {k \ge 4} \\
    &= 2^{k+1}
    \end{align*} 
    $$
    
    By the transitive property of \\(\ge\\), we have shown that
    \\[ (k+1)! \ge 2^{k+1}. \\]
    
    Hence, by the principle of induction, the statement is true for all \\(n \in \mathbb N\\) when \\(n \ge 4\\).
    
    </div>
    
3.  Use induction to prove that there are \\(n!\\) different ways to order the numbers of the set \\(\\{ 1, 2, 3, \cdots, n \\}\\). (Hint. If I have a shuffled deck of cards, and I wanted to put a new card in the deck, how many ways are there for me to do this?)

    {::options parse_block_html="true" /}
    
    <div class="solution collapse">

    We prove this by induction.
    
    **Base case**: Take \\(n=1\\), and notice that there is only one way to order the set, \\(1\\).
    
    **Inductive step**: Suppose as an inductive hypothesis that for \\(n = k \ge 1\\), there are \\(k!\\) ways to order the set.

    Consider the set \\(S = \\{ 1, 2, 3, \cdots, k, k+1 \\}\\). There are \\(k!\\) ways to order the set \\(S \setminus \\{k+1\\}\\); to each of these there are \\((k+1)\\) places to put the element \\(k+1\\) in an ordering of \\(S\\). So, there are \\((k+1)k! = (k+1)!\\) ways to order the set \\(S\\).
    
    Hence, by the principle of induction, the statement is true for all \\(n \in \mathbb N\\).
    
    </div>
