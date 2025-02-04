---
title: "Easing Orange: Jetpack for Correlating Tinderbox Test Failures with Bugs"
published_at: 2009-11-19
date: 2009-11-19
tags: ["firefox", "jetpack", "mozilla", "tinderbox", "posts"]
---
This is a [Jetpack ](https://jetpack.mozillalabs.com/)feature for finding out if a bug is already filed for a test failure on [Tinderbox](http://tinderbox.mozilla.org/showbuilds.cgi?tree=Firefox). When viewing log files for failed test runs, the Jetpack will add a link next to the test failure summary at the top of the log, that looks like "(maybe bug XXXXXX?)". This allows sheriff's and other awesome community members to easily mark known-oranges, and update the bug with log's URL.

[Install the Jetpack feature](http://people.mozilla.org/~dietrich/jetpack-orange.html).

Notes:

*   So far it only pulls file names out of error text, so won't match leaks, crashes or oranges without a filename in the summary.
*   Only searches the bug summary, and only searches known orange bugs (ie: has "[orange]" in the bug whiteboard).
*   Scrapes bugzilla.mozilla.org, since the new REST api is very very slow, so might break with bugzilla upgrades.
*   It doesn't run until the log has completed loading, which sometimes can  be a while. Load that shit in a background tab and be patient yo.
Let me know if this helps you out, or any bugs or improvements you'd like to see!