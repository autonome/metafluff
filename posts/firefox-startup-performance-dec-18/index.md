---
layout: post
title: "Firefox Startup Performance - Dec 18"
published_at: 2009-12-19
date: 2009-12-19
tags: firefox firefox mozilla mozilla Performance startup
---

Not much change from my late post on Monday, but a few updates below. I'll be out of the office as of this Monday, and back on 1/11/2010. If you're starving for startup info during that time, hit up [Taras](http://blog.mozilla.com/tglek/), [Joel](http://wagerlabs.com/) and [Planet Firefox](http://planet.firefox.com/) for the goods. The current numbers for startup and all other tests are available on the [Performance  Snapshot Page](http://graphs.mozilla.org/dashboard/snapshot/).

Top Startup Bugs
<!-- table#ts { border: 1px solid silver; } -->
<table id="ts" border="1" cellspacing="0" cellpadding="2">
<tbody>
<tr>
<td class="s0">Estimated win</td>
<td class="s1">Bug #</td>
<td class="s1">Summary</td>
<td class="s1">Owner</td>
<td class="s1">Status</td>
<td class="s1">Notes</td>
</tr>
<tr>
<td class="s2">>10%</td>
<td class="s3">[512584](https://bugzilla.mozilla.org/show_bug.cgi?id=512584)</td>
<td class="s4">Super fast paths for Components.classes and Components.interfaces</td>
<td class="s4">Taras Glek</td>
<td class="s4">in progress</td>
<td>Taras says mostly there.</td>
</tr>
<tr>
<td class="s2">>10%</td>
<td class="s3">[525013](https://bugzilla.mozilla.org/show_bug.cgi?id=525013)</td>
<td class="s4">Investigate a more static build configuration of Firefox</td>
<td class="s4">Joel Reymont</td>
<td class="s4">Mac and Linux in progress</td>
<td class="s4">Joel's working on getting load of XPCOM components working now. Next step is completing runs of the performance tests on the tryserver.</td>
</tr>
<tr>
<td class="s2">up to 25%</td>
<td class="s3">[514083](https://bugzilla.mozilla.org/show_bug.cgi?id=514083)</td>
<td class="s4">Per-file HFS+ compression on Mac OSX 10.6</td>
<td class="s4">Joel Reymont</td>
<td class="s4">in progress</td>
<td class="s4">Snow Leopard only. More testing needed to see if it's feasible to compress at install-time, or if we'll have to ship SL builds.</td>
</tr>
<tr>
<td class="s2">TBD</td>
<td class="s3">[520309](https://bugzilla.mozilla.org/show_bug.cgi?id=520309)</td>
<td class="s4">Startup cache: replacement for fastload cache</td>
<td class="s4">Ben Hsieh</td>
<td class="s4">in progress</td>
<td class="s4">Brendan suggested some significant changes, in-progress.</td>
</tr>
<tr>
<td class="s2">TBD</td>
<td class="s3">[503483](https://bugzilla.mozilla.org/show_bug.cgi?id=503483)</td>
<td class="s4">Turn on --enable-faststart for Firefox by default</td>
<td class="s4">Dietrich</td>
<td class="s4">needs testing</td>
<td class="s4">No update this week. Loads Firefox core libraries at boot time. Need to test on all OSes, publish the numbers, and get discussion going.</td>
</tr>
<tr>
<td class="s2">TBD</td>
<td class="s3">[513149](https://bugzilla.mozilla.org/show_bug.cgi?id=513149)</td>
<td class="s4">Speed up CSS parsing by using a machine generated lexer</td>
<td class="s4">Zack Weinberg</td>
<td class="s4">Zack's blocked on other work</td>
<td class="s4">Taras says about 6% of startup spent parsing CSS.</td>
</tr>
</tbody>
</table>
Other activity this week:

*   More investigation into Hunspell changes in [bug 468799](https://bugzilla.mozilla.org/show_bug.cgi?id=468779), possibly incorporating some changes Chrome made.
Projects in a holding pattern:

*   Ryan Flint has a WIP patch to minify JS on [bug  524858](https://bugzilla.mozilla.org/show_bug.cgi?id=524858) that significantly reduces the size of shipped JavaScript  files.
*   JARification: David abandoned [moving JS          modules into a JAR file](https://bugzilla.mozilla.org/show_bug.cgi?id=509755), since those files are fastloaded.         However, since we want things like post-extension-install  restarts  to   be     fast, and those cause fastload cache invalidation,  we might   want  to   do   things like this anyways. I filed a bug for  the same   treatment  for     components. These are lower priority,  since they're   not the  normal     startup case. Follow along with all  JAR-ification   via[ the         tracker  bug](https://bugzilla.mozilla.org/show_bug.cgi?id=513027).
*   Startup Timeline: No updates, still not landed. Add [ft] in the        whiteboard of your bug w/ the function names you want timed and David        will generate it and update the bug.
*   Static Analysis: No progress on [bug        506128](https://bugzilla.mozilla.org/show_bug.cgi?id=506128).  David needs to file a bug with the final log of        named-yet-uncalled  functions.
*   Dirty Profile Testing: No progress. We have [a list of test scenarios](https://wiki.mozilla.org/Firefox/Sprints/Startup_Time_Improvements#Test_Coverage), still need to file        bugs  for each, generate Talos config patches and profile data, and    then     move  it into Rel-Eng territory. Also, need to get a separate       Tinderbox  tree,  since it's going to cause a bazillion new  columns.
*   [Joel        Reymont](http://wagerlabs.com/) noted in[ bug        513076](https://bugzilla.mozilla.org/show_bug.cgi?id=513076) that there are serious drawbacks to getting our libraries  in       the dyld  shared cache on Mac, so has deprioritized that work.
As usual, more details and links are  available on [the       project wiki](https://wiki.mozilla.org/Firefox/Projects/Startup_Time_Improvements), and we're available to answer questions in [#startup on irc.mozilla.org](irc://irc.mozilla.org/#startup).