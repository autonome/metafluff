---
layout: post
title: Building Add-ons with Jetpack, Flightdeck and... Vim.
published_at: 2010-12-06
date: 2010-12-06
tags: Add-on Development Add-ons extensions firefox firefox jetpack mozilla
---

AddonEditor is an add-on for Firefox that allows you to use an external editor when building add-ons with the Add-ons Builder (aka Flightdeck). Yeah, say that 10 times fast.

While Skywriter (aka Bespin) is nice, it's just not [insert your favorite editor here]. So I stole the code from the [Ubiquity project for loading an external app as editor](http://bit.ly/gZQIiP), and converted it to a CommonJS module for Jetpack (which I've listed on the [Jetpack Modules page](http://mzl.la/aDar20)). I built an add-on using Jetpack's page-mod module to add buttons to the Add-on Builder for loading a file in an external editor:

[![](http://autonome.files.wordpress.com/2010/12/addon-editor.png "addon-editor")](addon-editor.png)

When you click the button the first time, you're prompted with a file-open dialog. Select the editor application of your choice, and the file will open in it. From then on, your chosen editor will automatically load files when you click the button. To clear your choice, choose the other button.

[Install AddonEditor](http://bit.ly/eDVYEo). Requires Firefox 4 Beta 7 or newer.

[Clone and make your own, based on AddonEditor.](http://bit.ly/idHrqa) I built it using  Jetpack 0.10, which isn't released yet. However, I don't think it takes advantage of anything new, so it might be test-able from the Builder. But the Builder is giving errors when I hit the "test" button (which I've reported to Zalun), so I can't tell for sure yet.

BEWARE:

*   I've only tested on Linux. Let me know in the comments if it works or doesn't for you.
*   Terminal apps not liked, apparently: /usr/bin/vim hangs Firefox completely. /usr/bin/gvim works fine.
*   The UI augmentation to Flightdeck probably made Zalun puke. It should probably just be an option in the context menu or something. Except that you'd never find it. Ideas?