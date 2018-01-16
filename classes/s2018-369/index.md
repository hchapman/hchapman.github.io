---
layout: teaching
title: Linear Algebra I (MATH 369)
permalink: /classes/s2018-369/
class: s2018-369
redirect_from:
  - /369/
---

## Linear Algebra I (MATH 369): 13649 (also: 26435)

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
+ **Meeting time:** MWF 8:00am &ndash; 8:50am in Weber 202.
+ **Instructor:** Dr. Harrison Chapman (hchaps [at] gmail.com)
+ **Office:** Weber 223C.
+ **Office hours:** 
    + TBD
    + and by appointment.
+ **Text:** Not required. Elementary Linear Algebra by Howard Anton (any
recent-ish edition should be fine) [potentially available online
here.](https://warwick.ac.uk/fac/sci/maths/undergrad/ughandbook/content/ma106/elementary_linear_algebra_10th_edition.pdf)

### Resources

+   The
    [course syllabus is available as a PDF here](/static/chapman_369_s18_syllabus.pdf).

+   The textbook is [potentially available online
here.](https://warwick.ac.uk/fac/sci/maths/undergrad/ughandbook/content/ma106/elementary_linear_algebra_10th_edition.pdf) 

+   Grades and can be found [Canvas](https://colostate.instructure.com).

+   Homework assignments will be available at this website.

+   There are some [opportunities for tutoring from TILT](https://tilt.colostate.edu/learning/tutoring/).

+   There
    [is a list of private tutors maintained by the math department](http://www.math.colostate.edu/courses/Tutoring/tutoring.shtml).
    
+   You can use LaTeX to write your homework without installing anything with a free account at [ShareLaTeX](https://www.sharelatex.com).

+   An example LaTeX homework assignment with some notes can be [found here](https://www.sharelatex.com/project/59a6e571cb832f0ec46b419e).

+   You can use Sage (math software) for free online at [CoCalc](https://cocalc.com/).

+   Our class Sage demonstrations [can be found here](https://cocalc.com/projects/234f0df6-9cfe-43e5-a8df-df10a5fcd44c).
  
### Homework

{% include homework_list.html %}

### Syllabus

{% include_relative _syllabus.md %}
