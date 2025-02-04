---
title: "Firefox Startup Performance"
published_at: 2009-08-08
date: 2009-08-08
tags: ["firefox", "fx-team", "mozilla", "performance", "posts"]
---
A team of Firefox developers and others are working on making Firefox startup faster. Per [Mike Beltzner's post](http://beltzner.ca/mike/2009/08/07/firefox-team-weekly-roundups-planning-sprinting-and-reporting/), we'll be updating our status weekly. Here's the status of what the team did this week, as well as pointers to some other work going on. The list here highlights major points, but is not complete. Many more details of these projects, as well as other areas for investigation can be found on the [wiki page](https://wiki.mozilla.org/Firefox/Sprints/Startup_Time_Improvements), and on [Vlad](http://blog.vlad1.com/) and [Taras'](http://blog.mozilla.com/tglek/) blogs.

**Status**

*   [XPCOM component combining](https://bugzilla.mozilla.org/show_bug.cgi?id=507101) (Dietrich): Manually combined a bunch of files, and found improvements in sub 100ms, but varying results, so going to check-in to the Places branch temporarily to get better  numbers. Writing a script to hook into the build system to knit the components together automatically, but need better numbers before going further.
*   [Enabling PGO for SQLite, mozStorage and Places](https://bugzilla.mozilla.org/show_bug.cgi?id=419893) (Dietrich): Made a patch to re-enable PGO for these, and checked into the Places branch. Currently there are unit tests failing, but they look unrelated. Need to trigger more runs to ensure that's the case. Performance numbers are not definitive, need more runs to complete.
*   [Dead code  hunting with JSHydra](https://bugzilla.mozilla.org/show_bug.cgi?id=506128) (DDahl): Have basic code for function finding,  making progress on code for building JS context for chrome URIs. (props  for help from taras, humph, jcranmer in \#static)
*   Combining XPT files on Mac (Drew): Potentially significant gain of a few seconds on startup, investigation continuing.
*   [Startup Timeline](https://bugzilla.mozilla.org/show_bug.cgi?id=480735) (Vlad, DDahl): This is still in review.
*   [Combining jar files](https://bugzilla.mozilla.org/show_bug.cgi?id=504864) (Taras): This is ready to check-in (again).
**Next Steps**

*   Confirm numbers for combining JS components, finish script to automate combining, work with Ted to hook it into the packaging process, see if any modules can be combined.
*   Find out why tests are failing for PGO and quantify gain/loss when the slow tinderboxen finally report some numbers.
*   Get the startup timeline reviewed, landed and start adding markers and performing analysis.
*   Investigate why wall-clock time of combined jars doesn't decrease.
*   Get full browser JS context working in JSHydra, write the uncalled-function script, file dead-code bugs, get it plugged into continuous integration on tinderbox.
*   Get [bug 475289](https://bugzilla.mozilla.org/show_bug.cgi?id=475289) and [bug 499123](https://bugzilla.mozilla.org/show_bug.cgi?id=499123) landed, further reducing IO and component registration time spent at startup.