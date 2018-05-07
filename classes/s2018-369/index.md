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
+ **Office hours in Weber 130:** 
    + Tuesdays 11am &ndash; 12pm,
    + Wednesdays 10am &ndash; 12pm,
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

### Software for Linear Algebra

For exams we won't be able to use any calculators or computers, but for your study (and whenever you use linear algebra!) the following tools can work linear algebra calculations for you. There is *no* requirement for the course that you use any of these, but you might find them helpful.

+   We'll be using [SageMath](http://www.sagemath.org/) for some in class demonstrations. It's free, but big (5GB?) and you can just use it online at [CoCalc](https://cocalc.com/).

+   You can use [Python](https://www.python.org) with [Numpy/Scipy](http://www.numpy.org/) for most things, too.

+   The Engineering department is likely to use [MATLAB](https://www.engr.colostate.edu/ens/info/software/matlab.html) a lot. CSU has a [university-wide license and you can download MATLAB here](https://www.mathworks.com/academia/tah-portal/colorado-state-university-40638290.html). You also might be able to find it in their computer labs. [GNU Octave](https://www.gnu.org/software/octave/) is free and similar, but not perfect.

+   [Mathematica](https://www.wolfram.com/mathematica/) is an expensive tool that can do linear algebra. [WolframAlpha](http://www.wolframalpha.com/) can do a lot of one-off calculations for you, and is free and online.

+   [Maple](https://www.maplesoft.com/products/maple/) and [MAGMA](http://magma.maths.usyd.edu.au/magma/) are other tools that might be able to do linear algebra, but I've never used them.
  
### Homework

{% include homework_list.html %}

### Exam topics

+   [Exam 1](exams/1-topics/)
+   [Exam 2](exams/2-topics/)
+   [Exam 3](exams/3-topics/)
+   [Final exam](exams/final-topics/)

### Syllabus

{% include_relative _syllabus.md %}
