---
layout: post
title: "Jetpacking: The 0.3 SDK and a peek at what's coming next."
published_at: 2010-05-01
date: 2010-05-01
tags: firefox firefox jetpack mozilla mozilla
---

I've been working on the Jetpack project for about a month now - implementing features, fixing bugs, and generally helping move things forward as we build out the wide set of capabilities needed to enable an *awesome* future for Firefox add-on development.

The Jetpack team [released the 0.3 version of the SDK](http://mozillalabs.com/jetpack/2010/04/29/announcing-jetpack-sdk-0-3/) yesterday, which has a bunch of platform improvements, and also the [context menu API](https://jetpack.mozillalabs.com/sdk/0.3/docs/#module/jetpack-core/context-menu) - the first UI feature to ship in the SDK. The [SDK documentation has an example](https://jetpack.mozillalabs.com/sdk/0.3/docs/#guide/programs) of using this feature that shows 1) how easy it is to build UI features with Jetpack, but also 2) shows how add-on development process has *changed* with the SDK. For example, all of the manual packaging steps are *gone*. That's right. No more crazy directory structures, no more RDF files, no more GUIDs. All of that stuff is gone, replaced with a couple of simple commands. It's not perfect yet, but expect it to get even easier to both package and deploy add-ons as we build out the SDK further.

So what's next? The 0.4 release is where the feature set of the SDK really starts to blow up:

*   [Panels](https://wiki.mozilla.org/Labs/Jetpack/Reboot/JEP/103): Floating rich content, tooltips, contextual UI.
*   [Private Browsing](https://wiki.mozilla.org/Labs/Jetpack/Reboot/JEP/116): Making it easy for add-ons to respect your privacy.
*   [Selection](https://wiki.mozilla.org/Labs/Jetpack/Reboot/JEP/111): Remember how awesome it was having an intuitive selection API in Ubiquity?
*   [Localization](https://wiki.mozilla.org/Labs/Jetpack/Reboot/JEP/113): Simple access and distribution of locale data.
*   [Page Worker](https://wiki.mozilla.org/Labs/Jetpack/Reboot/JEP/108): Like a [Web Worker](https://developer.mozilla.org/En/Using_web_workers), but with more privileges and a DOM.
*   [Simple Storage](https://wiki.mozilla.org/Labs/Jetpack/Reboot/JEP/104): Persistent object store - like DOMStorage for add-ons.
*   [Places](https://wiki.mozilla.org/Labs/Jetpack/Reboot/JEP/114): Improved bookmarks and history searching and browsing.
*   [Widgets](https://wiki.mozilla.org/Labs/Jetpack/Reboot/JEP/102): A preview of the ideas [Daniel](http://mozillalabs.com/jetpack/2010/04/08/the-single-ui-element/) and [Boriss](http://jboriss.wordpress.com/2010/04/29/removing-firefoxs-status-bar-and-rehousing-add-on-icons-part-1-of-2/) have recently blogged about.
*   [Request](https://wiki.mozilla.org/Labs/Jetpack/Reboot/JEP/109): Even easier AJAX (Please don't make that into an acronym. Please.)
*   Installable without needing to restart Firefox (trunk builds only).
*   Documentation: More and better!
And it's not just about the feature set: The diligent focus of the Jetpack core team on developer ergonomics, and the experience gained from the Jetpack prototype and projects like Ubiquity, is resulting in a set of APIs that are far more intuitive and easy to use than the current XPCOM-riddled minefield that add-on developers have to deal with today.

If you have questions or suggestions, let me know in the comments, or join us on [Jetpack developer forum](http://groups.google.com/group/mozilla-labs-jetpack).