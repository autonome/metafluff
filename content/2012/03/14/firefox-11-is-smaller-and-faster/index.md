---
title: "Firefox 11 is Smaller and Faster"
published_at: 2012-03-14
date: 2012-03-14
tags: ["firefox", "memshrink", "mozilla", "performance", "snappy", "posts"]
---
We quietly shipped Firefox 11 with a bunch of performance fixes that both reduce the amount of memory that Firefox uses, and improve the responsiveness of it's user interface.

These types of changes are not easy to talk about. Often they're very technical, and meaningless to anyone but the developers involved, which is probably why we usually don't enumerate them in the the [release notes](http://www.mozilla.org/en-US/firefox/11.0/releasenotes/) or other public announcements. "Firefox is 74\% faster when you open menu X, and twice as fast in some garbage collection scenarios!" Yeah, not an eye-popping headline. We could do a lot better in communicating these improvements in broadly meaningful ways though - nice graphs or some competitive site like [arewefastyet](http://arewefastyet.com/) would help a lot. But until then, here's a short summary of the improvements in Firefox 11. And if you know of other performance fixes that don't fall into the categories below, please add them in the comments!

\#\#\# Memory Use (aka "memshrink")

The [Memshrink project](https://wiki.mozilla.org/Performance/MemShrink) has been going for quite a while now, led by Nicholas Nethercote. He blogs [weekly updates on the project's activity](http://blog.mozilla.com/nnethercote/category/memshrink/). According to Bugzilla, there were [29 memshrink bugs marked fixed](http://j.mp/A9pVz4) during the Firefox 11 development cycle - four of which were P1, or very high priority. Some of the fixes were related to tools and detection methods, but many are actual reductions in memory use. The changes that made it into Firefox 11 include fixes for detected leaks, removing of zombie compartments, lazy-loading data, reducing the size of some caches, reducing memory used while scrolling, and many more.

\#\#\# UI Responsiveness (aka "snappy")

The [Snappy project](https://wiki.mozilla.org/Performance/Snappy) started last December, and is run by [Taras Glek](https://twitter.com/\#!/tarasglek). Its aim is to improve the responsiveness of the Firefox UI. Taras has been posting [weekly updates on Snappy activity](http://blog.mozilla.com/tglek/category/snappy/) on his blog. Bugzilla shows [15 snappy bugs marked fixed](http://j.mp/ypxFzj) during the Firefox 11 development cycle. The project had just started, but there are still some significant wins in this release! Firefox 11 includes reductions in queries in the bookmarks system, reduced preference lookups, faster data collection for session restore, and various improvements in the DOM code.

\#\#\# Add-on Compatibility

While it's not related to performance, I do want to call attention to something that many people don't seem to know: In Firefox 10 (yes, the previous release) we stopped marking most add-ons incompatible when you upgrade. That means that a LOT more of your add-ons will continue to work when you upgrade Firefox from here on out. The only add-ons that still require compatibility bumps are those that have binary components, since they need to be recompiled against the current version.

[Download Firefox 11](http://www.mozilla.org/en-US/firefox/new/).