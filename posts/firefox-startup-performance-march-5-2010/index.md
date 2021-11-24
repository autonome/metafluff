---
layout: post
title: "Firefox Startup Performance - March 5, 2010"
published_at: 2010-03-06
date: 2010-03-06
tags: ["firefox","firefox","mozilla","mozilla","Performance","startup"]
---

I spent the week on-site at Mozilla HQ in Mountain View, which was great.

*   Talked with Bob Moss and others about expanding our startup tests to cover a [variety of startup scenarios](https://wiki.mozilla.org/Firefox/Projects/StartupPerformance/TestMatrix).
*   Spent some time tracing file IO with the top 10 extensions on AMO installed, comparing it to an empty profile ([empty](http://people.mozilla.com/~dietrich/open.empty.txt), [with extensions](http://people.mozilla.com/~dietrich/open.extensions.txt)) for [a bug Taras filed](https://bugzilla.mozilla.org/show_bug.cgi?id=533038) about extension-caused file IO.
*   I also traced shell calls in the startup path, and found [some weirdness](https://bugzilla.mozilla.org/show_bug.cgi?id=550310), and yeah there are a bunch more calls with the top 10 extensions installed ([empty](http://people.mozilla.com/~dietrich/exec.txt), [with extensions](http://people.mozilla.com/~dietrich/exec.extensions.txt)). Things like this should be "advertised" on extensions' pages on AMO. I'm pretty sure there's already some movement towards Talos testing extensions and posting results on AMO. I'll file a bug for getting things like this watched as well.
*   Taras has been making progress using [Valgrind](http://valgrind.org/) to get the function and data ordering sequence for [improving code locality in our binaries](https://bugzilla.mozilla.org/show_bug.cgi?id=531406).
*   Ryan patched and landed a change to [increase the buffer size used when reading in JSON files](https://bugzilla.mozilla.org/show_bug.cgi?id=549788) (something the search service does during startup).