---
layout: post
title: Firefox Startup Performance - Dec 14
published_at: 2009-12-15
date: 2009-12-15
tags: firefox firefox mozilla mozilla Performance startup
---

I'm going to be changing the format of these posts a bit, to put focus on the most important issues currently blocking a super-fast startup of Firefox. Hopefully it'll bring attention on the longest-running, hardest-to-fix, but highest-impact bugs. Right now I'm defining high-impact as changes that bring a 10% or greater improvement. Some of these bugs we don't yet have solid data on how much of an impact, but expect it to be filled in soon as we narrow the focus onto these. As always, the current numbers for startup and all other tests are available on the [Performance  Snapshot Page](http://graphs.mozilla.org/dashboard/snapshot/).

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
<td>Got consultation from mrbkap, needs new patch.</td>
</tr>
<tr>
<td class="s2">>10%</td>
<td class="s3">[525013](https://bugzilla.mozilla.org/show_bug.cgi?id=525013)</td>
<td class="s4">Investigate a more static build configuration of Firefox</td>
<td class="s4">Joel Reymont</td>
<td class="s4">Mac and Linux in progress</td>
<td class="s4">Only measured on Mac so far, need Linux numbers and someone to figure out the Windows story.</td>
</tr>
<tr>
<td class="s2">up to 25%</td>
<td class="s3">[514083](https://bugzilla.mozilla.org/show_bug.cgi?id=514083)</td>
<td class="s4">Per-file HFS+ compression on Mac OSX 10.6</td>
<td class="s4">Joel Reymont</td>
<td class="s4">in progress</td>
<td class="s4">Snow Leopard only.</td>
</tr>
<tr>
<td class="s2">TBD</td>
<td class="s3">[520309](https://bugzilla.mozilla.org/show_bug.cgi?id=520309)</td>
<td class="s4">Startup cache: replacement for fastload cache</td>
<td class="s4">Ben Hsieh</td>
<td class="s4">review</td>
<td class="s4">More efficient than current fastload, and key to enabling fastloading of XBL, CSS, manifests and various other data. Need to push to Places branch to figure out base perf difference from current fastload.</td>
</tr>
<tr>
<td class="s2">TBD</td>
<td class="s3">[503483](https://bugzilla.mozilla.org/show_bug.cgi?id=503483)</td>
<td class="s4">Turn on --enable-faststart for Firefox by default</td>
<td class="s4">Dietrich</td>
<td class="s4">needs testing</td>
<td class="s4">Loads Firefox core libraries at boot time. Need to test on all OSes, publish the numbers, and get discussion going.</td>
</tr>
<tr>
<td class="s2">TBD</td>
<td class="s3">[513149](https://bugzilla.mozilla.org/show_bug.cgi?id=513149)</td>
<td class="s4">Speed up CSS parsing by using a machine generated lexer</td>
<td class="s4">Zack Weinberg</td>
<td class="s4">Zack's blocked on other work</td>
<td class="s4">Taras says it's high, but no figures, so need better data here.</td>
</tr>
</tbody>
</table>
Other activity this week:

*   Jonathan Kew landed [bug 519445](https://bugzilla.mozilla.org/show_bug.cgi?id=519445) on trunk, which improves font loading on Mac. The patch didn't dent the Ts graph, as the test loads a basically empty page. This patch has the largest effect when pages load various fonts, and have a large font collection. For instance, [here](https://bugzilla.mozilla.org/show_bug.cgi?id=519445#c15) John Dagget comments that on a system with 2000+ fonts, the loading time of the font system went from 6 seconds down to 0.33 seconds.
*   Rob Strong [blogged  about time spent executing JS in the front-end](http://blog.mozilla.com/rstrong/2009/12/13/status-update-%E2%80%93-week-of-1211/), and put up a table  of the worst offenders.
*   The measurements Rob made above are from an instrumentation effort that's happening in [bug 507012](https://bugzilla.mozilla.org/show_bug.cgi?id=507012), that will give us great visibility into where time is spent in JS. You can do similar profiling using DTrace, but that's Mac only, and requires separate tools and scripts to be installed. This instrumentation will eventually be available across platforms in release builds of Firefox. It'll default to off, but be togglable via an environmental variable or some other method. Providing tools like this makes it *easy* for anyone working on Firefox to diagnose performance problems.
Projects in a holding pattern:

*   Ryan Flint has a WIP patch to minify JS on [bug  524858](https://bugzilla.mozilla.org/show_bug.cgi?id=524858) that significantly reduces the size of shipped JavaScript  files.
*   JARification: David abandoned [moving JS          modules into a JAR file](https://bugzilla.mozilla.org/show_bug.cgi?id=509755), since those files are fastloaded.         However, since we want things like post-extension-install  restarts  to   be     fast, and those cause fastload cache invalidation,  we might   want  to   do   things like this anyways. I filed a bug for  the same   treatment  for     components. These are lower priority,  since they're   not the  normal     startup case. Follow along with all  JAR-ification   via[ the         tracker  bug](https://bugzilla.mozilla.org/show_bug.cgi?id=513027).
*   Startup Timeline: No updates, still not landed. Add [ft] in the        whiteboard of your bug w/ the function names you want timed and David        will generate it and update the bug.
*   Static Analysis: No progress on [bug        506128](https://bugzilla.mozilla.org/show_bug.cgi?id=506128).  David needs to file a bug with the final log of        named-yet-uncalled  functions.
*   Dirty Profile Testing: No progress. We have [a list of test scenarios](https://wiki.mozilla.org/Firefox/Sprints/Startup_Time_Improvements#Test_Coverage), still need to file        bugs  for each, generate Talos config patches and profile data, and    then     move  it into Rel-Eng territory. Also, need to get a separate       Tinderbox  tree,  since it's going to cause a bazillion new  columns.
*   [Joel        Reymont](http://wagerlabs.com/) noted in[ bug        513076](https://bugzilla.mozilla.org/show_bug.cgi?id=513076) that there are serious drawbacks to getting our libraries  in       the dyld  shared cache on Mac, so has deprioritized that work.
As usual, more details and links are  available on [the       project wiki](https://wiki.mozilla.org/Firefox/Projects/Startup_Time_Improvements), and we're available to answer questions in [#startup on irc.mozilla.org](irc://irc.mozilla.org/#startup).