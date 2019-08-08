---
layout: post
title: "The awesomebar for command-line filesystem traversal... for Windows"
published_at: 2009-10-07
date: 2009-10-07
tags: mozilla
---

Autojump is a command-line utility that "learns" from your filesystem navigation via the "cd" command, and allows you to jump quickly to oft-travelled-to directories. Source, installation and usage information are at [Github](http://github.com/joelthelion/autojump). After seeing [this tweet from Dion](http://twitter.com/dalmaer/statuses/4685018591), I went to install it, only to remember that I'm on Windows 7 now. Bah. So, I tweaked it a bit to run inside the [MozillaBuild](https://developer.mozilla.org/En/Windows_Build_Prerequisites#MozillaBuild) environment. Assuming you've cloned/downloaded Autojump, here are the steps to get it working:

1.  Open Mingw, navigate to the autojump source directory
2.  Remove all instances of "sudo" from the install.sh file
3.  Get your Python path: $ which python
4.  Replace /usr/bin/python with your Python path in the autojump file
5.  Run install.sh