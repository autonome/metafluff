---
layout: post
title: Firefox Startup Performance Weekly Summary
published_at: 2009-09-26
date: 2009-09-26
tags: firefox firefox mozilla mozilla Performance
---

Recent activity:

*   An improvement in startup time on Mac Leopard of around ~16% (aka: Very Large) was found by Joel Reymont and fixed by Masayuki Nakano in [bug 517549](https://bugzilla.mozilla.org/show_bug.cgi?id=517549). Mac users rejoice!
*   The Windows cold startup regression from 3.5 to 3.6 being tracked in [bug  517741](https://bugzilla.mozilla.org/show_bug.cgi?id=517741). Help finding the window for this would be awesome.
*   JAR Performance: Alfred Kayser has a new patch on [bug  510844](https://bugzilla.mozilla.org/show_bug.cgi?id=510844) which should increase throughput of JAR file reading, about ready to land.
*   Ben Hsieh is making progress removing the [needless  stats of already-fastloaded components](https://bugzilla.mozilla.org/show_bug.cgi?id=512827) and other stat removals in [bug  511761](https://bugzilla.mozilla.org/show_bug.cgi?id=511761).
*   Service caching work is still in progress in [bug  516085](https://bugzilla.mozilla.org/show_bug.cgi?id=516085). Drew's tests showed no significant win on Tp, but the patch did reduce IO service retrievals by 58%. It might be worth pushing this to the Places branch to get a better idea of the total performance impact of the change.
*   Ryan Flint landed [bug 499123](https://bugzilla.mozilla.org/show_bug.cgi?id=499123), combining a bunch of about: pages into a single component, on 1.9.2 branch for Firefox 3.6.
*   Bookmarks toolbar: I put a patch on [bug 504858](https://bugzilla.mozilla.org/show_bug.cgi?id=504858) that pushes back the population of the toolbar until after the browser window comes up. Checking into the Places branch showed a 1.5% improvement to warm startup on Windows. Just waiting on review.
*   CSS Parsing Time: Zack is working on major CSS parser changes in [bug   513149](https://bugzilla.mozilla.org/show_bug.cgi?id=513149).
Projects in a holding pattern:

*   Preference Files: Taras Glek has been working on combining the   different preference files into a single one at build time, in [bug   507288](https://bugzilla.mozilla.org/show_bug.cgi?id=507288). The patch is there, and is just trying to find a way to land   cleanly.
*   Cold Startup Testing: Drew and Alice made a bunch of progress on [bug   510587](https://bugzilla.mozilla.org/show_bug.cgi?id=510587),  to create a new Ts that measures cold startup. Alice is   working on mobile Talos though, so this is sidelined for a bit. The only   issue left is reliable Windows measurement, but we're not going to   block on it, can live with Mac and Linux to start off.
*   JARification: David abandoned [moving JS    modules into a JAR file](https://bugzilla.mozilla.org/show_bug.cgi?id=509755), since those files are fastloaded.   However, since we want things like post-extension-install restarts to be   fast, and those cause fastload cache invalidation, we might want to do   things like this anyways. I filed a bug for the same treatment for   components. These are lower priority, since they're not the normal   startup case. Follow along with all JAR-ification via[ the   tracker  bug](https://bugzilla.mozilla.org/show_bug.cgi?id=513027).
*   Startup Timeline: No updates, still not landed. Add [ft] in the  whiteboard of your bug w/ the function names you want timed and David  will generate it and update the bug.
*   PGO for Places, mozStorage and SQLite: Still blocking on Rel-Eng  fixing [bug  486783](https://bugzilla.mozilla.org/show_bug.cgi?id=486783), which now has patches!
*   Static Analysis: No progress on [bug  506128](https://bugzilla.mozilla.org/show_bug.cgi?id=506128).  David needs to file a bug with the final log of  named-yet-uncalled  functions.
*   Dirty Profile Testing: No progress. Need to list scenarios, file  bugs  for each, generate Talos config patches and profile data, and then  move  it into Rel-Eng territory. Also, need to get a separate Tinderbox  tree,  since it's going to cause a bazillion new columns.
*   [Joel  Reymont](http://wagerlabs.com/) noted in[ bug  513076](https://bugzilla.mozilla.org/show_bug.cgi?id=513076) that there are serious drawbacks to getting our libraries in  the dyld  shared cache on Mac, so has deprioritized that work.