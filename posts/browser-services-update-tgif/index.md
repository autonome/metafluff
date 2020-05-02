---
layout: post
title: "Browser Services Update (TGIF)"
published_at: 2012-03-03
date: 2012-03-03
tags: ["firefox","firefox","mozilla","mozilla"]
---

My team is "a riddle, wrapped in a mystery, inside an enigma". Ok, maybe not *that* mysterious, but we're definitely involved in a variety of projects. Here's a roll-up of a week in browser-land.

**Performance**

*   Tim landed a patch that [adds reporting of leaked windows and documents to our unit test runs](https://bugzilla.mozilla.org/show_bug.cgi?id=683953). Dao's work has shown that these often reflect leaks in the platform not just the test, so it's very valuable to know about them. The next step is to track the leak numbers between runs and report regressions by making the tree color change somehow. Tim also [blogged about this](http://timtaubert.de/2012/02/fighting-docshell-and-domwindow-leaks/).
*   Neil has a patch up for adding telemetry that measures [how long it takes to open a browser window](https://bugzilla.mozilla.org/show_bug.cgi?id=710431).
*   Mano continued his work on the [Safari migrator](https://bugzilla.mozilla.org/show_bug.cgi?id=710259), which includes various cross-migrator improvements. This work is part of a broader rewrite of the migrators to use Places async APIs, for improved responsiveness.
*   Marco landed [a major rewrite of Livemarks](https://bugzilla.mozilla.org/show_bug.cgi?id=613588), converting them to load content on-demand and asynchronously, reducing synchronous IO on the main thread.
*   Paolo continued his work on [rewriting favicon API consumers](https://bugzilla.mozilla.org/show_bug.cgi?id=713642) to use the new asynchronous API.
*   Drew has completed the [conversion of the content preferences service to use async mozStorage statements](https://bugzilla.mozilla.org/show_bug.cgi?id=699859), and is in the process of updating the various JS and C++ consumers to use the new API.
*   I talked a bit with Mark Cote about [Peptest](https://wiki.mozilla.org/Auto-tools/Projects/peptest), a new framework for testing browser responsiveness. Peptest is currently available on the tryserver, but results are highly variable, so there's more work to do before it can be turned on for all check-ins. Once Peptest is ready to use, we'll evangelize the crap out of it.
*   I continued working on breaking apart the session restore service into more manageable pieces ([XPath generator](https://bugzilla.mozilla.org/show_bug.cgi?id=726235), [tab state](https://bugzilla.mozilla.org/show_bug.cgi?id=708488), [form data](https://bugzilla.mozilla.org/show_bug.cgi?id=697903)).
*   I put up a WIP patch for [reading the session file asynchronously](https://bugzilla.mozilla.org/show_bug.cgi?id=532150) during startup.
*   I started working on measuring how much time is taken up by [creating about:blank browsers when restoring sessions on demand](https://bugzilla.mozilla.org/show_bug.cgi?id=715612).
**New Tab Page**

*   Tim worked on Stephen Horlander's [redesign of the new-tab page](http://people.mozilla.com/~shorlander/files/new-tab-prototype-i03/new-tab-prototype-i03.html), and also fixed some bugs.
**New Download Manager**

*   Paolo [consolidated existing patches](https://bugzilla.mozilla.org/show_bug.cgi?id=726444) into a single one for final pass and check-in. Marco has been reviewing.
*   Paolo and Marco are getting together in [Novara](http://maps.google.com/maps?oe=utf-8&rls=org.mozilla:en-US:unofficial&client=firefox-nightly&q=novara+italy&um=1&ie=UTF-8&hq=&hnear=0x47865a1ed73beaff:0x405e67d473ca090,Novara,+Italy&gl=us&ei=K19RT9rkGKaoiQLF_Py0Bg&sa=X&oi=geocode_result&ct=image&resnum=2&ved=0CEgQ8gEwAQ) on Saturday to sprint on fixing theme bugs and other cleanup required for landing.
**Add-on SDK Integration**

*   Met with Irakli to create plan for landing the core SDK modules in Firefox so that the whole SDK would no longer need to be bundled with every add-on.
*   Created [a feature page](https://wiki.mozilla.org/Add-on_SDK_in_Firefox) for tracking the project.
*   I talked with Brian Warner about syncing Git repos with HG repos.
**Web Apps Integration**

*   I updated [the feature page](https://wiki.mozilla.org/Web_Apps_integration) with latest from UX, Apps and PM.
*   Felipe Gomes is driving the Firefox side of the integration work, with Tim helping out on UI. They're working together with Fabrice, Myk, Dan and Tim A.
**Identity Integration**

*   David has the [window.crypto.getRandomValues patch](https://bugzilla.mozilla.org/show_bug.cgi?id=440046) up for final review and superreview.
*   David put up an initial patch for the [navigator.id API for Web content](https://bugzilla.mozilla.org/show_bug.cgi?id=665057).
*   David gets to play with NSS+DOM+XPCOM to get [DOMCrypt's internal API working](https://bugzilla.mozilla.org/show_bug.cgi?id=649154). Lucky guy.
**Share Integration**

*   David is working with Shane Caraveo to get the [new Share add-on reviewed and landed](https://bugzilla.mozilla.org/show_bug.cgi?id=727126).
**Evangelism/Engagement**

*   Tim and Marco kicked off sponsorship process for [Italy's jsDay conference](http://2012.jsday.it/). They'll be putting up a booth there, along with Paolo Amadini, representing Mozilla. Thanks to Stormy and Shez for the support from Developer Engagement.
Of course, we all worked on various other things as well, from code review to bug triage to random maintenance fixes. Activity logs and whatnot are listed below.

*   David Dahl: [Bugzilla activity log](https://bugzilla.mozilla.org/page.cgi?id=user_activity.html&action=run&who=ddahl@mozilla.com), [status updates](http://benjamin.smedbergs.us/weekly-updates.fcgi/user/ddahl), [blog](http://monocleglobe.wordpress.com/), [Twitter](https://twitter.com/#!/deezthugs)
*   Drew Willcoxon: [Bugzilla activity log](https://bugzilla.mozilla.org/page.cgi?id=user_activity.html&action=run&who=adw@mozilla.com), [status updates](http://benjamin.smedbergs.us/weekly-updates.fcgi/user/drew)
*   Felipe Gomes: [Bugzilla activity log](https://bugzilla.mozilla.org/page.cgi?id=user_activity.html&action=run&who=felipc@gmail.com), [status updates](http://benjamin.smedbergs.us/weekly-updates.fcgi/user/felipe), [blog](http://felipe.wordpress.com/), [Twitter](https://twitter.com/#!/felipc)
*   Asaf Romano: [Bugzilla activity log](https://bugzilla.mozilla.org/page.cgi?id=user_activity.html&action=run&who=mano@mozilla.com)
*   Marco Bonardo: [Bugzilla activity log](https://bugzilla.mozilla.org/page.cgi?id=user_activity.html&action=run&who=mak77@bonardo.net), [status updates](http://benjamin.smedbergs.us/weekly-updates.fcgi/user/mak), [blog](http://blog.bonardo.net/), [Twitter](https://twitter.com/#!/mak77)
*   Neil Deakin: [Bugzilla activity log](https://bugzilla.mozilla.org/page.cgi?id=user_activity.html&action=run&who=enndeakin@gmail.com), [status updates](http://benjamin.smedbergs.us/weekly-updates.fcgi/user/Enn), [blog](https://enndeakin.wordpress.com/)
*   Paolo Amadini: [Bugzilla activity log](https://bugzilla.mozilla.org/page.cgi?id=user_activity.html&action=run&who=paolo.mozmail@amadzone.org)
*   Tim Taubert: [Bugzilla activity log](https://bugzilla.mozilla.org/page.cgi?id=user_activity.html&action=run&who=ttaubert@mozilla.com), [status updates](http://benjamin.smedbergs.us/weekly-updates.fcgi/user/ttaubert), [blog](http://timtaubert.de), [Twitter](https://twitter.com/#!/ttaubert)
*   Dietrich Ayala: [Bugzilla activity log](https://bugzilla.mozilla.org/page.cgi?id=user_activity.html&action=run&who=dietrich@mozilla.com), [status updates](http://benjamin.smedbergs.us/weekly-updates.fcgi/user/dietrich), [blog](http://autonome.wordpress.com), [Twitter](https://twitter.com/#!/dietrich)