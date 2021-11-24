---
layout: post
title: "Firefox Startup Performance Weekly Summary"
published_at: 2009-10-31
date: 2009-10-31
tags: ["firefox","firefox","mozilla","mozilla","Performance","startup"]
---

No numbers summary this week, as 1) there weren't any major landings and 2) I'm working on a script to automate the generation of these summarized numbers. Updates on the week's activity is below. As usual, more details and links are  available on [the     project wiki](https://wiki.mozilla.org/Firefox/Projects/Startup_Time_Improvements), and we're available to answer questions in [#startup on irc.mozilla.org](irc://irc.mozilla.org/#startup).

*   Taras and Joel are working on [bug 524202](https://bugzilla.mozilla.org/show_bug.cgi?id=524202), tracking down exactly how and when dynamic library code is loaded. See [this comment](https://bugzilla.mozilla.org/show_bug.cgi?id=524202#c3) for a good summary of the issue.
*   I think I've found a scenario for stable cold startup numbers on Windows, which is basically: 1) Run consume.exe for N seconds where N is how long it takes to consume all physical RAM (and which also pegs the CPU), 2) sleep for 30 seconds (or however long it takes for the system to quiet down) and 3) measure startup time as usual. Next step is to get a Talos patch up, and work with Rel/Eng to get it deployed into testing so we can see numbers on real Talos boxes.
*   Rob Strong split up the update service in [bug 311965](https://bugzilla.mozilla.org/show_bug.cgi?id=311965), has most reviews (affects all toolkit apps) and is about ready to land. This showed a significant win on WinCE startup.
Projects in a holding pattern:

*   Drew has a patch up for [bug    506814](https://bugzilla.mozilla.org/show_bug.cgi?id=506814), getting rid of Change     GetPersistentDescriptor/SetPersistentDescriptor on Mac, just needs   review from Josh.
*   B[ug   512645](https://bugzilla.mozilla.org/show_bug.cgi?id=512645), removing the setTimeout 10ms wait in chrome JS, <span style="text-decoration:line-through;">is just  waiting on review</span> just needs to be landed (thanks jesse).
*   Ben Hsieh has been prototyping a whole Fastload cache  replacement in  [bug   520309](https://bugzilla.mozilla.org/show_bug.cgi?id=520309).
*   Ted has been looking at re-enabling rebasing on  Windows in [bug   484799](https://bugzilla.mozilla.org/show_bug.cgi?id=484799) for a potential performance boost there.
*   Service caching work in [bug        516085](https://bugzilla.mozilla.org/show_bug.cgi?id=516085) still needs to be pushed  to  the  Places branch for  testing.
*   Moving font-loading out of the startup path on Mac: Jonathan Kew    filed [bug      519445](https://bugzilla.mozilla.org/show_bug.cgi?id=519445) with a WIP patch for yet further reductions in Mac startup      time spent in font system initialization.
*   JARification: David abandoned [moving JS         modules into a JAR file](https://bugzilla.mozilla.org/show_bug.cgi?id=509755), since those files are fastloaded.        However, since we want things like post-extension-install restarts  to   be     fast, and those cause fastload cache invalidation, we might   want  to   do   things like this anyways. I filed a bug for the same   treatment  for     components. These are lower priority, since they're   not the  normal     startup case. Follow along with all JAR-ification   via[ the        tracker  bug](https://bugzilla.mozilla.org/show_bug.cgi?id=513027).
*   Startup Timeline: No updates, still not landed. Add [ft] in the       whiteboard of your bug w/ the function names you want timed and David       will generate it and update the bug.
*   Static Analysis: No progress on [bug       506128](https://bugzilla.mozilla.org/show_bug.cgi?id=506128).  David needs to file a bug with the final log of       named-yet-uncalled  functions.
*   Dirty Profile Testing: No progress. Need to list scenarios, file       bugs  for each, generate Talos config patches and profile data, and   then     move  it into Rel-Eng territory. Also, need to get a separate      Tinderbox  tree,  since it's going to cause a bazillion new columns.
*   [Joel       Reymont](http://wagerlabs.com/) noted in[ bug       513076](https://bugzilla.mozilla.org/show_bug.cgi?id=513076) that there are serious drawbacks to getting our libraries in       the dyld  shared cache on Mac, so has deprioritized that work.
*   No updates on Zack's CSS parser changes in [bug         513149](https://bugzilla.mozilla.org/show_bug.cgi?id=513149).