---
title: "Firefox Startup Performance Weekly Summary"
published_at: 2009-11-21
date: 2009-11-21
tags: ["firefox", "mozilla", "performance", "startup", "posts"]
---
Current numbers are available on the [Performance  Snapshot](http://graphs.mozilla.org/dashboard/snapshot/) page.

Summary, relative to Firefox 3.5:

*   Warm startup: For Mac, 36\% better on 3.6 and 35\% better on 3.7. For  Windows, 5\% and 5\%. Flat on Linux. Also, Warm startup for Mac on 3.6 is a whopping 13\% better than last week, due to the landing of [bug 517804](https://bugzilla.mozilla.org/show_bug.cgi?id=517804).
*   Cold startup:  For Mac, 20\% better on both 3.6 and 3.7. For  Windows, not measuring yet. For Linux, we're seeing a regression of ~9\% across branch and trunk in the snapshot but not on the graphs, so I need to figure out where the discrepancy is.
This week's activity:

*   Dirty-cold-Ts went live this week, thanks to Alice and Lukas. Example: [cold startup with a  large places.sqlite on Mac](http://graphs.mozilla.org/\#tests=[\{\%22test\%22:\%2266\%22,\%22branch\%22:\%2210\%22,\%22machine\%22:\%22169\%22\},\{\%22test\%22:\%2266\%22,\%22branch\%22:\%2210\%22,\%22machine\%22:\%22170\%22\},\{\%22test\%22:\%2266\%22,\%22branch\%22:\%2210\%22,\%22machine\%22:\%22172\%22\},\{\%22test\%22:\%2266\%22,\%22branch\%22:\%2210\%22,\%22machine\%22:\%22173\%22\},\{\%22test\%22:\%2266\%22,\%22branch\%22:\%2210\%22,\%22machine\%22:\%22174\%22\},\{\%22test\%22:\%2266\%22,\%22branch\%22:\%2210\%22,\%22machine\%22:\%22175\%22\},\{\%22test\%22:\%2266\%22,\%22branch\%22:\%2210\%22,\%22machine\%22:\%22177\%22\},\{\%22test\%22:\%2266\%22,\%22branch\%22:\%2210\%22,\%22machine\%22:\%22178\%22\},\{\%22test\%22:\%2266\%22,\%22branch\%22:\%2210\%22,\%22machine\%22:\%22180\%22\},\{\%22test\%22:\%2266\%22,\%22branch\%22:\%2210\%22,\%22machine\%22:\%22181\%22\},\{\%22test\%22:\%2266\%22,\%22branch\%22:\%2210\%22,\%22machine\%22:\%22182\%22\}] "http://tinyurl.com/258pht").
*   Joel is making progress on making a super-static Firefox in [bug 525013](https://bugzilla.mozilla.org/show_bug.cgi?id=525013 "https://bugzilla.mozilla.org/show_bug.cgi?id=525013").
*   Ben is making progress on the fastload replacement in [bug 520309](https://bugzilla.mozilla.org/show_bug.cgi?id=520309 "https://bugzilla.mozilla.org/show_bug.cgi?id=520309").
*   No updates on Windows cold-startup testing for  Talos on [bug  522807](https://bugzilla.mozilla.org/show_bug.cgi?id=522807). I need to test on Vista, and turn off Pre/Superfetch.
*   Taras has patches up for service caching ([bug 516085](https://bugzilla.mozilla.org/show_bug.cgi?id=516085 "https://bugzilla.mozilla.org/show_bug.cgi?id=516085")) and super-fast-path-ing of Components.* ([bug 512584](https://bugzilla.mozilla.org/show_bug.cgi?id=512584 "https://bugzilla.mozilla.org/show_bug.cgi?id=512584")), however the latter he's hit a wall, passing on to Blake or someone else who knows that code.
*   Ted landed rebasing on Windows in [bug 484799](https://bugzilla.mozilla.org/show_bug.cgi?id=484799 "https://bugzilla.mozilla.org/show_bug.cgi?id=484799").
*   Jonathan Kew has a new patch in [bug        519445](https://bugzilla.mozilla.org/show_bug.cgi?id=519445) for further reductions in Mac startup       time spent in  font system initialization, just about there...
*   Ryan Flint put a patch to minify JS on [bug 524858](https://bugzilla.mozilla.org/show_bug.cgi?id=524858), not working yet, but significantly reduced the size of shipped JavaScript files.
Projects in a holding pattern:

*   JARification: David abandoned [moving JS          modules into a JAR file](https://bugzilla.mozilla.org/show_bug.cgi?id=509755), since those files are fastloaded.         However, since we want things like post-extension-install  restarts  to   be     fast, and those cause fastload cache invalidation,  we might   want  to   do   things like this anyways. I filed a bug for  the same   treatment  for     components. These are lower priority,  since they're   not the  normal     startup case. Follow along with all  JAR-ification   via[ the         tracker  bug](https://bugzilla.mozilla.org/show_bug.cgi?id=513027).
*   Startup Timeline: No updates, still not landed. Add [ft] in the        whiteboard of your bug w/ the function names you want timed and David        will generate it and update the bug.
*   Static Analysis: No progress on [bug        506128](https://bugzilla.mozilla.org/show_bug.cgi?id=506128).  David needs to file a bug with the final log of        named-yet-uncalled  functions.
*   Dirty Profile Testing: No progress. Need to list scenarios, file        bugs  for each, generate Talos config patches and profile data, and    then     move  it into Rel-Eng territory. Also, need to get a separate       Tinderbox  tree,  since it's going to cause a bazillion new  columns.
*   [Joel        Reymont](http://wagerlabs.com/) noted in[ bug        513076](https://bugzilla.mozilla.org/show_bug.cgi?id=513076) that there are serious drawbacks to getting our libraries  in       the dyld  shared cache on Mac, so has deprioritized that work.
*   No updates on Zack's CSS parser changes in [bug          513149](https://bugzilla.mozilla.org/show_bug.cgi?id=513149).
As usual, more details and links are  available on [the       project wiki](https://wiki.mozilla.org/Firefox/Projects/Startup_Time_Improvements), and we're available to answer questions in [\#startup on irc.mozilla.org](irc://irc.mozilla.org/\#startup).