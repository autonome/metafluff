---
layout: post
title: "Firefox Performance Report, Startup and Otherwise - March 19, 2010"
published_at: 2010-03-20
date: 2010-03-20
tags: ["firefox","firefox","mozilla","mozilla","Performance","startup"]
---

A couple of notices: First, I'm going to start including various performance-related items in these  posts that aren't purely about startup time. There's a whole bunch of activity happening that isn't really rolled up anywhere, so it might as well be here. Second, I'll be out on vacation in Florida next week, so there will not be a status update.

*   Last week I forgot to add that Marco Bonardo landed [bug 542943](https://bugzilla.mozilla.org/show_bug.cgi?id=542943), which removed a hash of all bookmarks that stayed resident for the lifetime of the application. This resulted in a 97% improvement in shutdown time for our test of a very large bookmarks+history collection.
*   Ted's taken over the [static build project](https://bugzilla.mozilla.org/show_bug.cgi?id=525013), and has new patches up.
*   Taras is working on [Linux code locality](https://bugzilla.mozilla.org/show_bug.cgi?id=531406) via a [Valgrind plugin he's writing](https://bugzilla.mozilla.org/show_bug.cgi?id=549749), with help from those folks.
*   At the platform work week Taras talked to Ehsan, who it turns out had a bunch of ideas for improving startup there. I've filed bugs from Ehsan's notes for better [Windows code locality](https://bugzilla.mozilla.org/show_bug.cgi?id=553721), [binding DLL function addresses to the executable](https://bugzilla.mozilla.org/show_bug.cgi?id=553723), [DLL rebasing](https://bugzilla.mozilla.org/show_bug.cgi?id=553725), and [DLL lazy-loading](https://bugzilla.mozilla.org/show_bug.cgi?id=553727).
*   The [add-on performance "best practices" document](https://wiki.mozilla.org/Performance/Addons/BestPractices) is getting bigger and better. If you have ideas for improving add-on performance, please add them to the doc!
*   All of our add-on performance efforts are being tracked centrally on [this page](https://wiki.mozilla.org/Performance/Addons). If you want to get involved, hop on one of those bugs. If you want to stay updated, "watch" that page and you'll get emails whenever it's updated.
*   I've updated the main [Performance wiki page](https://wiki.mozilla.org/Performance). The top sections are now up to date. Next I'll be updating the testing and reference sections, and breaking out the task-specific content and moving it to an updated table of performance activities, like we currently have for startup, addons, etc. When the page is more manageable, I'll remove the TOC that's pushing everything below the fold.
*   As usual, the table of active startup performance activity is [here](https://wiki.mozilla.org/Firefox/Projects/Startup_Time_Improvements).