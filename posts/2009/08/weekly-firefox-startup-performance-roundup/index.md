---
layout: post
title: "Weekly Firefox Startup Performance Roundup"
published_at: 2009-08-15
date: 2009-08-15
tags: firefox mozilla
---

Here's a summary of all the startup-related work going on. Other people on the team are also blogging updates on their individual projects:

*   Ryan Flint: [This Week in Perf - Aug. 14th Edition](http://screwedbydesign.com/blog/2009/08/this-week-in-perf-aug14.php)
*   David Dahl: [Looking for Dead Code](http://daviddahl.blogspot.com/2009/08/looking-for-dead-code.html)
*   Drew Willcoxon: [Startup](http://blog.mozilla.com/adw/2009/08/14/startup/)
As usual, for the details, check out the [Startup Project wiki page](https://wiki.mozilla.org/Firefox/Projects/Startup_Time_Improvements "Startup Improvements wiki").

### Progress

*   [PGO for SQLite, MozStorage and Places](https://bugzilla.mozilla.org/show_bug.cgi?id=419893): Landed on the Places branch. The test failures seen when PGO first landed are not there (yay), but the Talos boxes don't show any clear wins (boo).
*   Dead Code Hunting: Even though he's supposed to be on vacation, David has got the full browser.xul environment pulled in for analysis. More info in his post (linked above). Still a lot of false-positives in the detection code.
*   [Startup timeline](https://bugzilla.mozilla.org/show_bug.cgi?id=480735): Vlad's been working with the NSPR owner, and the latest patch has review, so almost there.
*   [XPCOM component combining](https://bugzilla.mozilla.org/show_bug.cgi?id=507038): No progress from me, but Florian Quèze <span></span>attached a shell script to knit the components together!
*   XPT Linking on Mac: Drew has confirmed big wins from this, split it off into it's [own bug](https://bugzilla.mozilla.org/show_bug.cgi?id=510309). More detailed notes from him on his [wiki page.](https://wiki.mozilla.org/Firefox/Projects/Startup_Time_Improvements/adw_notes)
*   JARification

    *   Taras' [core IO improvements to how JAR file contents are read](https://bugzilla.mozilla.org/show_bug.cgi?id=504864) have landed, as well as the [combining of all chrome into browser and toolkit JARs](https://bugzilla.mozilla.org/show_bug.cgi?id=468011) (this morning!).
    *   Ryan is looking at putting the components directory into a JAR so that it reaps the same benefits as the chrome directories.

*   Testing/Measurement

    *   Met with Alice to talk about various test scenarios, and the deployment process
    *   Started a guide for [taking a Talos test from idea to production](https://wiki.mozilla.org/Testing/Talos/NewTests "Creating a new Talos test")
    *   Initial steps on automatedly testing cold-startup, figuring out platform-specific calls, and what Talos changes are needed
    *   Discussing approaches to micro-benchmarking the browser UI

### Next Steps

*   Enable PGO on mozilla-central, get nightly tester feedback
*   Once the startup timeline lands, get an actual timeline to analyze
*   Reduce false-positives on the dead-code report, document installation and usage, develop plan for continuous integration
*   Work with Ted to get a patch for JS component combining into the packaging process
*   Figure out if there's a win in jar'ing /components or if we just need to fix fastload to not touch the files as much
*   Get XPT linking landed
*   File bugs and get the Talos changes in Alice's queue for cold-startup testing
*   Finish the Talos test development guide
*   Talk with Ryan Doherty about the reporting side of microbenchmarking
[UPDATE: added Drew's blog post]