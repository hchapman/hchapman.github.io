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

+   Exam 1
    + Exam 1 is tentatively scheduled for October 4
    + [Practice problems (tentative)](exams/exam1_practice.pdf)
    + [Practice problems solutions](exams/exam1_practice_solutions.pdf)
+   Exam 2
    + Exam 2 is tentatively scheduled for November 8
    + [Practice problems (tentative)](exams/exam2_practice.pdf)
    + [Practice problems solutions](exams/exam2_practice_solns.pdf)
+   Final exam
    + Our final exam will be Tuesday, December 17 from 11:50am--1:50pm in our normal classroom (Military Sciences 105).

### Syllabus

{% include_relative _syllabus.md %}
