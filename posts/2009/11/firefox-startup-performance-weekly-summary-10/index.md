---
layout: post
title: Firefox Startup Performance Weekly Summary
published_at: 2009-11-14
date: 2009-11-14
tags: firefox firefox mozilla mozilla Performance startup
---

Current numbers are available on the [Performance Snapshot](http://graphs.mozilla.org/dashboard/snapshot/) page. Thanks to [Chris Atlee](http://atlee.ca/blog/) for deploying it to the graph server. The snapshot is updated every 5 minutes with fresh data from Talos.

Summary, relative to Firefox 3.5:

*   Warm startup: For Mac, 26% better on 3.6 and 31% better on 3.7. For Windows, 4% and 7%. Flat on Linux.
*   Cold startup:  For Mac, 22% better on 3.6, 23% better on 3.7. For Windows, not measuring yet. For Linux, 3% and 9%.
This week's activity:

*   Using the data from [bug 524202](https://bugzilla.mozilla.org/show_bug.cgi?id=524202), Joel is tracking down exactly how and when dynamic library code is loaded. They're past diagnostics, and are now into implementation, coaxing the linker into ordering functions in the optimal sequence. See [this  comment](https://bugzilla.mozilla.org/show_bug.cgi?id=524202#c3) for a good summary of the issue. Joel put up [a very detailed blog post](http://wagerlabs.com/post/230853261/tracking-io-patterns-in-memory-mapped-dynamic-libaries) about the work they've been doing.
*   Ryan Flint updated the[ spellcheck bug](https://bugzilla.mozilla.org/show_bug.cgi?id=496217) with some new findings.
*   I got a working (so far) patch for Windows cold-startup testing for Talos on [bug 522807](https://bugzilla.mozilla.org/show_bug.cgi?id=522807).
*   Taras is in the patch review cycle for service caching in [bug         516085](https://bugzilla.mozilla.org/show_bug.cgi?id=516085).
*   Re-enabling rebasing on  Windows in [bug    484799](https://bugzilla.mozilla.org/show_bug.cgi?id=484799) has review now, just needs landing.
*   John Dagget and Jonathan Kew have a bunch of new findings in [bug       519445](https://bugzilla.mozilla.org/show_bug.cgi?id=519445) for further reductions in Mac startup       time spent in font system initialization. Sometimes the patch helps, sometimes it doesn't.
*   B[ug    512645](https://bugzilla.mozilla.org/show_bug.cgi?id=512645), removing the setTimeout 10ms wait in chrome JS has landed.
*   Drew's work on [bug     506814](https://bugzilla.mozilla.org/show_bug.cgi?id=506814), getting rid of Change      GetPersistentDescriptor/SetPersistentDescriptor on Mac, has landed.
Projects in a holding pattern:

*   Ben Hsieh has been prototyping a whole Fastload cache  replacement in  [bug   520309](https://bugzilla.mozilla.org/show_bug.cgi?id=520309).
*   JARification: David abandoned [moving JS         modules into a JAR file](https://bugzilla.mozilla.org/show_bug.cgi?id=509755), since those files are fastloaded.        However, since we want things like post-extension-install restarts  to   be     fast, and those cause fastload cache invalidation, we might   want  to   do   things like this anyways. I filed a bug for the same   treatment  for     components. These are lower priority, since they're   not the  normal     startup case. Follow along with all JAR-ification   via[ the        tracker  bug](https://bugzilla.mozilla.org/show_bug.cgi?id=513027).
*   Startup Timeline: No updates, still not landed. Add [ft] in the       whiteboard of your bug w/ the function names you want timed and David       will generate it and update the bug.
*   Static Analysis: No progress on [bug       506128](https://bugzilla.mozilla.org/show_bug.cgi?id=506128).  David needs to file a bug with the final log of       named-yet-uncalled  functions.
*   Dirty Profile Testing: No progress. Need to list scenarios, file       bugs  for each, generate Talos config patches and profile data, and   then     move  it into Rel-Eng territory. Also, need to get a separate      Tinderbox  tree,  since it's going to cause a bazillion new columns.
*   [Joel       Reymont](http://wagerlabs.com/) noted in[ bug       513076](https://bugzilla.mozilla.org/show_bug.cgi?id=513076) that there are serious drawbacks to getting our libraries in       the dyld  shared cache on Mac, so has deprioritized that work.
*   No updates on Zack's CSS parser changes in [bug         513149](https://bugzilla.mozilla.org/show_bug.cgi?id=513149).
As usual, more details and links are  available on [the      project wiki](https://wiki.mozilla.org/Firefox/Projects/Startup_Time_Improvements), and we're available to answer questions in [#startup on irc.mozilla.org](irc://irc.mozilla.org/#startup).