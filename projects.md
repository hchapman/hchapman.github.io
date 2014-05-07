---
layout: default
title: Projects
projects: true
permalink: /projects/
---

## Projects

In my spare time, I'll often take up tiny coding projects or hack away
at open-source programs. I try to keep everything that I do, big or
small, on my [Github profile](https://github.com/hchapman). Not only
is this website hosted on Github,
[you can view the source for it here](https://github.com/hchapman/hchapman.github.io)!

Here are some of the things I'm proud to have put a substantial amount of
time and effort into:

### Javier

Javier is a secret new app that will *eradicate the need for
furniture*... It's been in development since the middle of summer 2013
and will hopefully see first light before the end of time. It is
planned that the source will be released some time soon afterwards.

### Reverb

Reverb is a PulseAudio (a Linux sound daemon) remote control for
Android phones, using the native PulseAudio libraries (as opposed to
SSH hackery). Many of the features of a typical volume control
application are available: it is possible to adjust the volume of
applications and speakers, as well as move application sound between
speakers.

The project is presently unfinished, as it has a tendency to flood
wireless networks to the point of crashing, but I would otherwise deem
it working well. The source is
[available on my Github](https://github.com/hchapman/reverb), and
should compile.

### WBOR.org

WBOR 91.1FM is the student radio station at Bowdoin College, Brunswick
ME; the [website is here](http://www.wbor.org/). It is written in
Python and runs on the Google app engine. As a website radio
station, it must allow DJs to easily chart their plays (especially for
CMJ and music promoters) and, e.g., PSAs and "station IDs" (for the
FCC). The current incarnation was initially written by Seth Glickman,
but during my tenure I have (aside from maintenance):

+ Redesigned the website (using Bootstrap, with light customization).
+ Implemented a password hash/password reset system.
+ Added user self-registration.
+ Re-wired the database backend to leverage memory caching (to
minimize database reads and improve performance).

The source is [available on Github](https://github.com/rmartinez93/WBOR).
