---
title: "Firefox Startup Performance Weekly Summary"
published_at: 2009-10-12
date: 2009-10-12
tags: ["firefox", "mozilla", "performance", "posts"]
---
Work on blockers for 3.6 stole some time last week, but some startup work advanced nonetheless, including a bunch of landings. I've posted the numbers from early last week below. The percentages are the difference from 3.5. Given the spate of landings later in the week after we measured,  I'll have to update the numbers again to get the full effect of everything listed below. As usual, more details and links are available on [the project wiki](https://wiki.mozilla.org/Firefox/Projects/Startup_Time_Improvements), and we're available to answer questions in [\#startup on irc.mozilla.org](irc://irc.mozilla.org/\#startup).

Cold Startup (median results from Juan and myself)
<table style="height:60px;" border="1" width="346">
<tbody>
<tr>
<td>Platform</td>
<td>3.5</td>
<td>3.6</td>
<td>Trunk</td>
</tr>
<tr>
<td>Mac Leopard (10/6)</td>
<td>12161</td>
<td>10440 (-14\%)</td>
<td>10175 (-16\%)</td>
</tr>
<tr>
<td>Win XP (10/4)</td>
<td>5610</td>
<td>5640 (0\%)</td>
<td>4050  (-27.8\%)</td>
</tr>
</tbody></table>
Warm Startup (median of results from Talos, updated 10/6)
<table border="1">
<tbody>
<tr>
<td>Platform</td>
<td>3.5</td>
<td>3.6</td>
<td>Trunk</td>
</tr>
<tr>
<td>Mac Leopard</td>
<td>1500ms</td>
<td>1190ms (-20\%)</td>
<td>1040ms (-30\%)</td>
</tr>
<tr>
<td>Win XP</td>
<td>458ms</td>
<td>470ms (+2\%)</td>
<td>468ms (+2\%)</td>
</tr>
<tr>
<td>Win Vista</td>
<td>545ms</td>
<td>544ms (0\%)</td>
<td>545ms (0\%)</td>
</tr>
<tr>
<td>Linux</td>
<td>624ms</td>
<td>634ms (0\%)</td>
<td>634ms (0\%)</td>
</tr>
</tbody></table>
Recent landings:

*   Ryan landed [bug 475289](https://bugzilla.mozilla.org/show_bug.cgi?id=475289 "https://bugzilla.mozilla.org/show_bug.cgi?id=475289") to lazily initialize the  engineMetadataService, [bug 520342](https://bugzilla.mozilla.org/show_bug.cgi?id=520342) to consolidate service initialization in the microsummary service, and pushed [bug 499123](https://bugzilla.mozilla.org/show_bug.cgi?id=499123), <span class="summary_alias_container" style="display:inline;"><span class="short_desc_nonedit_display">coalescing browser about:  pages, to the 3.6 branch.</span></span>
*   <span class="summary_alias_container" style="display:inline;"><span class="short_desc_nonedit_display">Taras landed a bunch</span></span> of [optimizations to the fastload system](https://bugzilla.mozilla.org/show_bug.cgi?id=412796) as well as his [work on   combining the     different preference files](https://bugzilla.mozilla.org/show_bug.cgi?id=507288).
*   I turned on [PGO for   Places, mozStorage and SQLite](https://bugzilla.mozilla.org/show_bug.cgi?id=419893).
*   Alfred  Kayser's patch on [bug     510844](https://bugzilla.mozilla.org/show_bug.cgi?id=510844) landed, which should increase throughput of JAR file reading.
*   Ben Hsieh got review on [bug  510991](https://bugzilla.mozilla.org/show_bug.cgi?id=510991),  which removes some stats() from the startup path.
Recent activity:

*   <span class="summary_alias_container" style="display:inline;"><span class="short_desc_nonedit_display">Ryan put up a patch for [bug ](https://bugzilla.mozilla.org/show_bug.cgi?id=520284)</span></span>[520284](https://bugzilla.mozilla.org/show_bug.cgi?id=520284), which utilizes an important change that happened recently in [bug 471219](https://bugzilla.mozilla.org/show_bug.cgi?id=471219) which allows components to register for periodic timer notifications *without* instantiating the service or component. An example is in Ryan's patch, and the docs are in [the source](http://hg.mozilla.org/mozilla-central/file/52fb6780a698/toolkit/mozapps/update/public/nsIUpdateTimerManager.idl\#l64).
*   B[ug     504858](https://bugzilla.mozilla.org/show_bug.cgi?id=504858) pushes back the population of the bookmarks toolbar until  after   the  browser window comes up. Dao put up a new patch. Measuring the wall-clock effect of this on startup, and determining what exactly is "gaming" the Ts test is part of the work here.
*   Ben Hsieh is in review cycles for [bug 511761](https://bugzilla.mozilla.org/show_bug.cgi?id=511761) which optimizes the fastload cache invalidation, and consolidates some of the invalidation triggers.
*   Service caching work in [bug    516085](https://bugzilla.mozilla.org/show_bug.cgi?id=516085), still made no progress. This week I'll try pushing this  to the  Places branch.
*   No updates on Zack's CSS parser changes in [bug     513149](https://bugzilla.mozilla.org/show_bug.cgi?id=513149).
*   Cold Startup Testing: Alice put more patches on [bug      510587](https://bugzilla.mozilla.org/show_bug.cgi?id=510587), getting us ever closer to automated testing of cold startup.
Projects in a holding pattern:

*   Moving font-loading out of the startup path on Mac: Jonathan Kew filed [bug   519445](https://bugzilla.mozilla.org/show_bug.cgi?id=519445) with a WIP patch for yet further reductions in Mac startup   time spent in font system initialization.
*   JARification: David abandoned [moving JS      modules into a JAR file](https://bugzilla.mozilla.org/show_bug.cgi?id=509755), since those files are fastloaded.     However, since we want things like post-extension-install restarts to be     fast, and those cause fastload cache invalidation, we might want to   do   things like this anyways. I filed a bug for the same treatment for     components. These are lower priority, since they're not the normal     startup case. Follow along with all JAR-ification via[ the     tracker  bug](https://bugzilla.mozilla.org/show_bug.cgi?id=513027).
*   Startup Timeline: No updates, still not landed. Add [ft] in the    whiteboard of your bug w/ the function names you want timed and David    will generate it and update the bug.
*   Static Analysis: No progress on [bug    506128](https://bugzilla.mozilla.org/show_bug.cgi?id=506128).  David needs to file a bug with the final log of    named-yet-uncalled  functions.
*   Dirty Profile Testing: No progress. Need to list scenarios, file    bugs  for each, generate Talos config patches and profile data, and then    move  it into Rel-Eng territory. Also, need to get a separate   Tinderbox  tree,  since it's going to cause a bazillion new columns.
*   [Joel    Reymont](http://wagerlabs.com/) noted in[ bug    513076](https://bugzilla.mozilla.org/show_bug.cgi?id=513076) that there are serious drawbacks to getting our libraries in    the dyld  shared cache on Mac, so has deprioritized that work.