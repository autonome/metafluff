---
layout: post
title: Firefox Startup Performance - Feb 5, 2010
published_at: 2010-02-06
date: 2010-02-06
tags: firefox firefox mozilla mozilla Performance startup
---

Nothing major to report. Some of the big projects are in the final stretch, which is great to see.

*   [Static build](https://bugzilla.mozilla.org/show_bug.cgi?id=525013): Joel's in cleanup phase, making sure the mobile tinderboxes build with the changes. Core patch is waiting on first review from Ted.
*   Ben's [fastload cache replacement](https://bugzilla.mozilla.org/show_bug.cgi?id=520309) is waiting on first-review from Ben Smedberg.
*   Zach has [more data](https://bugzilla.mozilla.org/show_bug.cgi?id=513149#c22) on the effect of the CSS parser optimizations he's been working on.
*   Asaf put up an [experimental patch](https://bugzilla.mozilla.org/show_bug.cgi?id=528884) for making the bookmarks toolbar all JS, no XBL.
Related work I did this week:

*   Started updating the [Performance Snapshot](http://graphs.mozilla.org/dashboard/snapshot/). Fixing a couple of bugs and making the percentages relative to the 3.6 branch.
*   Spent some time poking at the graph server. It's got serious performance problems, and is lacking a few features that'd make it immensely useful, instead of only somewhat useful. It just needs a little love, that's all.
*   Landed [bug  506471](https://bugzilla.mozilla.org/show_bug.cgi?id=506471), moving FUEL out of the startup path.