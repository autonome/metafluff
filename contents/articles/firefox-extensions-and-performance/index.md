---
layout: post
title: Firefox, Extensions and Performance
published_at: 2010-03-11
date: 2010-03-11
tags: extensions firefox firefox mozilla Performance
---

Extensibility is a double-edged sword. It's a keystone feature in Firefox - differentiating even now that just about every other browser has some vector for augmentation. However, along with the freedom and power of Firefox extensions comes the ability to slow the browser down. And worse, users and developers have little or no visibility into the causes of poor extension performance.

Not all extensions slow Firefox down. But they can. To prevent that, we need to do three things:

1.  Make it *easy* for extension developers to keep their extensions fast.
2.  Allow users to see the performance effect of their extensions.
3.  Mitigate the effects of badly-behaving extensions in Firefox itself.

### For Extension Developers

First, we need to loudly and clearly educate extension developers, and provide them tools. Some ideas:

*   Write an extension performance "best practices" guide on MDC.
*   Build warnings into Firefox, that highlight code that might perform poorly ([bug 550242](https://bugzilla.mozilla.org/show_bug.cgi?id=550242)).
*   Provide a [try-server](https://wiki.mozilla.org/Build:TryServer) that allows extensions to be uploaded and installed into the test profile.
*   Perform automated performance testing of extensions upload to AMO ([bug 458990](https://bugzilla.mozilla.org/show_bug.cgi?id=458990), maybe?)
*   Ensure that Jetpack generates extensions that are models for good behavior.

### For Users

Users should be able to make informed choices about the extensions they install, and be able to monitor the effect of extensions on their browsing sessions. We could:

*   Provide performance information for extensions on their pages on AMO.
*   Build a performance dashboard similar to [about:memory](https://bugzilla.mozilla.org/show_bug.cgi?id=515354), but tracking startup time, page-load time, and browser UI behavior such as menu responsiveness. Given a visualization of these things over time, users can see the effects of installing different extensions.

### In the Core

There are also things we can do to mitigate poor performance in core Firefox code. This is being discussed in [bug 533038](https://bugzilla.mozilla.org/show_bug.cgi?id=533038).

We're already working on some of the ideas listed above. Ping me in [#startup on irc.mozilla.org](irc://irc.mozilla.org/#startup) if you want to help out. If you have ideas for other ways to improve extension performance, or to communicate back to users and developers, let me know in the comments.