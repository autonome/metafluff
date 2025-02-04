---
title: "Firefox Feature Development in 2012"
published_at: 2011-12-23
date: 2011-12-23
tags: ["firefox", "mozilla", "posts"]
---
This year we started talking about ways to improve the methods in which develop Firefox features. This is a snapshot of where we're at, and what's coming next.

We began with some conversations about current problems regarding coordination, speed, contribution, regressions, ease of development: [my initial dev.planning post](https://groups.google.com/forum/\#!topic/mozilla.dev.planning/K1fr4VqtQTA), [Joe Walker's post 'How to Eat an Elephant'](http://incompleteness.me/mozblog/2011/09/16/how-to-eat-an-elephant/), [my blog post](http://autonome.wordpress.com/2011/10/25/building-firefox-in-the-post-browser-age/), [dev.planning add-on bundling post](https://groups.google.com/forum/\#!topic/mozilla.dev.planning/oCMjhx5siEU/discussion).

There was general recognition that the Firefox development model is not agile nor flexible enough to meet the needs of our 2012 goals. We need to be able to ship features that are developed mostly outside of what's considered the "core" Firefox team. We need to better support the use of external code repositories and bug tracking systems. We need to support features written using the Add-on SDK, both inside and bundled with Firefox.

Here's where we're at:

*   A group of people formed to start discussing how to make these things happen: the Jetpack Features group. We meet every other Friday ([meeting details and notes](https://wiki.mozilla.org/Jetpack/Features)).
*   We have a project branch (Cedar) where we can experiment and do performance testing.
*   We corralled the Firefox and Toolkit module owners and the leads of the SDK project in a room to orchestrate the mechanics of landing the SDK inside Firefox itself ([notes](https://etherpad.mozilla.org/jetpack-in-firefox)).
*   L10n: The Jetpack team are hard at work on closing this gap with both [localized strings in script](https://bugzilla.mozilla.org/show_bug.cgi?id=691782) and [localization of HTML content inside add-ons](https://github.com/mozilla/addon-sdk/wiki/HTML-Page-Localization).
*   Performance: [Jeff Griffiths blogged recently](http://blog.mozilla.com/addons/2011/12/12/sdk-1-3-performance-impact/) about the performance impact of the core SDK runtime on startup time. More performance tests are coming.
*   Feature bundling: The BrowserID feature will likely ship in Firefox as a bundled add-on. There are still open questions though: Is it uninstallable? Does it even show up in the Add-ons Manager? Can it upgrade outside of the Firefox dev cycle? More work to do here.
*   Automation: We have the Jetpack unit tests being run with every Mozilla-central check-in ([though hidden by default currently](http://tbpl.mozilla.org/?tree=Firefox&noignore=1)). We have the SDK unit tests running on every SDK check-in for both Nightly and Aurora ([tree](https://tbpl.mozilla.org/?tree=Jetpack&usetinderbox=1)). We still need the Mozilla-central unit tests run on every SDK check-in (that'll come with integrating the SDK into Firefox), and [performance tests run for Mozilla-central and SDK check-ins](https://bugzilla.mozilla.org/show_bug.cgi?id=702684).
What's coming up in 2012:

*   Completing the picture of addon-as-feature integration into the Moz-ecosystem: l10n, performance and unit test automation.
*   Ship BrowserID as a bundled add-on.
*   Ship the SDK inside Firefox (the relevant parts, anyway).
*   Ship Web Apps as a bundled add-on, if it makes sense to do so.