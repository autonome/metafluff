---
layout: post
title: "Transforming OPML into XUL"
published_at: 2006-03-08
date: 2006-03-08
tags: ["mozilla","opml","Outliners","XSLT"]
---

I was trying to learn more about the [XUL tree widget](http://xulplanet.com/references/elemref/ref_tree.html) this evening, and wrote up a quick XSLT for transforming [OPML](http://en.wikipedia.org/wiki/OPML) into a XUL Tree:

*   [The OPML](http://dietrich.ganx4.com/xul/feeds.opml)
*   [The XSLT](http://dietrich.ganx4.com/xul/opml2xultree.xsl)
*   [The output](http://dietrich.ganx4.com/xul/feeds.xml)

Mmmm, a [XULRunner](http://developer.mozilla.org/en/docs/XULRunner) stand-alone outliner... wah, we [don't have editable trees](https://bugzilla.mozilla.org/show_bug.cgi?id=218642) in Mozilla yet :(