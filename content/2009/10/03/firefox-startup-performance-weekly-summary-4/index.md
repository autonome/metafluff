---
title: "Firefox Startup Performance Weekly Summary"
published_at: 2009-10-03
date: 2009-10-03
tags: ["firefox", "mozilla", "performance", "startup", "posts"]
---
This week brought a big win on Mac, and a slew of changes that are about to land.

Recent activity:

*   [Bug 517045](https://bugzilla.mozilla.org/show_bug.cgi?id=517045) is fixed and brings another win on Mac. Found by Joel Reymont and fixed by John Daggett, it improves cold startup by ~20\% and warm startup by ~4\%. It gets better: Jonathan Kew filed [bug 519445](https://bugzilla.mozilla.org/show_bug.cgi?id=519445) with a WIP patch for yet further reductions in Mac startup time spent in font system initialization.
*   Taras Glek's [work on combining the     different preference files](https://bugzilla.mozilla.org/show_bug.cgi?id=507288) into a single one is ready to land.
*   We now have unit-tested optimized builds, thanks to Release Engineering's work on [bug 486783](https://bugzilla.mozilla.org/show_bug.cgi?id=486783). This means we can now turn on [PGO for Places, mozStorage and SQLite](https://bugzilla.mozilla.org/show_bug.cgi?id=419893), which I'll land presently.
*   B[ug    504858](https://bugzilla.mozilla.org/show_bug.cgi?id=504858) pushes back the population of the bookmarks toolbar until after   the  browser window comes up. The patch has review, is ready to land.
*   Alfred Kayser's patch on [bug    510844](https://bugzilla.mozilla.org/show_bug.cgi?id=510844) which should increase throughput of JAR file reading, is   ready to land.
*   Ben Hsieh got review on [bug 510991](https://bugzilla.mozilla.org/show_bug.cgi?id=510991), which removes some stats() from the startup path.
*   I'm no longer able to reproduce the [cold startup regression from 3.5 to 3.6](https://bugzilla.mozilla.org/show_bug.cgi?id=517741). I turned of SuperFetch, which resulted in more stable numbers, but there was no visible regression, even in builds going back a couple of months. Juan is going to test on Windows XP.
*   Ben Hsieh has a patch up for review on [bug   511761](https://bugzilla.mozilla.org/show_bug.cgi?id=511761), which removes needless stat()s of component files, and improves and clarifies current cache invalidation behavior.
*   Service caching work in [bug   516085](https://bugzilla.mozilla.org/show_bug.cgi?id=516085), made no progress. Next week I'll try pushing this  to the Places branch to get a better idea of the total performance  impact of the change.
*   Zack is working on major CSS parser changes in [bug    513149](https://bugzilla.mozilla.org/show_bug.cgi?id=513149).
Projects in a holding pattern:

*   Cold Startup Testing: Drew and Alice made a bunch of progress on [bug    510587](https://bugzilla.mozilla.org/show_bug.cgi?id=510587),  to create a new Ts that measures cold startup. Alice is    working on mobile Talos though, so this is sidelined for a bit. The only    issue left is reliable Windows measurement, but we're not going to    block on it, can live with Mac and Linux to start off.
*   JARification: David abandoned [moving JS     modules into a JAR file](https://bugzilla.mozilla.org/show_bug.cgi?id=509755), since those files are fastloaded.    However, since we want things like post-extension-install restarts to be    fast, and those cause fastload cache invalidation, we might want to  do   things like this anyways. I filed a bug for the same treatment for    components. These are lower priority, since they're not the normal    startup case. Follow along with all JAR-ification via[ the    tracker  bug](https://bugzilla.mozilla.org/show_bug.cgi?id=513027).
*   Startup Timeline: No updates, still not landed. Add [ft] in the   whiteboard of your bug w/ the function names you want timed and David   will generate it and update the bug.
*   Static Analysis: No progress on [bug   506128](https://bugzilla.mozilla.org/show_bug.cgi?id=506128).  David needs to file a bug with the final log of   named-yet-uncalled  functions.
*   Dirty Profile Testing: No progress. Need to list scenarios, file   bugs  for each, generate Talos config patches and profile data, and then   move  it into Rel-Eng territory. Also, need to get a separate  Tinderbox  tree,  since it's going to cause a bazillion new columns.
*   [Joel   Reymont](http://wagerlabs.com/) noted in[ bug   513076](https://bugzilla.mozilla.org/show_bug.cgi?id=513076) that there are serious drawbacks to getting our libraries in   the dyld  shared cache on Mac, so has deprioritized that work.