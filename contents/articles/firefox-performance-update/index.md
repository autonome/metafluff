---
layout: post
title: Firefox Performance Update
published_at: 2010-04-03
date: 2010-04-03
tags: firefox firefox mozilla mozilla Performance startup
---

As I mentioned in [my previous update](http://autonome.wordpress.com/2010/03/19/firefox-performance-update-startup-and-otherwise-march-19-2010/), the scope of these updates has expanded beyond start-up time. That said, I can't keep track of everything! So if you have an update, [email it to me](mailto:dietrich@mozilla.com) if you want it in the post, or just add it in the comments.

*   First, I just have to say that Marco's fix for [bug 542943](https://bugzilla.mozilla.org/show_bug.cgi?id=542943) has changed the way I think about browser restarts, removing the fear entirely. It turns out that, for me anyway, the majority of the slowness involved in restarting was waiting for the process to exit. After Marco's landing, it's nearly instantaneous.
*   While I was away, Taras blogged nearly daily about his findings while working on [Linux code locality](https://bugzilla.mozilla.org/show_bug.cgi?id=549749). He first posted [a graph of I/O from library loading](http://blog.mozilla.com/tglek/2010/03/23/when-in-trouble-draw-a-picture/), then a long post about [why library loading sucks on Linux](http://blog.mozilla.com/tglek/2010/03/24/linux-why-loading-binaries-from-disk-sucks/), followed by some findings regarding [madvise and prelink](http://blog.mozilla.com/tglek/2010/03/25/madvise-prelink-update/), finally posting about [linker inefficiencies and SuSE's workaround](http://blog.mozilla.com/tglek/2010/03/29/linux-startup-inefficiency/).
*   Mike Wu and others are moving forward on [the "omnijar" project](https://bugzilla.mozilla.org/show_bug.cgi?id=552121), which moves most of the core application files into a single JAR file. Taras described it as "extreme filesystem makeover", and found ~10% start-up improvement with this approach on the desktop.
*   Clint Talbert and Heather Arthur are beginning work on a project that measures add-on performance, that will hook into AMO to show developers how their add-ons perform.
*   Drew Willcoxon got r+ on [bug 536893](https://bugzilla.mozilla.org/show_bug.cgi?id=536893) to allow asynchronous opening of Places query results. Once we start using the feature, expect bookmark and history UI to get snappier!
*   Taras got review on [bug 516085](https://bugzilla.mozilla.org/show_bug.cgi?id=516085), which consolidates access to core services that currently accessed hundreds of thousands of times during a browsing session.
*   A bunch of people have added tips to the [add-on performance "best practices" document](https://wiki.mozilla.org/Performance/Addons/BestPractices). I'll be cleaning it up and moving it to [MDC](https://developer.mozilla.org) soon.
*   While the tinderbox pushlog is fantastic for viewing per-checkin results, and a broader view of tree activity, it doesn't provide any facility for comparing the results of performance tests between landings. So I spent some time this week writing an addition that allows you to select any two pushes, and view a comparison table showing the difference in performance across all tests on all operating systems for those revisions. I'll clean it up, and try to get it deployed, but regardless will make it available as a Jetpack or Greasemonkey script sometime next week.
For more info:

*   Startup performance activity is tracked [here](https://wiki.mozilla.org/Firefox/Projects/Startup_Time_Improvements).
*   Add-on performance efforts are being tracked on [this page](https://wiki.mozilla.org/Performance/Addons).
*   Weekly performance results for all measurements are available on the [snapshot](http://graphs.mozilla.org/dashboard/snapshot/), and trends available on the [dashboard](http://graphs.mozilla.org/dashboard/).