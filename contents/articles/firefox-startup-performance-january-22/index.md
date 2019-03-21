---
layout: post
title: Firefox Startup Performance - January 22
published_at: 2010-01-23
date: 2010-01-23
tags: firefox firefox mozilla mozilla Performance startup
---

A good week: Firefox 3.6 was released, and I've gotten a lot of feedback from friends and colleagues that startup has improved, and that it's snappier than ever. Yesterday I blogged [a roundup of the performance improvements in Firefox 3.6](http://autonome.wordpress.com/2010/01/21/firefox-3-6-performance-startup-and-snappiness-improvements/).

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
<td>Taras is traveling, says he'll close it out when he returns.</td>
</tr>
<tr>
<td class="s2">>10%</td>
<td class="s3">[525013](https://bugzilla.mozilla.org/show_bug.cgi?id=525013)</td>
<td class="s4">Investigate a more static build configuration of Firefox</td>
<td class="s4">Joel Reymont</td>
<td class="s4">in progress</td>
<td class="s4">More great data from Zack and Joel. See PDF charts of the different build configurations tested on different hard-drive speeds for [Mac](https://bugzilla.mozilla.org/attachment.cgi?id=422607) and for [Linux](https://bugzilla.mozilla.org/attachment.cgi?id=423007).</td>
</tr>
<tr>
<td class="s2">up to 25%</td>
<td class="s3">[514083](https://bugzilla.mozilla.org/show_bug.cgi?id=514083)</td>
<td class="s4">Per-file HFS+ compression on Mac OSX 10.6</td>
<td class="s4">Joel Reymont</td>
<td class="s4">in progress</td>
<td class="s4">Conclusion is that we need to make this happen via the installer, as well as the updater, since modifying files results in decompression. Need to find an owner for this still.</td>
</tr>
<tr>
<td class="s2">TBD</td>
<td class="s3">[520309](https://bugzilla.mozilla.org/show_bug.cgi?id=520309)</td>
<td class="s4">Startup cache: replacement for fastload cache</td>
<td class="s4">Ben Hsieh</td>
<td class="s4">in progress</td>
<td class="s4">Considering moving back to the simpler caching approach.</td>
</tr>
<tr>
<td class="s2">TBD</td>
<td class="s3">[503483](https://bugzilla.mozilla.org/show_bug.cgi?id=503483)</td>
<td class="s4">Turn on --enable-faststart for Firefox by default</td>
<td class="s4">Dietrich</td>
<td class="s4">needs testing</td>
<td class="s4">Started talking with Rob Strong about making the changes to the NSIS installer to make this happen.</td>
</tr>
<tr>
<td class="s2">TBD</td>
<td class="s3">[513149](https://bugzilla.mozilla.org/show_bug.cgi?id=513149)</td>
<td class="s4">Speed up CSS parsing by using a machine generated lexer</td>
<td class="s4">Zack Weinberg</td>
<td class="s4">Zack's blocked on other work</td>
<td class="s4">No update.Taras says about 6% of startup spent parsing CSS.</td>
</tr>
</tbody>
</table>
Other activity this week:

*   Of the bugs I filed as a result of the JS profiling data ([ranked log](http://spreadsheets.google.com/pub?key=t98ryMyoZx3Su0Pw7wz0anQ&output=html), [stack view](http://people.mozilla.org/~dietrich/startup-js-win.txt)), we closed out [bug 539991](https://bugzilla.mozilla.org/show_bug.cgi?id=539991) and [bug  539870](https://bugzilla.mozilla.org/show_bug.cgi?id=539870), and have owners and patches on [bug 539869](https://bugzilla.mozilla.org/show_bug.cgi?id=539869) and [bug  539997](https://bugzilla.mozilla.org/show_bug.cgi?id=539997).
*   I figured out the leak on [bug 506471](https://bugzilla.mozilla.org/show_bug.cgi?id=506471), to move FUEL out of the startup path, and will have review soon.
*   Taras posted [a comparison of the startup time on Linux with a new profile for Chromium and Minefield](http://blog.mozilla.com/tglek/2010/01/19/chromium-vs-minefield-cold-startup-performance-comparison/). Good data... for Linux users, but the lesson here is that we urgently need a canonical dirty profile to test with. I'm going to get with the Test Pilot folks to see about gathering the data to do this.
*   Also, I found another post from Taras that I missed while I was out for the holidays, detailing the problems with [measuring cold startup on Windows](http://blog.mozilla.com/tglek/2010/01/04/windows-7-startup-exploration/).
Projects in a holding pattern:

*   More investigation into Hunspell changes in [bug  468799](https://bugzilla.mozilla.org/show_bug.cgi?id=468779), possibly incorporating some changes Chrome made.
*   Ryan Flint has a WIP patch to minify JS on [bug  524858](https://bugzilla.mozilla.org/show_bug.cgi?id=524858) that significantly reduces the size of shipped JavaScript  files.
*   JARification: David abandoned [moving JS          modules into a JAR file](https://bugzilla.mozilla.org/show_bug.cgi?id=509755), since those files are fastloaded.         However, since we want things like post-extension-install  restarts  to   be     fast, and those cause fastload cache invalidation,  we might   want  to   do   things like this anyways. I filed a bug for  the same   treatment  for     components. These are lower priority,  since they're   not the  normal     startup case. Follow along with all  JAR-ification   via[ the         tracker  bug](https://bugzilla.mozilla.org/show_bug.cgi?id=513027).
*   Startup Timeline: No updates, still not landed. Add [ft] in the        whiteboard of your bug w/ the function names you want timed and David        will generate it and update the bug.
*   Static Analysis: No progress on [bug        506128](https://bugzilla.mozilla.org/show_bug.cgi?id=506128).  David needs to file a bug with the final log of        named-yet-uncalled  functions.
*   Dirty Profile Testing: No progress. We have [a list of test scenarios](https://wiki.mozilla.org/Firefox/Sprints/Startup_Time_Improvements#Test_Coverage), still need to file        bugs  for each, generate Talos config patches and profile data, and    then     move  it into Rel-Eng territory. Also, need to get a separate       Tinderbox  tree,  since it's going to cause a bazillion new  columns.
*   [Joel        Reymont](http://wagerlabs.com/) noted in[ bug        513076](https://bugzilla.mozilla.org/show_bug.cgi?id=513076) that there are serious drawbacks to getting our libraries  in       the dyld  shared cache on Mac, so has deprioritized that work.
As usual, more details and links are  available on [the       project wiki](https://wiki.mozilla.org/Firefox/Projects/Startup_Time_Improvements), and we're available to answer questions in [#startup on irc.mozilla.org](irc://irc.mozilla.org/#startup).