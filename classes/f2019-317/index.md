---
layout: teaching
title: Advanced Calculus of One Variable (Math 317 F19)
permalink: /classes/f2019-317/
class: f2019-317
redirect_from:
  - /317/
---

## Advanced Calculus of One Variable
#### Math 317-002, Fall 2019: CRN 63280

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
+ **Meeting time:** MWF 1:00pm &ndash; 1:50pm in Military Sciences 105.
+ **Instructor:** Dr. Harrison Chapman {%- include email_span.html -%}
+ **Office:** Weber 212.
+ **Office hours:** In Weber 17:
    + Tuesday 1pm--2pm
    + Wednesday 11am--12pm
+ **Text:** [Elementary Analysis: The Theory of Calculus](http://link.springer.com/book/10.1007/978-1-4614-6271-2) available as a free PDF download from on-campus computers and through CSU's library page.

### Resources

+   The [course syllabus is available as a PDF
    here](chapman_317_f19_syllabus.pdf).

+   The textbook is [free to download from an on-campus computer
    here](http://link.springer.com/book/10.1007/978-1-4614-6271-2).

+   [Overleaf](https://www.overleaf.com/) is one way to write your homework using LaTeX,
    if you are interested.
  
### Classwork

{% include classwork_list.html %}
  
### Homework

{% include homework_list.html %}

### Exam information

For our two midterm exams, you are allowed pen/pencil/eraser and a notes sheet:

+  You may use 1 side of a standard 8" x 11" piece of paper (or smaller area).
+  The notes sheet may contain any material, including facts, examples, etc.
+  The notes sheet must be handwritten.
+  The notes sheet must be of your own design (not just copied from a friend).
+  Please write your name on the sheet; I will collect and return it with your exam.
+  **If your sheet does not fit these specifications, you may not use it during the exam.**

For our **final exam**, you are allowed pen/pencil/eraser and a notes sheet:

+  You may use **2** sides of a standard 8" x 11" piece of paper (or smaller area).
+  The notes sheet may contain any material, including facts, examples, etc.
+  The notes sheet must be handwritten.
+  The notes sheet must be of your own design (not just copied from a friend).
+  Please write your name on the sheet; I will collect and return it with your exam.
+  **If your sheet does not fit these specifications, you may not use it during the exam.**

Exam information follows:

+   Exam 1
    + Exam 1 is Friday, October 4
    + Exam 1 will focus on sections 1--5, 7--12
    + Exam 1 will focus on homeworks 1--4
    + [Practice problems](exams/exam1_practice.pdf)
    + [Practice problems solutions](exams/exam1_practice_solutions.pdf)
+   Exam 2
    + Exam 2 is Friday, November 8
    + Exam 2 will focus on sections 12, 14--15, 17--20, 23--25
    + Exam 2 will focus on homeworks 5--8
    + [Practice problems](exams/exam2_practice.pdf)
    + [Practice problems solutions](exams/exam2_practice_solns.pdf)
    + **Exam 2 question re-write information**:
      You have the option to re-write either question 3 or 4, and may earn up to 5 points back to that question (capped at the maximum value of the question). To earn back credit, you must, by **Friday, November 22**:
      1.  *On a blank sheet of paper to be turned in*, you must neatly complete **the entire question**.
      2.  Schedule a 5-10 minute meeting during which you will explain the solution to your chosen question.
      3.  Turn in your final, corrected re-write.
+   Final exam
    + Our final exam will be Tuesday, December 17 from 11:50am--1:50pm in our normal classroom (Military Sciences 105).
    + The final exam is **cumulative**, with extra attention on sections 28, 29, 31, and 32--34.
    + The final exam will focus on homeworks 9--11
    + [Practice problems](exams/final_practice.pdf)
    + [Practice problems solutions](exams/final_practice_solns.pdf)


### Syllabus

{% include_relative _syllabus.md %}
