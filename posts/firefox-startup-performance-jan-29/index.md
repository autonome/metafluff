---
layout: post
title: "Firefox Startup Performance - January 29"
published_at: 2010-01-30
date: 2010-01-30
tags: ["firefox","firefox","mozilla","mozilla","Performance","startup"]
---

No big changes from last week, so I'm not going to knock you over the head with the big table, but here are some notes on the progress of some of the projects and areas of research:

*   Joel has patch in Ted's review queue for the static build changes. He's also working on getting Windows builds un-broken, with help from Ben Smedberg and Brad Lassey.
*   Rob Campbell enabled PGO on the Mac, and found no detectable difference in performance. I built PGO on Linux, and found the same. It could be that there's no improvement to be had. It could be that our profile-generation approach doesn't target the codepaths that our performance tests measure. Not sure yet!
*   I talked with Rob Stong about the fast-startup component, and he brought up a bunch of problems with enabling it in multi-user environments. I'm pretty convinced that there's no way we can ship with it enabled. And I'm still convinced that it should be exposed as an option to users. I did get it actually working on Windows 7, and as expected, first startup post boot was 60% faster. The scary part is that it took 40% of startup to do the rest...
*   I researched code locality options for Linux, and haven't yet found a way to specify a function order like you're able to on Darwin. Joel's been spending some time looking into this on Mac, but gprof is broken on Snow Leopard - instrumented builds just hang. Boo.
*   Joel talked with some Apple developers on the Darwin list and got some more information about compressing with HFS+. They thought it was pretty hacky, recommended improving code locality instead (See previous comment about gprof being broken. *sigh*). Compressing locally does break our code-signed builds, so might not be feasible anyways. Next is to look into compressing on the release side.