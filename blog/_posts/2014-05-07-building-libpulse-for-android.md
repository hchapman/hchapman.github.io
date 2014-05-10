---
title: Building libpulse for Android, an odyssey
author: hchapman
layout: blog_post
---

It's summer, so aside from math research, it's time to try to dive
back into Android development. Given the small bit of attention that
[Reverb](https://github.com/hchapman/reverb) has seen in the past few
months (namely a much-appreciated verification that Reverb works for
people other than myself).

### Catching up

Of course, the first thing to check is that no new apps have been
released on the Play store for controlling Pulseaudio
remotely. Fortunately, there's still nothing there! So let's get back
to work.

Where I last left off
[three months ago](https://github.com/hchapman/reverb/commit/2d7ea9ce3edb4b02982a36ce4d971e9f44407e12)
I had just managed to move the build process for Reverb over from the
old Eclipse build to the new Gradle build system (which frankly, I
like quite a bit) and Android Studio. I'd then begun to move
libpulse-android (the NDK library for interfacing with PulseAudio)
over too, before I found a
[repo which might be able to build a newer version of libpulse](https://github.com/glance-/pulseaudio-android-ndk)
and tried (and failed) to get it up and running before I collapsed in
bed.

Having already forgotten anyway what kludges and hacks I had tried
before I've made sure to stash my old try in a new branch and `git
checkout -f master` so that I might hope to start anew. First order of
business? Of course, let's see if `bash build.sh` works out of the box...

~~~
configure: error: source directory already configured; run "make distclean" there first
~~~

The month of development in this repository has moved the actual
**compiling** step from the git submodule directories into new
auxiliary "-build" directories. This is nice, but pretty confusing
(since all of the build cruft files are ignored in the .gitignore). I
solved this problem by removing a few `config.h.in`'s until the
problem went away. There's certainly a real solution, and I'd like to
know it, but this worked here and got building back on track.

### Small victories

Finally I had to update the `ANDROID_NDK_ROOT` variable in
`build.sh` to actually point to the location of my NDK install. Then...

~~~
...
 /bin/mkdir -p '/home/harrison/Source/pulseaudio-android-ndk/ndk-arm/sysroot/usr/lib/cmake/PulseAudio'
 /usr/bin/install -c -m 644 PulseAudioConfig.cmake PulseAudioConfigVersion.cmake '/home/harrison/Source/pulseaudio-android-ndk/ndk-arm/sysroot/usr/lib/cmake/PulseAudio'
 /bin/mkdir -p '/home/harrison/Source/pulseaudio-android-ndk/ndk-arm/sysroot/usr/etc/bash_completion.d'
 /usr/bin/install -c -m 644 ../pulseaudio/shell-completion/pulseaudio-bash-completion.sh '/home/harrison/Source/pulseaudio-android-ndk/ndk-arm/sysroot/usr/etc/bash_completion.d'
 /bin/mkdir -p '/home/harrison/Source/pulseaudio-android-ndk/ndk-arm/sysroot/usr/share/vala/vapi'
 /usr/bin/install -c -m 644 ../pulseaudio/vala/libpulse.deps ../pulseaudio/vala/libpulse.vapi ../pulseaudio/vala/libpulse-mainloop-glib.deps ../pulseaudio/vala/libpulse-mainloop-glib.vapi '/home/harrison/Source/pulseaudio-android-ndk/ndk-arm/sysroot/usr/share/vala/vapi'
 /bin/mkdir -p '/home/harrison/Source/pulseaudio-android-ndk/ndk-arm/sysroot/usr/lib/pkgconfig'
 /usr/bin/install -c -m 644 libpulse.pc libpulse-simple.pc '/home/harrison/Source/pulseaudio-android-ndk/ndk-arm/sysroot/usr/lib/pkgconfig'
make[3]: Leaving directory `/home/harrison/Source/pulseaudio-android-ndk/pulseaudio-build'
make[2]: Leaving directory `/home/harrison/Source/pulseaudio-android-ndk/pulseaudio-build'
make[1]: Leaving directory `/home/harrison/Source/pulseaudio-android-ndk/pulseaudio-build'

$
~~~

There we go! Looking at my old NDK toolchain it seems like I had successfully built the library binaries before too, so the battle is far from won.

### The big issue

Aside from

Yep; this error looks familiar:

~~~
Caused by: java.lang.UnsatisfiedLinkError: Cannot load library: soinfo_relocate(linker.cpp:975): cannot locate symbol "rpl_realloc" referenced by "libjson-c.so"...
~~~

Fortunately, this was easy to fix (although there is a better way than my `export`ing of these two variables) by adding

{% highlight bash %}
export ac_cv_func_malloc_0_nonnull=yes
export ac_cv_func_realloc_0_nonnull=yes
{% endhighlight %}

to build.sh.

### What's left?

First and foremost, it seems like some part of my Android build
process does *not* like the tilde in `libpulsecommon-5.0~0.so` and
refuses to add it to the final .apk. This combined with these
**still** asking for `libsndfile.so.2` (which Android, or at least
`System.LoadLibrary()` do not seem to like) make for trouble.

There's also the consideration that a four version jump (from my
present 0.9x build that I used to write Reverb) will *probably*
require a significant edit of my JNI interface... this is pretty
evident from the crashes I get! I think it's probably a good plan to
identify the (*silent!*) crashes that my old legacy code has
every-so-often.
