---
layout: post
title: Peek: Apps, App Tabs, and Context.
published_at: 2011-08-20
date: 2011-08-20
tags: firefox firefox jetpack mozilla mozilla
---

The new app tab feature in Firefox is great. I use it a lot... which has starkly illustrated how apps and tabs have very different use-cases and usage patterns. Often I will check my Gmail app tab because I see the glowing notification that a new email has arrived, do something (or nothing), and then pop back to where I was browsing... in one of those 78 tabs I have open?!
The windowing model in operating systems allows me switch back and forth between contexts with ease. But app tabs do not:

*   If I'm using my Gmail app tab and I didn't open any links while there, I can still see the last tab I was at, and click on it. But I have to use the mouse if I want to get directly back there.
*   Out of sheer muscle memory and mouse-averseness, sometimes I can traverse tabs via the next/previous-tab keyboard shortcuts to get back to where I was. Sometimes it's a *lot* of tabs, so either I'll hold the arrow key down, speeding past the tab I wanted (and back and forth a few times), or I'll just hit the arrow key a bunch of times in quick succession. Both options are frustrating, slow and RSI-inducing.
*   Or I could expend mental energy to search in the awesomebar and switch to that tab, which often looks like this: "hm, type 'bug' and then try to remember some words in the bug summary, but those words match a bunch of other bugs, and i don't know the bug number, and also I'm on an attachment page because I'm reviewing a patch on the bug, so the summary won't be in the page title..." and on and on. Now add the fact that switch-to-tab rarely even shows up in the awesomebar for me, and well, a generally high level of fail with this option.
Then there's link opening:

*   Links opened in app tabs are put at the beginning of your tabs, and the tab strip is animatedly scrolled there. Boom, instantly lost where I was before checking my email.
*   We tried an experiment where they open at the end of the set of open tabs. I found that to have serious "out of sight, out of mind" problems. That experiment was rolled back. And it doesn't necessarily solve the context problem anyway.
*   Both approaches cause excess amounts of whizzing animations, either when you want to "go around the horn" to get to the tabs you just opened from app tabs, or when you want to go to them and then get back to where you were.
*   There's no right answer! Sometimes I see a link to a recipe in my Seesmic app tab that I'd like to open in that series of tabs related to food that I have open somewhere in the middle of my open tabs. The user is not in control of *where* these links are opened. I can't choose whether to open them at the beginning or end of the tab strip, or in a new tab group, or new window, etc. Part of me thinks that I actually might work best in a world where each app tab is bound to a single tab group, so that tab growth is bound to the source... but that's a vision for another day (and blog post and add-on).
So I've made Peek, an add-on that's a hybrid solution: Instead of making you go to your app tabs, your app tabs will come to you. Peek allows you to open your app tabs in a floating panel that opens on top of wherever you are in your tabs. Links open to the right of whatever your current active tab is, and in the background, so that when you're finished peeking, you are exactly where you left off.

To use Peek, first create some app tabs. Then you can peek at them using the keyboard shortcut ALT+SHIFT+1-9 where the number corresponds with the order your app tabs are in. To stop peeking, hit escape (or switch apps or anything else that takes focus away from the panel).

[INSTALL](https://addons.mozilla.org/en-US/firefox/addon/peek/). Peek is a Jetpack add-on that does not require a restart of the browser. User beware: This is an experimental add-on - I've been using it on Nightly builds, but haven't done much testing elsewhere.

Benefits:

*   Interact with your apps, and when you're done, be exactly where you left off browsing.
*   Links are opened in the context of wherever you're peeking.
[![](http://autonome.files.wordpress.com/2011/08/screen-shot-2011-08-19-at-1-46-45-pm.png "Screen shot 2011-08-19 at 1.46.45 PM")](screen-shot-2011-08-19-at-1-46-45-pm.png)