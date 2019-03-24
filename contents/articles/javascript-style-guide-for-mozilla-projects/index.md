---
layout: post
title: "Javascript Style Guide For Mozilla Projects"
published_at: 2006-03-25
date: 2006-03-25
tags: mozilla
---

There doesn't seem to be one (or I couldn't find it!). Here are a few guidelines I've picked up from recent patch review comments. Please comment if you have additions and corrections, and maybe we can coalesce this into a page on MDC, with examples and the reasoning behind the guidelines.

*   Two space indentation is most common in browser/toolkit code
*   Lines need to wrap at 80 characters
*   Braces are usually same-line, and only used when surrounding a multiline block
*   Use an underscore ("_") as the private prefix for properties and methods
*   When wrapping a long expression, the operator goes at the end of the line
*   Use spaces instead of tabs
*   Adhere to the style of the code you're fixing (or fix it, if it's incorrect!)
*   Use inline comments liberally

References:

*   [bz317107](https://bugzilla.mozilla.org/show_bug.cgi?id=317107), comments [43](https://bugzilla.mozilla.org/show_bug.cgi?id=317107#c43) and [46](https://bugzilla.mozilla.org/show_bug.cgi?id=317107#c46)
*   [bz328159](https://bugzilla.mozilla.org/show_bug.cgi?id=328159), comment [8](https://bugzilla.mozilla.org/show_bug.cgi?id=328159#c8) (some of the other comments have good critique as well)