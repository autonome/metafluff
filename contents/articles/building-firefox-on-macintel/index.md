---
layout: post
title: Building Firefox on MacIntel
published_at: 2006-03-08
date: 2006-03-08
tags: mozilla
---

I got Firefox building on my [Macbook](http://flickr.com/photos/autonome/106192491/)! The [build instructions](http://developer.mozilla.org/en/docs/Mac_OS_X_Universal_Binaries) on MDC were pretty good, and got me through most of the process. However, there were a few iffy spots. Here are some problems I had, and how I resolved them. Note that this mission was not entirely successful: I wasn't able to build a universal binary, only an Intel build. I was headed down the rabbit hole trying to track down the PPC errors, and didn't really need it, so gave up (for now!).

Now that I'm writing this, I wish I'd saved the error messages that I got along the way :P Oh well, here's what I have, FWIW:

*   XCode Doesn't install the 10.2.8 SDK: The default Universal build options are to build PPC using the 10.2.8 SDK. XCode 2.2.2 does not install this by default. You can find it in the XCode disk image at /Packages/MacOSX10.2.8.pkg.
*   GCC Errors: Open a command prompt and just type "gcc". I got some odd errors about not being able to find a bunch of libraries. I tried again with sudo, and it worked. There's obviously some permissions wonkiness going on, but I didn't have time to track it down, so just stuck with sudo-ing it.
*   LibIDL/Libglib: I had to jump through a couple of hoops to get these installed properly. I couldn't get Fink to compile, so went with DarwinPorts, which worked ok for the most part.

    *   Download and compile DarwinPorts from source: [link](http://darwinports.opendarwin.org/getdp/).
    *   Install LibIDL: This will install libglib as well. The port recommended by the build documentation is libidl1. However, I got all kinds of errors when trying to install this port from source. I used libidl, which worked fine: sudo port install libidl
*   Remove Fink Residue: I migrated from a powerbook which had Fink installed. I has an init script which sets up include dirs and such. This was causing old non-Intel libraries to be included. The source of the problem was a line it added to ~/.bash_profile. Removed this line: test -r /sw/bin/init.sh && . /sw/bin/init.sh
*   Disable PPC Build: As I mentioned, I was not able to get the PPC build working. You can disable building PPC by adding this line to your .mozconfig: mk_add_options MOZ_BUILD_PROJECTS="i386"

Thanks to [#camino](irc://irc.mozilla.org#camino) for help figuring this out.