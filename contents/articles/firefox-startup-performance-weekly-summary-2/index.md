---
layout: post
title: Firefox Startup Performance Weekly Summary
published_at: 2009-09-19
date: 2009-09-19
tags: firefox firefox mozilla mozilla Performance
---

Apologies for not posting last week, but [I was on vacation](http://dietrich.tumblr.com/post/189638511/atp-was-so-much-damn-fun). Recent activity:

*   I've updated the project wiki page with [a table of summarized numbers](https://wiki.mozilla.org/Firefox/Projects/Startup_Time_Improvements#Overview) for at-a-glance tracking of progress. I need to disable superfetch and try again on Windows.
*   Our measurements of cold startup showed a huge regression on Windows from 3.5 to 3.6. Tracking this in [bug 517741](https://bugzilla.mozilla.org/show_bug.cgi?id=517741).
*   JARification: David abandoned [moving JS  modules into a JAR file](https://bugzilla.mozilla.org/show_bug.cgi?id=509755), since those files are fastloaded. However, since we want things like post-extension-install restarts to be fast, and those cause fastload cache invalidation, we might want to do things like this anyways. I filed a bug for the same treatment for components. These are lower priority, since they're not the normal startup case. Follow along with all JAR-ification via[ the tracker  bug](https://bugzilla.mozilla.org/show_bug.cgi?id=513027).
*   JAR Performance: I'm going to test-land [bug 510844](https://bugzilla.mozilla.org/show_bug.cgi?id=510844) on the Places branch to figure out what's going wrong on the tinderbox. It should increase throughput of JAR file reading, possibly affecting Ts and Tp.
*   Removing the [needless stats of already-fastloaded components](https://bugzilla.mozilla.org/show_bug.cgi?id=512827) is being looked at more broadly in [bug 511761](https://bugzilla.mozilla.org/show_bug.cgi?id=511761) by Ben Hsieh with help from Taras and others. There are a bunch of dirty ways to trigger component re-registration and fastload cache invalidation, so I filed [bug 517515](https://bugzilla.mozilla.org/show_bug.cgi?id=517515) to consolidate these in an explicit manner.
*   Cold Startup Testing: Drew and Alice made a bunch of progress on [bug 510587](https://bugzilla.mozilla.org/show_bug.cgi?id=510587),  to create a new Ts that measures cold startup. Alice is working on mobile Talos though, so this is sidelined for a bit. The only issue left is reliable Windows measurement, but we're not going to block on it, can live with Mac and Linux to start off.
*   Preference Files: Taras Glek has been working on combining the different preference files into a single one at build time, in [bug 507288](https://bugzilla.mozilla.org/show_bug.cgi?id=507288). The patch is there, and is just trying to find a way to land cleanly.
*   Service Caching: Vlad, Drew and Taras are working on caching some services globally for C++ code. For example, 50% of the GetService calls for the IO service originate from NS_NewURI usage. This work is in [bug 516085](https://bugzilla.mozilla.org/show_bug.cgi?id=516085).
Projects in a holding pattern:

*   Startup Timeline: No updates, still not landed. Add [ft] in the whiteboard of your bug w/ the function names you want timed and David will generate it and update the bug.
*   PGO for Places, mozStorage and SQLite: Still blocking on Rel-Eng fixing [bug 486783](https://bugzilla.mozilla.org/show_bug.cgi?id=486783), which now has patches!
*   Static Analysis: No progress on [bug 506128](https://bugzilla.mozilla.org/show_bug.cgi?id=506128).  David needs to file a bug with the final log of named-yet-uncalled  functions.
*   Dirty Profile Testing: No progress. Need to list scenarios, file bugs  for each, generate Talos config patches and profile data, and then move  it into Rel-Eng territory. Also, need to get a separate Tinderbox tree,  since it's going to cause a bazillion new columns.
*   [Joel Reymont](http://wagerlabs.com/) noted in[ bug 513076](https://bugzilla.mozilla.org/show_bug.cgi?id=513076) that there are serious drawbacks to getting our libraries in the dyld  shared cache on Mac, so has deprioritized that work.
*   [Ryan  Flint blogged about](http://screwedbydesign.com/blog/2009/09/this-week-in-perf-sep04.php) various front-end improvements he's working on  that affect startup time.
*   CSS Parsing Time: Zack says his work in [bug 513149](https://bugzilla.mozilla.org/show_bug.cgi?id=513149) might improve CSS parsing time by 50%, and it's next on his list.