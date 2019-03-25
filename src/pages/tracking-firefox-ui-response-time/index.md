---
layout: post
title: "Tracking Firefox UI Response Time"
published_at: 2011-02-22
date: 2011-02-22
tags: firefox firefox jetpack mozilla mozilla Performance
---

I wrote an add-on for Firefox 4 that tracks how long various parts of the browser's user-interface take to load. It does not require a restart of the browser.

[Click here to install.](http://people.mozilla.com/~dietrich/aboutresponse.xpi)

*   It measures the duration between 'popupshowing' and 'popupshown' events. This covers menus, menu-like things, and those floating panels you're starting to see everywhere.
*   You can see your results at [about:response](response). There won't be anything there if you just installed the add-on. Browse around for a few days and then check it out.
*   It doesn't track popups without an id yet. It could also be nicer by showing the containing menu name if available.
*   I'd like to add window load times. What else in the front-end could we be measuring? I was thinking about <command> execution, but there's not a way to do that without modifying the core, afaict.
*   Perhaps we could add a button for users to submit their anonymized data somewhere.
Try it out, let me know if you have any problems. The [source code](https://github.com/autonome/about-response) is available on Github.

[![about-response-screenshot](http://autonome.files.wordpress.com/2011/02/about-response-screenshot.png "about-response-screenshot")](about-response-screenshot.png)