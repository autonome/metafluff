---
title: "Firefox Startup Performance Weekly Summary"
published_at: 2009-09-06
date: 2009-09-06
tags: ["firefox", "mozilla", "performance", "startup", "posts"]
---
Let's start with the numbers. Vlad spent some time measuring warm startup on the Mac, and it looks very nice: Firefox 3.6 starts up about 10\% faster than 3.5, and 3.7 starts up about 20\% faster than 3.5. I measured both cold and warm startup on Windows 7, and the picture is not so rosy there. Warm startup is basically flat across 3.5, 3.6 and 3.7, in my tests. Cold startup is... well, weird. Allow me to explain...

My cold startup methodology is simple: On a basically clean install of Windows 7, I'd create a new profile, start the browser up, close it and then reboot. Then I'd measure Firefox startup time after the OS settled. Then I'd do that reboot-and-measure step a bunch more times. Yes, so much fun. I measured Firefox startup time using the method Vlad posted to his blog. This doesn't do anything to avoid OS optimizations that might persist across reboots, which is a potential flaw, as you'll see below.

Firefox 3, 3.6 and 3.7 all had consistent numbers across their runs. However, Firefox 3.5 displayed a unique behavior: The first two cold starts were appropriately slow, similar to the cold startup times of the other versions. The subsequent runs were *very* fast for a cold start! I rebooted a few times, and started other versions a few times, then tried a series of 3.5 runs again... and saw the same thing: the first two runs were in the ballpark of other Firefox versions, but subsequent runs were crazy fast. Vlad was talking earlier in the week about a predictive optimization feature that Windows has, learning from an application's behavior to optimize it's performance. Possibly that feature works fantastically with Firefox 3.5, and for whatever reason does not work nearly as well with previous or subsequent versions of the app? I've clearly crossed into the realm of fantasy here, so alternate theories are welcome. Perhaps I should round-robin through all versions instead of doing serial runs of the same version.

Firefox 3.5 aside, when measuring cold startup I also see the regression that [Drew blogged about](http://blog.mozilla.com/adw/2009/09/04/cold-ts/). We'll get a bug filed and help from QA to get a regression range for this.

Status updates:

*   Startup Timeline: Still not landed, and David found that the timeline instrumentation if put in certain places causes major stability issues. As before, he can provide timeline info for you, just point him at the code by putting [ft] in the whiteboard of your bug.
*   PGO for Places, mozStorage and SQLite: Still blocking on Rel-Eng fixing [bug 486783](https://bugzilla.mozilla.org/show_bug.cgi?id=486783). I still need to connect with John O'Duinn and see if we can move this up in the schedule.
*   JARification: David started working on [moving JS modules into a JAR file](https://bugzilla.mozilla.org/show_bug.cgi?id=509755). Follow along with all JAR-ification via[ the tracker bug](https://bugzilla.mozilla.org/show_bug.cgi?id=513027). Alfred Kayser is working on getting [bug 510844](https://bugzilla.mozilla.org/show_bug.cgi?id=510844) landed, which should increase throughput of JAR file reading.
*   JS Component Combining: Further effort is probably not worth it, since these components are fastloaded. Removing the [needless file stats when these are first instantiated](https://bugzilla.mozilla.org/show_bug.cgi?id=512827) is what we need to do. I need to talk to Damon and find a XPConnect/Component-loader person for this.
*   Static Analysis: No progress on [Bug 506128](https://bugzilla.mozilla.org/show_bug.cgi?id=506128). David needs to file a bug with the final log of named-yet-uncalled functions.
*   Dirty Profile Testing: No progress. Need to list scenarios, file bugs for each, generate Talos config patches and profile data, and then move it into Rel-Eng territory. Also, need to get a separate Tinderbox tree, since it's going to cause a bazillion new columns.
*   Cold Startup Testing: Drew and Alice made a bunch of progress on [bug 510587](https://bugzilla.mozilla.org/show_bug.cgi?id=510587), to create a new Ts that measures cold startup. They're starting with Mac and Linux, and will tackle Windows later. Drew [blogged about their work](http://blog.mozilla.com/adw/2009/09/04/cold-ts/) on this.
*   [Joel Reymont](http://wagerlabs.com/) noted in[ bug 513076](https://bugzilla.mozilla.org/show_bug.cgi?id=513076) that there are serious drawbacks to getting our libraries in the dyld shared cache on Mac, so is deprioritizing that work for now.
*   [Ryan Flint blogged about](http://screwedbydesign.com/blog/2009/09/this-week-in-perf-sep04.php) various front-end improvements he's working on that affect startup time.
*   CSS Parsing Time: Zack says his work in [bug 513149](https://bugzilla.mozilla.org/show_bug.cgi?id=513149) might improve CSS parsing time by 50\%, and it's next on his list.