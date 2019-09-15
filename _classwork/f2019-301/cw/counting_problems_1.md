---
title: "Some Counting Problems"
class-date: 2019-08-28
class: f2019-301
class-name: "Math 301"
---

1.  7 people want to play rock-paper-scissors (a one-on-one game), so that everyone has played everyone else exactly once. How many matches are played in total?

    {::options parse_block_html="true" /}
    
    <div class="solution collapse">

    One way to phrase this problem is, "How many ways are there to make 1 group of 2 objects from a set of 7?" So, the answer is
    \\[ \binom 72 = \frac{7(6)}{2(1)} = 21. \\]

    </div>


2.  How many 5-card hands are there if playing cards with a standard 52-card deck?

    {::options parse_block_html="true" /}

    <div class="solution collapse">

    This is another unordered subset problem. One way to phrase the question is, "How many ways are there to make an unordered 5-subset (hand) from a set of 52 elements (deck)?" So, the answer is
    \\[ \binom {52}5. \\]

    </div>

3.  You throw 8 identical quarters at once, and each either lands heads- or tails-up. How many different possibilities are there?

    {::options parse_block_html="true" /}

    <div class="solution collapse">

    The quarters are identical, so the only difference with any scenario is the numbers of heads and tails. Since a coin either lands heads- or tails- up (this is called a *dichotomy*), the number of tails is determined by the number of heads (\\( T = 8-H \\)). There can be anywhere between 0 or 8 (inclusive) heads, so there are 9 possibilities.
    
    Here is actually another way to answer this question. There are 8 identical quarters and one change in distinction (heads vs. tails). So, imagine \\( 8+1 = 9 \\) empty spots. There are \\( \binom 9 1 = 9 \\) places to put a virtual "side-change marker", to which left are all heads and right are all tails. We'll come back to this idea later!

    </div>

4.  You throw 1 penny 8 times, recording in order whether it lands heads- or tails-up each time. How many different head-tail sequences are possible?

    {::options parse_block_html="true" /}

    <div class="solution collapse">

    This problem deals with sequences of 8 letters from the alphabet \\(\\{ H,T \\}\\). So the answer is \\( 2^8 \\) sequences are possible.

    </div>

5.  How many ways are there to pair up 8 students in groups of 2?

    {::options parse_block_html="true" /}

    <div class="solution collapse">

    This problem is different from the first, because instead of choosing just one pair each time, we're now pairing up every student. There are \\( 8! \\) ways to order all 8 students; say we pair up the students in pairs first-second, third-fourth, etc. Then, each pair's order doesn't matter (there are \\(2!\\) ways to order each given pair), and the order of the pairs doesn't matter (there are \\(4!\\) ways to order any 4 pairs). So, the answer is:
    \\[ \frac{8!}{4!\;2^4}\\]

    </div>
