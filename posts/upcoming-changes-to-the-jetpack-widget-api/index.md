---
layout: post
title: "Upcoming changes to the Jetpack Widget API"
published_at: 2010-11-23
date: 2010-11-23
tags: ["firefox","firefox","JavaScript","jetpack","mozilla","mozilla"]
---

Between [bug 612169](https://bugzilla.mozilla.org/show_bug.cgi?id=612169) and [bug 569479](https://bugzilla.mozilla.org/show_bug.cgi?id=569479), the widget API has undergone a major transformation in the upcoming [0.10 SDK release](https://wiki.mozilla.org/Labs/Jetpack/SDK/0.10).

Both sets of changes have made the API more compact, reducing the amount of code required to build widgets. The Electrolysis (e10s) changes are in preparation for moving Jetpack code out of the main Firefox process. They also make the widget API significantly more powerful, combining the current widget functionality with content scripts.

The e10s changes have affected the API to a significant degree; your widgets will certainly require more than just cosmetic changes.  I was worried at first that the e10s changes would complicate things, causing more verbose code patterns, and tricky message sequences to wire things together. However, the opposite was true: The documentation examples and the automated test code were both *more compact* and *simpler* after I'd rewritten them to use the new API.

Here's an example widget that shows the Facebook profile pic of the most recent friend in your news feed:
<pre>require("widget").Widget({
  label: "Latest Friend",
  contentURL: "https://www.facebook.com/home.php",
  contentScript: "document.location = document.querySelector('.profilePic').src;",
  contentScriptWhen: "ready",
  onClick: function() require("tabs").tabs.active.location = this.contentURL
});</pre>
Hmmm, with the page-worker module, querySelectorAll and some hot timer action, you could have a Rockmelt-y bar...

A summary of the API changes:

*   You no longer need to explicitly add and remove widgets.
*   Constructing a widget immediately adds it to the add-on bar. To remove a widget, call its destroy() method.
*   The image property has been removed. Instead use the contentURL property, which can be used with image URLs, or local or remote content URLs. The content property is still present, used for HTML fragments or plain text.
*   The API now exposes the page-mod API set - meaning that you can attach a content script either inline via contentScript, or a separate file via contentScriptURL, and specify whether it runs at load or when the DOM is ready via contentScriptWhen.
*   The onLoad and onReady event listeners have been removed in favor of content scripts, where you can listen for those events, and post messages back to your Jetpack code. The examples in the docs show how easy this is.
For more details, check out the [updated widget API documentation](https://github.com/mozilla/addon-sdk/blob/master/packages/addon-kit/docs/widget.md).