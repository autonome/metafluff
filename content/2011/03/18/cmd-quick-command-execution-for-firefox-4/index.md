---
title: "cmd: Quick Command Execution for Firefox 4"
published_at: 2011-03-18
date: 2011-03-18
tags: ["add-ons", "firefox", "jetpack", "mozilla", "posts"]
---
Cmd allows you to quickly execute Firefox's built-in commands via a  small keyboard-activated panel. While many of the browser commands might have  keyboard shortcuts, I often do not remember them. Now I don't have to.  This add-on allows me to just type the first few characters and hit  enter. This add-on does not require a browser restart.

[Install](http://people.mozilla.com/~dietrich/cmd.xpi "Install cmd").

[Source code](https://github.com/autonome/cmd "Source code").

Usage and features:

*   Launch cmd with control+shift+;. In the next release this will be configurable via a preference.
*   Start typing to see matching commands.
*   Hit  the tab key to cycle through multiple matches (shift+tab to cycle  backwards). Example: type "pre" and hit tab a bunch of times.
*   Hit enter to select the current match.
*   Hit escape to hide cmd without selecting a command.
*   The last executed command is shown by default.
The  available commands are based on all existing menu items and registered  keyboard shortcuts that reference <command> elements in the  browser.

What I use it for:

*   Executing commands without having to know their keyboard shortcut.
*   Bookmarking without having to click the star, while having it default to Unsorted Bookmarks.
*   Quickly getting to the About page, to check for nightly updates.
Some commands don't work, like "Subscribe to page". I would really like this command to work. Perhaps in the future I'll add an API for creating new commands. This tool will never compare to the extreme power of visual command tools like Ubiquity. However it's a very lightweight way to access built-in commands without needing to remember their shortcuts, or using the mouse.