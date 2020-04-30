---
layout: post
title: "Visualizing web page memory use in Firefox"
published_at: 2011-09-10
date: 2011-09-10
tags: firefox firefox jetpack mozilla mozilla Performance
---

I remixed about:memory using [D3](http://mbostock.github.com/d3/) to make a treemap visualization of how loaded URLs are using memory in Firefox.

Load it by clicking the widget on the add-on bar, or Cmd/Ctrl+Shift+Y

This visualization focuses on which web pages are using large amounts of memory - this is not a complete accounting of all memory being used. This doesn't yet show how much is being used by some of the Firefox internals.

Add-on installation does not require a restart. Only tested on Nightly builds.

[Install](https://addons.mozilla.org/en-US/firefox/addon/aboutmemory-treemap-visuali/)

[Source code](https://github.com/autonome/Memtreemap)

[![](http://autonome.files.wordpress.com/2011/09/memtreemap.png "memtreemap.png")](memtreemap.png)