---
title: "Counting problems and the pigeonhole principle"
class-date: 2019-09-13
class: f2019-301
class-name: "Math 301"
---

1.  How many different strings can you make by rearranging the letters of MATHEMATICS? For example, one is THEMMAASTIC.

    {::options parse_block_html="true" /}
    
    <div class="solution collapse">

    There are 11 letters in MATHEMATICS. So, if all letters were distinct, there would be \\(11!\\) words we could make. But, there are two M's, T's, and A's that are each indistinguishable. Each of those three letters can appear in any of \\(2!\\) ways each. So, the answer is;
    \\[ \frac{11!}{(2!)^3}.\\]
    
    </div>

2.  On an \\(n \times n\\) grid, how many paths connect the lower-left corner to the upper-right corner, if only unit-length up steps and unit-length right steps are allowed? Here are examples for sizes \\(n = 1,2,3\\):

    <figure>
      <img src="/res/img/classes/StaircaseWalk_950.gif" class="mx-auto d-block">
      <figcaption class='mx-auto d-block' align="center">
      (Source: Wolfram MathWorld)
      </figcaption>
    </figure>
    
    {::options parse_block_html="true" /}
    
    <div class="solution collapse">

    Since we can only walk up or right, notice that every path must consist of \\(2n\\) steps. Furthermore, we can only make it to the top right corner if we take the same number of up-steps as right-steps (that is, \\(n\\) of them). So, the answer is
    \\[ \binom {2n}n. \\]
    
    This is a neat problem, since it's not obvious from the get-go that we can solve it with binomial coefficients!
    
    </div>
    
3.  If 11 numbers are chosen from between 1 and 100, show that two of them have difference less than 10.

    {::options parse_block_html="true" /}
    
    <div class="solution collapse">
    
    If we make buckets be the mutually exclusive sets \\(\\{x \in \mathbb R : 10(k-1) < x \le 10k\\}\\) for \\(k \in \mathbb N, 1 \le k \le 10\\), we have partitioned the numbers \\((0,100]\\) into 10 mutually exclusive buckets. Notice that if we take any two numbers \\(x,y\\) where \\(x > y\\) in the same bucket, their difference is \\( x-y < 10k - 10(k-1) = 10.\\)
    
    If we choose 11 numbers from 1--100, we can then put each number in its appropriate bucket. There are 11 numbers and 10 buckets, so the pigeonhole principle says that at least one bucket has two numbers; that is, at least two numbers have difference less than 10.
    
    One last thing---notice the way we've proved this works whether we're picking integers *or* real numbers.

    </div>
