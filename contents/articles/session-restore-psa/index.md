---
layout: post
title: Session Restore PSA
published_at: 2008-01-10
date: 2008-01-10
tags: firefox mozilla
---

Thanks to efforts of many people in the Mozilla community, combined with tools like [DTrace](http://en.wikipedia.org/wiki/DTrace), we seem to be awash in performance data and awareness these days. And in the wonderment of this new visiblity, [Rob Sayre](http://blog.mozilla.com/rob-sayre/) and [Brendan Gregg](http://blogs.sun.com/brendan/) noticed that [Session Restore](http://wiki.mozilla.org/Session_Restore) was responsible for a significant portion of [page-load](http://wiki.mozilla.org/Performance:Tinderbox_Tests#Tp.2C_Tp2_and_the_Pageloader_extension:_Page_load_time) time! (/me takes an anxious bow, and dodges the tomatoes)

There are a couple of opportunities for improvement, chronicled [here](https://bugzilla.mozilla.org/show_bug.cgi?id=398807). The first approach we're trying out is to save and restore less back-history for each tab. Easy to implement, but it wasn't the first choice since it decreased the utility of the feature... or so we thought, until [Alex Polvi](http://blog.mozilla.com/metrics) [provided some data](https://bugzilla.mozilla.org/show_bug.cgi?id=398807#c45) indicating that users very rarely go back further than 6 steps.

The change that landed today will reduce saving of back-history to 10 pages, from a default of 50. You can set the browser.sessionstore.max_tab_back_history pref to -1 if you want all tab history restored.

Comment on the bug if you're one of the <1% who go back beyond 10, and are truly disgruntled about this change. Or better yet, fix my patch to cache tab history :)