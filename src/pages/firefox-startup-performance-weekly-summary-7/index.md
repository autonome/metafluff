---
layout: post
title: "Firefox Startup Performance Weekly Summary"
published_at: 2009-10-24
date: 2009-10-24
tags: firefox mozilla
---

First, the numbers. This is the first round where all the posted numbers are from Talos. We're getting closer to having Windows numbers for cold startup (details further down). The cold numbers didn't have much in the way of results yet, only 3-5 boxes for today's numbers, and given the variability we should probably put more boxes on those. The notable datapoint is that cold startup on Mac for 3.6 is better than for trunk, which is odd since it's been the opposite in all of our manual testing, and most of the big wins haven't made it to the branch yet. It could be because of the dearth of results so far. Next week I'll include the dirty profile test results in these tables as well.

Cold Startup
<table border="1">
<tbody>
<tr>
<td>Platform</td>
<td>3.5</td>
<td>3.6</td>
<td>Trunk</td>
</tr>
<tr>
<td>Mac Leopard (10/23)</td>
<td>15605ms</td>
<td>13120ms (-16%)</td>
<td>13859ms (-11%)</td>
</tr>
<tr>
<td>Win XP</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Win Vista</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr>
<td>Linux (10/23)</td>
<td>7056ms</td>
<td>7159ms (1%)</td>
<td>7204ms (2%)</td>
</tr>
</tbody></table>
Warm Startup
<table border="1">
<tbody>
<tr>
<td>Platform</td>
<td>3.5</td>
<td>3.6</td>
<td>Trunk</td>
</tr>
<tr>
<td>Mac Leopard (10/23)</td>
<td>1451ms</td>
<td>1108ms (-23%)</td>
<td>1017ms (-30%)</td>
</tr>
<tr>
<td>Win XP (10/23)</td>
<td>459ms</td>
<td>462ms (0%)</td>
<td>449ms  (-2%)</td>
</tr>
<tr>
<td>Win Vista (10/23)</td>
<td>535ms</td>
<td>544ms (1%)</td>
<td>506ms (-5%)</td>
</tr>
<tr>
<td>Linux (10/23)</td>
<td>625ms</td>
<td>632ms (1%)</td>
<td>629ms  (0%)</td>
</tr>
</tbody></table>
As usual, more details and links are  available on [the    project wiki](https://wiki.mozilla.org/Firefox/Projects/Startup_Time_Improvements), and we're available to answer questions in [#startup on irc.mozilla.org](irc://irc.mozilla.org/#startup).

*   Taras is zooming in on library IO, and [posted some details and optimization approaches](http://blog.mozilla.com/tglek/2009/10/20/large-apps-just-have-to-start-slow/), and[ today posted a log](http://blog.mozilla.com/tglek/2009/10/23/studying-library-io-systemtap-style/) of what's loaded and how long it takes.
*   Windows Cold Ts: As you can see above in the table, the new cold startup graphs are here for [Mac ](http://tinyurl.com/2vr3pz)and [Linux](http://tinyurl.com/2vr3pz). I've made progress on emulating cold startup on Windows using a utility from the Windows Server 2003 Resource Kit called Consume.exe. I found a reference to it in some random blog comment, and then[ found it on MDC](https://developer.mozilla.org/en/QA/Stress_Testing) as the #2 link on Google. The help file that the resource kit installer links from the start menu  is... not actualy there, but I did find some [tidbits of  documentation](http://www.windows-management.com/msk-rk/win2003/0127/). It will consume one of physical memory, cpu time, [kernel pool memory](http://blogs.technet.com/askperf/archive/2007/03/07/memory-management-understanding-pool-resources.aspx), disk space (!) and the page file, for the number of seconds specified by the user. Running consume.exe for 15 seconds was enough to completely exhaust my physical ram, and subsequent starts of Firefox trunk are about 22 seconds. Next steps: I'll continue to test to see what combination of these options gives us the best visibility into changes to cold startup time, and then work with Rel/Eng to get it deployed.
*   Alfred Kayser landed [bug  511754](https://bugzilla.mozilla.org/show_bug.cgi?id=511754), which improves JAR file reading efficiency.
*   Rob Strong has been making a bunch of changes in the update system to improve startup time, and [posted a list of the changes](http://blog.mozilla.com/rstrong/2009/10/23/app-update-status/).
*   Drew has a patch up for [bug  506814](https://bugzilla.mozilla.org/show_bug.cgi?id=506814), getting rid of Change   GetPersistentDescriptor/SetPersistentDescriptor on Mac, just needs review from Josh.
*   Peter got review on [bug 542615](https://bugzilla.mozilla.org/show_bug.cgi?id=512645), removing the setTimeout 10ms wait in chrome JS.
*   Ben Hsieh has been prototyping a whole Fastload cache replacement in [bug 520309](https://bugzilla.mozilla.org/show_bug.cgi?id=520309).
*   Ben's work on fastload cache invalidation in [bug 511761](https://bugzilla.mozilla.org/show_bug.cgi?id=511761) closed other bugs such as [bug 517515](https://bugzilla.mozilla.org/show_bug.cgi?id=517515) and [bug 512827](https://bugzilla.mozilla.org/show_bug.cgi?id=512827).
*   Ted has been looking at re-enabling rebasing on Windows in [bug 484799](https://bugzilla.mozilla.org/show_bug.cgi?id=484799) for a potential performance boost there.
Projects in a holding pattern:

*   Service caching work in [bug       516085](https://bugzilla.mozilla.org/show_bug.cgi?id=516085) still needs to be pushed  to  the  Places branch for testing.
*   Moving font-loading out of the startup path on Mac: Jonathan Kew   filed [bug     519445](https://bugzilla.mozilla.org/show_bug.cgi?id=519445) with a WIP patch for yet further reductions in Mac startup     time spent in font system initialization.
*   JARification: David abandoned [moving JS        modules into a JAR file](https://bugzilla.mozilla.org/show_bug.cgi?id=509755), since those files are fastloaded.       However, since we want things like post-extension-install restarts to   be     fast, and those cause fastload cache invalidation, we might  want  to   do   things like this anyways. I filed a bug for the same  treatment  for     components. These are lower priority, since they're  not the  normal     startup case. Follow along with all JAR-ification  via[ the       tracker  bug](https://bugzilla.mozilla.org/show_bug.cgi?id=513027).
*   Startup Timeline: No updates, still not landed. Add [ft] in the      whiteboard of your bug w/ the function names you want timed and David      will generate it and update the bug.
*   Static Analysis: No progress on [bug      506128](https://bugzilla.mozilla.org/show_bug.cgi?id=506128).  David needs to file a bug with the final log of      named-yet-uncalled  functions.
*   Dirty Profile Testing: No progress. Need to list scenarios, file      bugs  for each, generate Talos config patches and profile data, and  then     move  it into Rel-Eng territory. Also, need to get a separate     Tinderbox  tree,  since it's going to cause a bazillion new columns.
*   [Joel      Reymont](http://wagerlabs.com/) noted in[ bug      513076](https://bugzilla.mozilla.org/show_bug.cgi?id=513076) that there are serious drawbacks to getting our libraries in      the dyld  shared cache on Mac, so has deprioritized that work.
*   No updates on Zack's CSS parser changes in [bug        513149](https://bugzilla.mozilla.org/show_bug.cgi?id=513149).