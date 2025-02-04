---
title: "Firefox Startup Performance Weekly Summary"
published_at: 2009-11-07
date: 2009-11-07
tags: ["firefox", "mozilla", "performance", "startup", "posts"]
---
This week brings a boost in visibility of results, not just for startup, but for all the performance testing we're doing on all branches and platforms. As I mentioned last week, I was working on an automated method of generating the cross-branch startup results. Luckily [Johnath ](http://blog.johnath.com/)and [Chris Atlee](http://atlee.ca/blog/) had done the hard work when making the [performance dashboard](http://graphs.mozilla.org/dashboard/). It has a JSON file that contains a roll-up of the previous 7 days performance data, which is updated every 5 minutes with new Talos results. Using that as the datasource, I wrote  a script summarizes the results for each test+branch+OS combination across all the boxes that returned results, as well as stable branch and previous week differences. The final product gives a snapshot view of how each branch compares to the stable branch.

This is useful for a few different reasons. First, we (and the press and our users and our managers and everyone really) are able to know at-a-glance how any branch compares to the stable release branch. An example of another use is that before the JS team does a Tracemonkey merge, they can quickly see if any major performance effects can be expected.

The table shows red or green for any differences that are outside of a 2\% threshold, to take test noise into account. This is quite liberal, as I've already calculated the numbers to take into account whether the difference is within the standard deviation. Reducing the noise in the tests would be a big help - perhaps some researcher will take up [Roc's challenge](http://weblogs.mozillazine.org/roc/archives/2009/11/challenges_in_s.html). A second point of trust is my math :) I'm not a statistician, so please view source and let me know where I've miscalculated.

An example of the full report is [here](http://people.mozilla.org/~dietrich/snapshot/). I'm going to file a bug and work with release-engineering to get it pushed out to the graph server, where the dashboard lives. The data from this week's startup table is copied below (though sans the color-coding of the real thing. Actually, now Wordpress keeps stripping out my styles, so you get an ugly table this week).

\# Ts

<table style="border-spacing:0;border-collapse:collapse;border:0 0 1px 1px solid \#600;">
<tbody>
<tr>
<td style="background-color:\#ffc;border:1px 1px 0 0 solid \#600;margin:0;padding:4px;"></td>
<td style="background-color:\#ffc;border:1px 1px 0 0 solid \#600;margin:0;padding:4px;">Firefox3.5</td>
<td style="background-color:\#ffc;border:1px 1px 0 0 solid \#600;margin:0;padding:4px;">Firefox3.6</td>
<td style="background-color:\#ffc;border:1px 1px 0 0 solid \#600;margin:0;padding:4px;">Firefox</td>
<td style="background-color:\#ffc;border:1px 1px 0 0 solid \#600;margin:0;padding:4px;">TraceMonkey</td>
</tr>
<tr>
<td style="background-color:\#ffc;border:1px 1px 0 0 solid \#600;margin:0;padding:4px;">Leopard</td>
<td style="background-color:\#ffc;border:1px 1px 0 0 solid \#600;margin:0;padding:4px;">median:  1469deviation: 110mean: 1481

from last week: 2\%</td>
<td style="background-color:\#ffc;border:1px 1px 0 0 solid \#600;margin:0;padding:4px;">median:  1115
deviation: 59
mean: 1096
from last week: 3\%
from 3.5: 26\%</td>
<td style="background-color:\#ffc;border:1px 1px 0 0 solid \#600;margin:0;padding:4px;">median: 1036
deviation: 48
mean: 1006
from last week: 1\%
from 3.5: 32\%</td>
<td style="background-color:\#ffc;border:1px 1px 0 0 solid \#600;margin:0;padding:4px;">median: 1014
deviation:  38
mean: 1000
from last week: 0\%
from 3.5: 32\%</td>
</tr>
<tr>
<td style="background-color:\#ffc;border:1px 1px 0 0 solid \#600;margin:0;padding:4px;">Linux</td>
<td style="background-color:\#ffc;border:1px 1px 0 0 solid \#600;margin:0;padding:4px;">median:  625
deviation: 7
mean: 626
from last week: 0\%</td>
<td style="background-color:\#ffc;border:1px 1px 0 0 solid \#600;margin:0;padding:4px;">median:  632
deviation: 7
mean: 633
from last week: 0\%
from 3.5: -1\%</td>
<td style="background-color:\#ffc;border:1px 1px 0 0 solid \#600;margin:0;padding:4px;">median: 619
deviation: 10
mean: 623
from last week: 1\%</td>
<td style="background-color:\#ffc;border:1px 1px 0 0 solid \#600;margin:0;padding:4px;">median: 628
deviation: 7
mean: 628
from last week: 0\%</td>
</tr>
<tr>
<td style="background-color:\#ffc;border:1px 1px 0 0 solid \#600;margin:0;padding:4px;">Vista</td>
<td style="background-color:\#ffc;border:1px 1px 0 0 solid \#600;margin:0;padding:4px;">median:  538
deviation: 8
mean: 540
from last week: 0\%</td>
<td style="background-color:\#ffc;border:1px 1px 0 0 solid \#600;margin:0;padding:4px;">median:  533
deviation: 13
mean: 537
from last week: 1\%
from 3.5: 1\%</td>
<td style="background-color:\#ffc;border:1px 1px 0 0 solid \#600;margin:0;padding:4px;">median: 503
deviation: 23
mean: 509
from last week: 0\%
from  3.5: 6\%</td>
<td style="background-color:\#ffc;border:1px 1px 0 0 solid \#600;margin:0;padding:4px;">median: 511
deviation: 41
mean: 531
from last week: 11\%
from 3.5: 2\%</td>
</tr>
<tr>
<td style="background-color:\#ffc;border:1px 1px 0 0 solid \#600;margin:0;padding:4px;">XP</td>
<td style="background-color:\#ffc;border:1px 1px 0 0 solid \#600;margin:0;padding:4px;">median:  461
deviation: 6
mean: 461
from last week: 0\%</td>
<td style="background-color:\#ffc;border:1px 1px 0 0 solid \#600;margin:0;padding:4px;">median:  464
deviation: 6
mean: 464
from last week: 1\%
from 3.5: -1\%</td>
<td style="background-color:\#ffc;border:1px 1px 0 0 solid \#600;margin:0;padding:4px;">median: 448
deviation: 7
mean: 448
from last week: 0\%
from  3.5: 3\%</td>
<td style="background-color:\#ffc;border:1px 1px 0 0 solid \#600;margin:0;padding:4px;">median: 530
deviation: 38
mean: 501
from last week: 10\%
from  3.5: -9\%</td>
</tr>
</tbody></table>
This week's activity:

*   Taras and Joel are still working on [bug 524202](https://bugzilla.mozilla.org/show_bug.cgi?id=524202), tracking down exactly how and when dynamic library code is loaded. They're past diagnostics, and are now into implementation, coaxing the linker into ordering functions in the optimal sequence. See [this  comment](https://bugzilla.mozilla.org/show_bug.cgi?id=524202\#c3) for a good summary of the issue. Joel put up [a very detailed blog post](http://wagerlabs.com/post/230853261/tracking-io-patterns-in-memory-mapped-dynamic-libaries) about the work they've been doing.
*   Ryan Flint [posted an update on his startup bug activity](http://screwedbydesign.com/blog/2009/11/this-week-in-perf-nov06.php) this week.
*   Have a patch enabling Windows cold-startup testing for Talos for [bug 522807](https://bugzilla.mozilla.org/show_bug.cgi?id=522807), but it's causing the whole OS to freeze, only recoverable via reboot. Fun! I also added some [details and links about how Prefetch/SuperFetch work](https://wiki.mozilla.org/Firefox/Sprints/Startup_Time_Improvements\#Tips.2C_Tools) on Windows to the wiki.
*   Rob Strong pushed [bug 311965](https://bugzilla.mozilla.org/show_bug.cgi?id=311965) to mozilla-central, comm-central and 1.9.2 while also ensuring not to break all the toolkit apps that depend on this code. Truly a gentleman of the Mozilla ecosystem.
*   Taras put a new patch up for service caching in [bug         516085](https://bugzilla.mozilla.org/show_bug.cgi?id=516085).
*   Everything is about ready for re-enabling rebasing on  Windows in [bug    484799](https://bugzilla.mozilla.org/show_bug.cgi?id=484799), just needs landing.
*   John Dagget posted some test times in [bug       519445](https://bugzilla.mozilla.org/show_bug.cgi?id=519445) for yet further reductions in Mac startup       time spent in font system initialization, just needs review.
*   B[ug    512645](https://bugzilla.mozilla.org/show_bug.cgi?id=512645), removing the setTimeout 10ms wait in chrome JS, is ready to land. I'll try to land this weekend if the bug owner doesn't get around to it first (hint hint).
Projects in a holding pattern:

*   Drew has a patch up for [bug    506814](https://bugzilla.mozilla.org/show_bug.cgi?id=506814), getting rid of Change     GetPersistentDescriptor/SetPersistentDescriptor on Mac, just needs   review from Josh.
*   Ben Hsieh has been prototyping a whole Fastload cache  replacement in  [bug   520309](https://bugzilla.mozilla.org/show_bug.cgi?id=520309).
*   JARification: David abandoned [moving JS         modules into a JAR file](https://bugzilla.mozilla.org/show_bug.cgi?id=509755), since those files are fastloaded.        However, since we want things like post-extension-install restarts  to   be     fast, and those cause fastload cache invalidation, we might   want  to   do   things like this anyways. I filed a bug for the same   treatment  for     components. These are lower priority, since they're   not the  normal     startup case. Follow along with all JAR-ification   via[ the        tracker  bug](https://bugzilla.mozilla.org/show_bug.cgi?id=513027).
*   Startup Timeline: No updates, still not landed. Add [ft] in the       whiteboard of your bug w/ the function names you want timed and David       will generate it and update the bug.
*   Static Analysis: No progress on [bug       506128](https://bugzilla.mozilla.org/show_bug.cgi?id=506128).  David needs to file a bug with the final log of       named-yet-uncalled  functions.
*   Dirty Profile Testing: No progress. Need to list scenarios, file       bugs  for each, generate Talos config patches and profile data, and   then     move  it into Rel-Eng territory. Also, need to get a separate      Tinderbox  tree,  since it's going to cause a bazillion new columns.
*   [Joel       Reymont](http://wagerlabs.com/) noted in[ bug       513076](https://bugzilla.mozilla.org/show_bug.cgi?id=513076) that there are serious drawbacks to getting our libraries in       the dyld  shared cache on Mac, so has deprioritized that work.
*   No updates on Zack's CSS parser changes in [bug         513149](https://bugzilla.mozilla.org/show_bug.cgi?id=513149).
As usual, more details and links are  available on [the      project wiki](https://wiki.mozilla.org/Firefox/Projects/Startup_Time_Improvements), and we're available to answer questions in [\#startup on irc.mozilla.org](irc://irc.mozilla.org/\#startup).

UPDATE: Fixed link to full report.