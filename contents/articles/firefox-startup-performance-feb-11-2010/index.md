---
layout: post
title: Firefox Startup Performance - Feb 11, 2010
published_at: 2010-02-12
date: 2010-02-12
tags: firefox firefox mozilla mozilla Performance startup
---

Various minor updates this week:

*   [Static build](https://bugzilla.mozilla.org/show_bug.cgi?id=525013): Ted did the first pass of review. Getting close. Will land on the Places branch once binary tests build, to see perf impact.
*   Ben's [fastload cache replacement](https://bugzilla.mozilla.org/show_bug.cgi?id=520309) is still waiting on first-review from Ben Smedberg.
*   Neil took up [bug 354048](https://bugzilla.mozilla.org/show_bug.cgi?id=354048) to not rebuild toolbars at startup, should reduce the DOM activity some at least. The patch is in review by Dao and Mano.
*   Marco has nearly completed [bug 542943](https://bugzilla.mozilla.org/show_bug.cgi?id=542943), removing the bookmark redirect hash, which means less SQL at startup and less memory usage by the bookmarks service.
*   I put a patch up on [bug 545516](https://bugzilla.mozilla.org/show_bug.cgi?id=545516) that fixes some bugs and cleans up the layout of the [Performance Snapshot](http://graphs.mozilla.org/dashboard/snapshot/). Will get it landed next week.
*   Started working with John O'Duinn and Mike Morgan to get a team together to work on the graph server.