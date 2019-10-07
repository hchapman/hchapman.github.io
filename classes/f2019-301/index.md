---
layout: teaching
title: Introduction to Combinatorial Theory (Math 301 F19)
permalink: /classes/f2019-301/
class: f2019-301
redirect_from:
  - /301/
---

## Introduction to Combinatorial Theory
#### Math 301-002, Fall 2019: CRN 13605

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
+ **Meeting time:** MWF 3:00pm &ndash; 3:50pm in Wagar 132.
+ **Instructor:** Dr. Harrison Chapman {%- include email_span.html -%}
+ **Office:** Weber 212.
+ **Office hours:** In Weber 17:
    + Tuesday 2pm--3pm
    + Wednesday 10am--11am
+ **Text:** [Discrete Mathematics: Elementary and Beyond](https://link.springer.com/10.1007/b97469) available as a free PDF download from on-campus computers and through CSU's library page. ([See also the list of typos, here](https://www.math.colostate.edu/~adams/teaching/TyposMath301.pdf))

### Resources

+   The [course syllabus is available as a PDF
    here](chapman_301_f19_syllabus.pdf).

+   The textbook is [free to download from an on-campus computer
    here](https://link.springer.com/10.1007/b97469).

+   [Overleaf](https://www.overleaf.com/) is one way to write your homework using LaTeX,
    if you are interested.
    
### Classwork

{% include classwork_list.html %}
  
### Homework

{% include homework_list.html %}

### Exam information

For our two midterm exams, you are allowed pen/pencil/eraser and a notes sheet:

+  You may use 1 side for of a standard 8" x 11" piece of paper (or smaller area).
+  The notes sheet may contain any material, including facts, examples, etc.
+  The notes sheet must be handwritten.
+  The notes sheet must be of your own design (not just copied from a friend).
+  Please write your name on the sheet; I will collect and return it with your exam.
+  **If your sheet does not fit these specifications, you may not use it during the exam.**

Exam information follows:

+   Exam 1
    +  Exam 1 is Friday, October 4.
    +  Exam 1 will focus on sections 1.1--1.3, 1.5-1.8, 2.1, 2.4, 3.1--3.6, 4.1--4.3.
    +  Exam 1 will focus on material from Homeworks 1--4.
    +  [Practice questions can be found here](exams/exam1_practice.pdf)
    +  Exam 1 Rewrite: Question 2 or 3. **Due by October 18th**.
+   Exam 2
    + Exam 2 is tentatively scheduled for November 8.
+   Final exam
    + Our final exam will be Wednesday, December 18 from 7:30--9:30am in our normal classroom (Wagar 132).

### Syllabus

{% include_relative _syllabus.md %}
