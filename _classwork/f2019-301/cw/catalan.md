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
        
        {::options parse_block_html="true" /}
    
        <div class="solution collapse">
        
        This question is equivalent to, "How many words from the alphabet {U,R} of length \\(2n\\) have \\(n\\) U's and \\(n\\) R's?" The answer is thus \\(\binom {2n}{n}\\).
        
        </div>
        
    2.  How many ways are there to get from the point \\((0,0)\\) to the point
        \\((n-1, n+1)\\) using our allowed steps?
        
        {::options parse_block_html="true" /}
    
        <div class="solution collapse">

        Similar to part a, this question is equivalent to, "How many words from the alphabet {U,R} of length \\(2n\\) have \\(n+1\\) U's and \\(n-1\\) R's?" The answer is thus \\(\binom {2n}{n-1} = \binom{2n}{n+1}\\).

        </div>

        
    3.  Find a bijection between walks from \\((0,0)\\) to \\((n,n)\\) **that go
        above the line \\(x = y\\)** and all walks from \\((0,0)\\) to \\((n-1,
        n+1)\\). 
        
        **Hint**: If a walk goes about \\(x = y\\), then there is a
        first point where it lands on the line \\(y = x+1\\).
        
        {::options parse_block_html="true" /}
    
        <div class="solution collapse">
        
        Notice that if a path from \\((0,0)\\) to \\((n,n)\\) ever crosses above the line \\(y = x\\), it touches the line \\(y = x+1\\). Since it touches the line, there is a part of the path that is the **first** place it touches the line. The same can be said for *any* path from \\((0,0)\\) to \\((n-1,n+1)\\); since the start point is below the line but the end point is **above** the line, any path that gets to \\((n-1,n+1)\\) has to touch \\(y = x+1\\)!
        
        Take any path from \\((0,0)\\) to a point \\(P\\) that touches the line \\(y = x+1\\). The path touches the line at some first point, \\(Q\\). Fix the path from \\((0,0)\\) to \\(Q\\) constant, but reflect the path from \\(Q\\) to \\(P\\) through the line \\(y = x+1\\). This reflection interchanges up steps and right steps, so the path is still one satisfying the rules laid out.
        
        Notice that the reflection of \\((n,n)\\) is \\((n-1, n+1)\\) and vice versa. This reflection procedure thus describes a bijective correspondence between walks from \\((0,0)\\) to \\((n,n)\\) that go
        above the line \\(x = y\\) and all walks from \\((0,0)\\) to \\((n-1,
        n+1)\\).
        
        We conclude that the number of walks from \\((0,0)\\) to \\((n,n)\\) that go above \\(y=x\\) is \\(\binom {2n}{n-1}\\).

        </div>
        
    4.  Find a formula for the number of walks from \\((0,0)\\) to \\((n,n)\\)
        **that *do not* go above the line \\(x = y\\)**.
        
        {::options parse_block_html="true" /}
    
        <div class="solution collapse">
        
        If we have a walk that goes from \\((0,0)\\) to \\((n,n)\\) which was not counted in part c, it must be a walk that we want to count here. So, the count of such walks is;
        
        \\[ \binom{2n}{n} - \binom{2n}{n-1} = \frac{1}{n+1}\binom{2n}{n}. \\]

        This number is also called the \\(n\\)th **Catalan number** \\(C_n\\), and it is the answer to many different counting problems, as we'll see in question 2.

        </div>

        
2.  Consider words of length \\(2n\\) from the alphabet \\(\\{ (,) \\}\\).
    
    1.  How many such words are there?
    
        {::options parse_block_html="true" /}
    
        <div class="solution collapse">
        
        There are 2 letters in the alphabet and \\(2n\\) letters per word, so \\(2^{2n}\\).

        </div>
    
    2.  How many such words are there **with equal numbers of open- and closed- parentheses**?
    
        {::options parse_block_html="true" /}
    
        <div class="solution collapse">

        This is a question we've answered before. There are \\(2n\\) letters to be chosen, and \\(n\\) (that is, half) of them must be \\((\\). So we pick the \\(n\\) spots and the rest must be filled with \\()\\). So, there are \\(\binom {2n}{n}\\) such words.

        </div>

    
    2.  How many of these words are **valid parenthesizations**? For example
        \\((())()\\) is valid, since each open parenthesis has a paired closed
        parenthesis to its right, while \\()()(()\\) is invalid, since it has an
        open parenthesis with no closing parenthesis to its right. 
        
        **Hint**:
        Find a bijection with paths counted in 1.d.
        
        {::options parse_block_html="true" /}
    
        <div class="solution collapse">
        
        If we change the letter \\((\\) to a right step and \\()\\) to an up step, notice that valid parenthesizations are exactly words that pair with paths counted in 1.d that do not go above the line \\(y = x\\). So, the number of valid parenthesizations is \\(C_n\\), the \\(n\\)th Catalan number:
        
        \\[ \frac{1}{n+1}\binom{2n}{n} \\]

        </div>

