---
layout: post
title: Firefox OS: Devices and Dark Matter
published_at: 2013-01-15
date: 2013-01-15
tags: Boot2Gecko firefox firefox os Firefox OS mozilla mozilla
---

UPDATE: Scroll down for update on May 26, 2013.

Since beginning work on the Firefox OS project, the number one question I'm asked is "Does it run on my phone?". Sadly, the answer for almost everyone is "no". The question itself is interesting though, and shows how people - even geeky technical people - don't have a good understanding of how mobile devices work, nor the whole business and technical ecosystem that brings these things into the hands of consumers (hm, maybe that'll be my next blog post). Porting an operating system to a device is tricky work in the best of circumstances and when done without the direct assistance of the various business entities involved in the stack for any single device (OEM, chipset manufacturer, original OS vendor), involves a lot of, well, fiddling around. The kind of fiddling around that voids warranties and turns $600 hardware into a paperweight. The success and hackability of Android simplified things a lot, creating a relatively large community of people doing OS-to-device porting, and enabling a lot of what allowed Firefox OS to bootstrap so quickly. However, it's still not easy.

I was curious about who is playing around with Firefox OS in the dark corners of the Mos Eisley of the device-porting porting world,the [XDA-Developers forums.](http://forum.xda-developers.com "XDA-Developers Forums") Below, I've listed a number of threads involving efforts to port Firefox OS to various devices. Some have builds, some are aborted attempts, but the totality shows the level of interest in putting a truly open Web operating system on low-powered commodity mobile hardware that is very exciting.

Oh, and if you're interested in porting Firefox OS to your device, the basic instructions to get started are on the [MDN B2G Porting Guide](https://developer.mozilla.org/en-US/docs/Mozilla/Boot_to_Gecko/Porting). If you scan any of the threads below or have ever tried doing this kind of work before, you already know: Thar be dragons. You could lose your device and your sanity, and will very likely void the warranty. Consider yourself warned.

*   [Samsung Epic 4G Touch, Samsung d710](http://forum.xda-developers.com/showthread.php?t=1787010) (and [some code on Github)](https://github.com/EpicB2G)
*   [HTC Wildfire S](http://forum.xda-developers.com/showthread.php?t=1879508)
*   [HTC Sensation](http://forum.xda-developers.com/showthread.php?t=1921033&page=3) - Some talk of debugging the porting process, and links to other ports such as Razr, Ascend g300.
*   [Samsung Galaxy Gio](http://forum.xda-developers.com/showthread.php?t=1827571)
*   [HTC Jewel (EVO + LTE)](http://forum.xda-developers.com/showthread.php?t=2067196)
*   [Samsung Galaxy Nexus](http://forum.xda-developers.com/showthread.php?t=1805282)
*   [LG Optimus 2X](http://forum.xda-developers.com/showthread.php?t=2058315)
*   Samsung Nexus S & Nexus S 4G - [thread 1](http://forum.xda-developers.com/showthread.php?t=1924367), [thread 2](http://forum.xda-developers.com/showthread.php?t=1814302)
*   [HTC Dream/G1](http://forum.xda-developers.com/showthread.php?t=1796960) (old skool!)
*   [Samsung Galaxy S III](http://forum.xda-developers.com/showthread.php?t=1920984)
There are also some efforts at porting to other types of devices, such as [Oleg Romashin's experiments with Firefox on Raspberry Pi](http://www.raspberrypi.org/archives/1787), [MDN instructions for building for Pandaboard](https://developer.mozilla.org/en-US/docs/Mozilla/Firefox_OS/Pandaboard), and [a bug for some core changes to Firefox OS to ease porting to basic Linux systems](https://bugzilla.mozilla.org/show_bug.cgi?id=731498) like Beagleboard and Chromebox.

&nbsp;

UPDATE May 26, 2013

New devices since this was originally posted, and some fantastic updates:

*   Raspberry Pi! Philipp Wagner, a student from Germany, updated Oleg Romashkin's porting work, and wrote the [Raspberry Pi for Firefox OS guide](http://j.mp/Z9hXN4), where you can download builds and read instructions for building it yourself. I installed his build and was up and running on my Raspberry Pi in minutes. Check out [his blog post](http://j.mp/13mFMz8), and buy him something from his [Amazon wishlist](http://j.mp/12Xy40R) :)
*   As I'm sure you've heard by now, [Geeksphone](http://j.mp/16YYuDM) has two devices available with Firefox OS pre-installed now available for purchase. The devices keep selling out FAST, so keep a watch on their [Twitter account](https://twitter.com/geeksphone). Also, according to their forums they're going to make nightly updates available over-the-air soon, so you can stay on the latest versions of Firefox OS.
*   At this year's Mobile World Congress, [Sony released ROMs for the Experia E](http://j.mp/13UpQYo).
*   The XDA-Developers blog reported on a [Firefox OS port for the HTC HD2.](http://j.mp/12b5lJt)
*   Also on the XDA-Developers blog was a [port for the HTC Explorer (aka Pico)](http://j.mp/14UMNu3).
*   You can find build instructions for running [Firefox OS on Pandaboard](http://j.mp/159Lh71) up on the Mozilla Developer Network.
A couple of other notes:

*   XDA-Developers now has a [Firefox OS forum](http://j.mp/16jzcRk), where there are lots of threads on the porting process, individual devices, and app development.
*   All XDA-Developers [blog posts tagged Firefox OS](http://www.xda-developers.com/tag/firefox-os/).