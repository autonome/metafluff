---
title: "Dormancy: Freeing up memory from unused tabs"
published_at: 2011-09-03
date: 2011-09-03
tags: ["add-ons", "firefox", "jetpack", "memory", "mozilla", "performance", "posts"]
eleventyExcludeFromCollections: ["posts"]
---
Dormancy 'retires' tabs that have gone unused for a while, freeing up that memory. It then restores the tabs to life when accessed.

While Firefox 9 adds restore-on-demand for users that restore their session by default, many users will never benefit from it. This add-on targets users who don't restore session, but do have long-running instances of Firefox and many tabs. This might land as a core feature in Firefox 9 (https://bugzilla.mozilla.org/show_bug.cgi?id=675539).

NOTE: This is highly experimental, has only been tested on the Nightly builds, and probably will destroy your session. You've been warned.

Tabs are considered inactive when they haven't been selected in longer than 5 minutes. To change that, set this pref to a value in milliseconds:

* extensions.dormancy.TabDormancyAgeMs

Tabs are checked for inactivity every 5 minutes. To change this, set this pref to a value in milliseconds:

* extensions.dormancy.TabCheckIntervalMs

Known bugs:

*   Awesomebar entry for dormant tabs shows data URI
*   Sometimes dormant tabs have no title and no favicon
EXPERIMENTAL. MAY EAT YOUR SESSION OR DO OTHER BAD THINGS.

[INSTALL](http://j.mp/oW3xQN)

[Source code](http://j.mp/n82njh)