---
layout: teaching
title: Linear Algebra I (MATH 369)
permalink: /classes/f2017-369/
class: f2017-369
redirect_from:
  - /369/
---

## Linear Algebra I (MATH 369): 67553 and 71607

{% for hw in site.homework %}
{% if hw.class == page.class %}
{% capture nowunix %}{{'now' | date: '%s' | plus: 0}}{% endcapture %}
{% capture duedate %}{{hw.due-date | date: '%s'| plus: 0}}{% endcapture %}
{% assign nowunix = nowunix | plus: 0 %}
{% assign duedate = duedate | plus: 0 %}
{% capture duedelta %}{{nowunix | minus: duedate}}{% endcapture %}
{% assign duedelta = duedelta | plus: 0 %}
{% if duedelta < 86400 %}{% if duedelta > -604800 %}
{:.alert .alert-primary}
<a class="alert-link" href="{{ hw.url }}">{{ hw.title }}</a> is up!
It is due {{ hw.due-date | date: "%A, %B %-d, %Y" }}.
{% endif %}{% endif %}{% endif %}
{% endfor %}

### Course Info
+ **67553 (A):** MWF 1:00pm &ndash; 1:50pm in Weber 223.
+ **71607 (B):** MWF 3:00pm &ndash; 3:50pm in Engineering B2. 
+ **Instructor:** Dr. Harrison Chapman (hchaps [at] gmail.com)
+ **Office:** Weber 223C.
+ **Office hours:** 
    + T 11:00am &ndash; 12:00am,
    + W 10:00am &ndash; 11:00am,
    + R 2:00pm &ndash; 3:00pm,
    + and by appointment.
+ **Text:**
[Linear Algebra (available free online)](https://www.math.ucdavis.edu/~linear/linear-guest.pdf) by
Cherney, Denton, Thomas, and Waldron.

### Resources

+   The
    [1-1:50 course syllabus is available here](/static/chapman_369_f17a_syllabus.pdf),
    and the
    [3-3:50 course syllabus is available here](/static/chapman_369_f17b_syllabus.pdf).
    They are the same except for meeting times.

+   The textbook is free and [available here](https://www.math.ucdavis.edu/~linear/linear-guest.pdf).

+   Grades and homework assignments can be found [Canvas](https://colostate.instructure.com).

+   There are some [opportunities for tutoring from TILT](https://tilt.colostate.edu/learning/tutoring/).

+   There
    [is a list of private tutors maintained by the math department](http://www.math.colostate.edu/courses/Tutoring/tutoring.shtml).
    
+   You can use LaTeX to write your homework without installing anything with a free account at [ShareLaTeX](https://www.sharelatex.com).

+   An example LaTeX homework assignment with some notes can be [found here](https://www.sharelatex.com/project/59a6e571cb832f0ec46b419e).
  
### Homework

{% include homework_list.html %}

### Exam topics

+   [Exam 1](exams/1-topics/)
+   [Exam 2](exams/2-topics/)
+   [Exam 3](exams/3-topics/)

### Syllabus

{% include_relative _syllabus.md %}
