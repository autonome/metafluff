---
layout: post
title: "Mozilla Time Machine"
published_at: 2007-12-08
date: 2007-12-08
tags: mozilla
---

I hooked up [Bonsai's XML API](http://bonsai.mozilla.org/cvsquery.cgi?treeid=default&module=all&branch=HEAD&branchtype=match&dir=&file=&filetype=match&who=&whotype=match&sortby=Date&hours=&date=explicit&mindate=1196474882&maxdate=1197079682&cvsroot=%2Fcvsroot&xml=true) to [Simile's Timeline](http://simile.mit.edu/timeline/), for a nice interactive timeline of check-ins to the Mozilla trunk. It's still kinda rough, but you can view the [timeline here](http://nakedtickler.com/timeline/timeline.html).

TODO:

*   It takes about 5 seconds to load up the data, probably should cache the generated event XML.
*   Hook up the tinderbox JSON feed, overlaying performance numbers.
*   Integrate the wormhole feed, to project what will be checked-in in the future.