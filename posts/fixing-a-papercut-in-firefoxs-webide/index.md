---
layout: post
title: "Fixing a papercut in Firefoxs WebIDE"
published_at: 2016-02-23
date: 2016-02-23
---

Web IDE has gone though some twists and turns as a feature in Firefox, but one thing has remained constant for me: When I launch an app, I *always* want to debug it. Having to repeatedly wait and hit the wrench button has always bothered me. During a development session I may do this hundreds of times.

So I wrote a small Firefox add-on that changes the functionality of the "play" button in Web IDE to also open the Developer Tools once the app has launched.

Warning: It's not pretty. There's probably a better way to do it. Take a look at [the source here](https://github.com/autonome/webide-autodebug) and let me know if you have ideas.

[INSTALL](https://addons.mozilla.org/en-US/firefox/addon/webide-auto-debug/)

A couple of other things I want to add:

*   First force-stop app when you hit Play. Currently the new app source doesn't get reloaded because the old app instance is running, which is wrong and maddening.
*   Always show dev tools. The way the pop in and out is very heavy feeling. Just keep them open all the time.