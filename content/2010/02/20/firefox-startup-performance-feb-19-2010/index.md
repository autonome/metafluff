---
title: "Firefox Startup Performance - Feb 19, 2010"
published_at: 2010-02-20
date: 2010-02-20
tags: ["firefox", "mozilla", "performance", "startup", "posts"]
---
Taras [blogged  about the function ordering work](http://blog.mozilla.com/tglek/2010/02/19/teaching-ld-to-optimize-binaries-for-startup/) he did while on vacation in Fiji  (?!). Looks like the potential for a minimum 10\% win there, very exciting. Follow along in [bug 531406](https://bugzilla.mozilla.org/show_bug.cgi?id=531406).

Other than that, no major updates:

*   Zack found surprisingly large performance wins just from deCOMtamination  patches in his CSS work. If you want to help out, [bug 105431](https://bugzilla.mozilla.org/show_bug.cgi?id=105431 "https://bugzilla.mozilla.org/show_bug.cgi?id=105431") is the deCOM tracker bug, and [bug 545052](https://bugzilla.mozilla.org/show_bug.cgi?id=545052 "https://bugzilla.mozilla.org/show_bug.cgi?id=545052") is about building tools for automating deCOMtamination.
*   [Static  build](https://bugzilla.mozilla.org/show_bug.cgi?id=525013): Still in reviews, need to figure out approach to binary tests  on the tinderbox.
*   Ben's [fastload cache replacement](https://bugzilla.mozilla.org/show_bug.cgi?id=520309) is still waiting on first-review from Ben Smedberg.
*   B[ug 354048](https://bugzilla.mozilla.org/show_bug.cgi?id=354048) to not rebuild toolbars at startup, still cycling through reviews.