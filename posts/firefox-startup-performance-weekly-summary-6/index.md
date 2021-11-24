---
layout: post
title: "Firefox Startup Performance Weekly Summary"
published_at: 2009-10-17
date: 2009-10-17
tags: ["firefox","firefox","mozilla","mozilla","Performance"]
---

The numbers aren't updated yet, as they were oddly counter-intuitive. Firefox 3.5 showed a massive week-over-week improvement in cold startup on Windows, which from what I can tell is not expected. On Leopard, cold startup shows a couple of percentage point improvement over last week, which is expected. Warm startup for Mac shows a 20% improvement over 3.5, but a 10% *regression* from last week, contradicting the numbers from Ts. Again, counter-intuitive numbers given that we landed a bunch of changes focused squarely on startup performance during that period.

Fortuitously, Alice and the release engineering team [deployed automated cold startup testing for Mac and Linux](https://bugzilla.mozilla.org/show_bug.cgi?id=510587). This gives us per-checkin visibility of cold startup times, and removes the need for error-prone local measurements for those platforms. On [Windows we haven't yet figured out how to emulate cold startup reliably](https://bugzilla.mozilla.org/show_bug.cgi?id=522807), so that's the next step.

As usual, more details and links are  available on [the  project wiki](https://wiki.mozilla.org/Firefox/Projects/Startup_Time_Improvements), and we're available to answer questions in [#startup on irc.mozilla.org](irc://irc.mozilla.org/#startup).

Recent activity:

*   B[ug   511761](https://bugzilla.mozilla.org/show_bug.cgi?id=511761) landed, Ben Hsieh's work to optimize fastload cache invalidation, with a  3% win on warm startup of WinXP.
*   Alfred Kayser put a patch up on [bug 511754](https://bugzilla.mozilla.org/show_bug.cgi?id=511754), which improves JAR file reading efficiency.
*   Rob Strong closed [bug 521956](https://bugzilla.mozilla.org/show_bug.cgi?id=521956) and started some cleanup of nsUpdateService, further reducing the size of it for [bug 311965](https://bugzilla.mozilla.org/show_bug.cgi?id=311965).
*   Drew has a patch up for [bug 506814](https://bugzilla.mozilla.org/show_bug.cgi?id=506814), getting rid of Change  GetPersistentDescriptor/SetPersistentDescriptor on Mac.
*   [Bug      504858](https://bugzilla.mozilla.org/show_bug.cgi?id=504858) pushes back the population of the bookmarks toolbar until   after   the  browser window comes up. Dao put up a new patch. Measuring  the wall-clock effect of this on startup, and determining what exactly  is "gaming" the Ts test is part of the work here.
*   Service caching work in [bug     516085](https://bugzilla.mozilla.org/show_bug.cgi?id=516085) still needs to be pushed  to  the  Places branch for testing.
Projects in a holding pattern:

*   Moving font-loading out of the startup path on Mac: Jonathan Kew  filed [bug    519445](https://bugzilla.mozilla.org/show_bug.cgi?id=519445) with a WIP patch for yet further reductions in Mac startup    time spent in font system initialization.
*   JARification: David abandoned [moving JS       modules into a JAR file](https://bugzilla.mozilla.org/show_bug.cgi?id=509755), since those files are fastloaded.      However, since we want things like post-extension-install restarts to  be     fast, and those cause fastload cache invalidation, we might want  to   do   things like this anyways. I filed a bug for the same treatment  for     components. These are lower priority, since they're not the  normal     startup case. Follow along with all JAR-ification via[ the      tracker  bug](https://bugzilla.mozilla.org/show_bug.cgi?id=513027).
*   Startup Timeline: No updates, still not landed. Add [ft] in the     whiteboard of your bug w/ the function names you want timed and David     will generate it and update the bug.
*   Static Analysis: No progress on [bug     506128](https://bugzilla.mozilla.org/show_bug.cgi?id=506128).  David needs to file a bug with the final log of     named-yet-uncalled  functions.
*   Dirty Profile Testing: No progress. Need to list scenarios, file     bugs  for each, generate Talos config patches and profile data, and then     move  it into Rel-Eng territory. Also, need to get a separate    Tinderbox  tree,  since it's going to cause a bazillion new columns.
*   [Joel     Reymont](http://wagerlabs.com/) noted in[ bug     513076](https://bugzilla.mozilla.org/show_bug.cgi?id=513076) that there are serious drawbacks to getting our libraries in     the dyld  shared cache on Mac, so has deprioritized that work.
*   No updates on Zack's CSS parser changes in [bug       513149](https://bugzilla.mozilla.org/show_bug.cgi?id=513149).