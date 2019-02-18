---
layout: teaching
title: Advanced Calculus of One Variable (Math 317)
permalink: /classes/s2019-317/
class: s2019-317
redirect_from:
  - /317/
---

## Advanced Calculus of One Variable (Math 317): 13605

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
+ **Meeting time:** MWF 11:00am &ndash; 11:50am in Engineering E104.
+ **Instructor:** Dr. Harrison Chapman (hchaps [at] gmail.com)
+ **Office:** Weber 212.
+ **Office hours:** In Weber 17.
    + Mondays 12pm--1pm (w/ Will)
    + Wednesdays 10am--11am (w/ Harrison)
    + Wednesdays 1pm--2pm (w/ Will)
    + Thursdays 2pm--3pm (w/ Harrison)
+ **Text:** [Elementary Analysis: The Theory of Calculus](http://link.springer.com/book/10.1007/978-1-4614-6271-2) available as a free PDF download from on-campus computers.

### Resources

+   The [course syllabus is available as a PDF
    here](/static/chapman_317_s19_syllabus.pdf).

+   The textbook is [free to download from an on-campus computer
    here](http://link.springer.com/book/10.1007/978-1-4614-6271-2).

+   [Overleaf](https://www.overleaf.com/) is one way to write your homework using LaTeX,
    if you are interested.
  
### Homework

{% include homework_list.html %}

### Exam information

+   Exam 1
    + Exam 1 will cover all lecture notes up to Friday 2/15/2019 and homework assignments 1-3.
      Book sections that are covered are sections 1--11.
    + [Practice problems](exams/exam1_practice.pdf)
    + [Practice problems solutions](exams/exam1_practice_solutions.pdf)
+   Exam 2
+   Final exam

### Syllabus

{% include_relative _syllabus.md %}
