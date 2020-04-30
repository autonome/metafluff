---
layout: post
title: "Firefox Performance: The "don't touch the damn disk" edition."
published_at: 2009-08-18
date: 2009-08-18
tags: firefox firefox mozilla mozilla Performance startup
---

I mentioned in previous blog posts that the clearest message that has come out of the Firefox startup performance research is that most of the time starting the application is spent loading and reading files from disk. On some platforms, file IO is far more expensive than others - this hurts startup time especially bad on Mac, and on mobile devices. This post highlights some work that [Taras Glek](http://blog.mozilla.com/tglek/ "Blog") has done to reduce file IO in Firefox (and other Mozilla applications) by improving the way we package collections of files and directories into JAR files.

First, he resurrected an [older idea](https://bugzilla.mozilla.org/show_bug.cgi?id=201224), modifying our JAR file reader to [map the contents of JAR files into memory](https://bugzilla.mozilla.org/show_bug.cgi?id=504864) using [mmap](http://en.wikipedia.org/wiki/Mmap). He then [combined a bunch of smaller JAR files](https://bugzilla.mozilla.org/show_bug.cgi?id=468011) into two bigger files: browser.jar and toolkit.jar. These changes provide a few benefits:

*   Our reader was stat'ing the JAR file each time that it read something from inside. The mmap change reduces the system calls necessary to read all the smaller files from inside our JAR files.
*   Fewer JAR files means files are fewer places on disk, and the initial JAR finding, opening and reading system calls happen fewer times.
*   By combining files inside a large JAR, they're placed contiguously on disk, allowing the smaller files inside of the JARs to be found and read much quicker.
The effects of these changes were significant. The landing of the JAR-combining change resulted in some fabulous graphs, shown below, along with comments to highlight the good bits.

[caption id="attachment_387" align="aligncenter" width="540" caption="Tp3 Graphs"][![Tp3 Graphs](http://autonome.files.wordpress.com/2009/08/taras_tp3.png "Tp3 Graphs")](taras_tp3.png)[/caption]

Tp3 is a page loading test - it cycles through 400 pages from the Alexa Top 500 list from 2006, measuring how long it takes to open each page. As you can see on the graph, the time it took to complete the test went down by about 6.5% on Leopard, 9% on Linux, 2.5% on Tiger, 11% on Windows XP, and a clear downward trend on Vista, where the noise level is a bit too high to get a number.

[caption id="attachment_388" align="aligncenter" width="540" caption="Tp4 Graphs"][![Tp4 Graphs](http://autonome.files.wordpress.com/2009/08/taras_tp4.png "Tp4 Graphs")](taras_tp4.png)[/caption]

Tp4 is the successor to Tp3, and cycles through 100 of the Alexa Top 500, from 2009. The time to run the test improved by 3.5% on Leopard, 7.8% on Linux, 2.5% on Tiger, 6% on Windows XP, and again Vista clearly improved, but the noise level is too high to easily figure out by how much.

[caption id="attachment_389" align="aligncenter" width="540" caption="Ts Graphs"][![Ts Graphs](http://autonome.files.wordpress.com/2009/08/taras_ts.png "Ts Graphs")](taras_ts.png)[/caption]

Ts is a basic browser startup test - it measures the average time to start the browser up. There's no clear startup win visible here, except perhaps on Vista. There's maybe even a slight loss on Mac. However, if you look closer, you'll notice that the graphs for Linux and Vista and Windows XP are all much less *noisy*! The absolute wall clock time did not decrease, but the variation in startup time decreased significantly on those platforms. An upside to this is that true performance improvements and regressions on those platforms will be easier to spot.

[caption id="attachment_390" align="aligncenter" width="540" caption="Txul Graphs"][![Txul Graphs](http://autonome.files.wordpress.com/2009/08/taras_txul.png "Txul Graphs")](taras_txul.png)[/caption]

The same effect is seen in the tests measuring how long it takes to open a new XUL window. There's maybe a slight improvement on Windows, and a regression on Tiger, but the level of noise on every platform has decreased, some down near zero variation between runs.

The improvement in page-load time from Taras' changes is quite clear. There's work in progress to [make the JAR IO even more efficient](https://bugzilla.mozilla.org/show_bug.cgi?id=510611), as well as putting [additional](https://bugzilla.mozilla.org/show_bug.cgi?id=509755) [directories](https://bugzilla.mozilla.org/show_bug.cgi?id=508421) of small files into the JAR files. You can follow progress and get even more details on [Taras' blog](http://blog.mozilla.com/tglek/).