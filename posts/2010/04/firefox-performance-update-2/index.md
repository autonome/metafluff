---
layout: post
title: Firefox Performance Update
published_at: 2010-04-17
date: 2010-04-17
tags: firefox firefox mozilla mozilla Performance startup
---

I've been focusing more on [Jetpack](https://wiki.mozilla.org/Labs/Jetpack) development this quarter, but will still be posting performance round-ups regularly here. In fact, here's one now:

*   Taras Glek continues to blog his progress on improving the binaries we ship, talking about [how reordering binaries improves memory use as well as load time](http://blog.mozilla.com/tglek/2010/04/05/linux-how-to-make-startup-suck-less-and-reduce-memory-usage/), [leveraging GCC's PGO for fast startup](http://blog.mozilla.com/tglek/2010/04/12/squeezing-every-last-bit-of-performance-out-of-the-linux-toolchain/), and finally about [Icegrind, his Valgrind plugin](http://blog.mozilla.com/tglek/2010/04/07/icegrind-valgrind-plugin-for-optimizing-cold-startup/) that generates a log of the order of access to mmap'd files.
*   Are we fast yet?! The answer to that question, at least in regards to JavaScript performance test suites, can be found at [AreWeFastYet.com](http://arewefastyet.com/), where you'll see graphs that show Firefox trunk's performance relative to Google's V8 and Apple's Nitro on the Sunspider and V8Bench tests. I won't spoil the answer for you, you'll have to go check it out for yourself.
*   I [finished and checked-in](https://bugzilla.mozilla.org/show_bug.cgi?id=557552) my changes to the [Tinderbox Pushlog](http://tests.themasta.com/tinderboxpushlog/?tree=Firefox), adding a new feature that provides at-a-glance comparison in performance test results between any two pushes on the page ([screenshot](https://bug557552.bugzilla.mozilla.org/attachment.cgi?id=437335)). It will go live next time Marcus pushes changes out to his server. <span style="text-decoration:line-through;">But he's not online at the moment, so I don't know when this feature will go live.</span> Heh, it went live moments after I published this post.
*   Heather Arthur and Clint Talbert are working on a project to add performance data to Addons.mozilla.org for extensions. They're starting with the effect of a given extension on Firefox startup time. Follow along on the [bug](https://bugzilla.mozilla.org/show_bug.cgi?id=559929), or [watch project Dirty Harry on Github](http://github.com/harthur/dirtyharry).
*   Improving the AMO extension validator: AMO scans uploaded extensions and reports problems to the authors. For performance best-practices, we should at least warn the authors if possible if their add-on is doing something that'll make Firefox slow. This bug is for [warning about add-ons that don't have their content in a JAR file](https://bugzilla.mozilla.org/show_bug.cgi?id=551714). If you see any thing in the [best practices guide](https://wiki.mozilla.org/Performance/Addons/BestPractices) that can be statically detected, please file a bug for it [here](https://bugzilla.mozilla.org/enter_bug.cgi?product=addons.mozilla.org&component=Admin%2fEditor%20Tools).
If you have any other performance-related bugs, blog posts, anecdotes or other tomfoolery, post it in the comments!