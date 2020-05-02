---
layout: post
title: "Foxylicious 0.7"
published_at: 2006-10-27
date: 2006-10-27
tags: ["firefox","foxylicious"]
---

I updated [Foxylicious](http://dietrich.ganx4.com/foxylicious) for [Firefox 2](http://www.mozilla.com/firefox/). It's home at [AMO](https://addons.mozilla.org/firefox/342/) is not yet updated, as it's still awaiting approval. For those who can't wait, I've made it available here.

*   Updated to work with Firefox 2
*   Uses the new secure del.icio.us API endpoint (fixes the auth prompt issue)
*   Fixed some pref handling errors
*   Added configurable post URLs. To load a different posting page, set the foxylicious.postURL to a URL that has %user%, %location% and %title%, for example, the default is: http://del.icio.us/%user%?v=2&noui=yes&jump=close&url=%location%&title=%title
*   Properly localize-able

[INSTALL Foxylicious 0.7](http://dietrich.ganx4.com/foxylicious/foxylicious.xpi)

Please let me know if you have any problems, regressions, etc.

XOXO,

-d