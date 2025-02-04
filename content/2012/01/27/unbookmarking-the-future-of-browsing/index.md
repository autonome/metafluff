---
title: "Unbookmarking the Future of Browsing"
published_at: 2012-01-27
date: 2012-01-27
tags: ["add-ons", "browsing", "firefox", "jetpack", "mozilla", "panorama", "posts"]
---
I am needy:

*   I want to remember URLs. Bookmarking is too manual and akin to throwing URLs in the [sarlacc pit](http://j.mp/wh2cXN). The user-interface pieces around bookmarking have not changed in a decade. No, the awesomebar is not a good tool for this. I don't even come close to being able to recall what I want the awesomebar to recall. I need to be ambiently prompted in a way that is visual and has context.
*   I need to be able to focus on a given task, project or idea. A single sea of tabs doesn't help at all. I want blinders. I want an environment. Task immersion.
*   I need to be able to categorize URLs into groups, such that the whole group is easily accessible. Trees and menus can go to hell, along with the RSI, eye-strain and visual boredom they provide.
*   I need to be able to switch contexts quickly and easily. Eg: From bug triage to perf to dashboards to music, etc.
*   I don't want to leave the browser. Windows are super heavyweight feeling and come along with all kinds of operating system baggage: visual, interaction, performance, etc.
I realized recently that a pattern had emerged in my browser usage that meets a bunch of these needs:

*   I use Firefox's Panorama feature to manage groups of tabs. I have groups for a bunch of work areas, and for Food, Music, Design, JavaScript, Health, and many more. This provides task-specific browser contexts, as well as keyboard shortcuts for switching contexts with ease.
*   I set up Firefox to restore my session every time it starts. This way my groups persist, and all the URLs in each group are loaded with their cookies and other session data ready to go when I need them.
*   I have "Don't load tabs until selected" checked, so that Firefox does all this with as little memory as possible - the web pages in all the tabs in all the groups aren't loaded until I actually use them.
*   I restart the browser a couple of times per day to keep memory use slim, which in turn keeps the browser responsive. Restarting is super fast and responsive because I have "Don't load tabs until selected" (see previous point).
This is the happiest I've been with any browser in years. However, there are still a bunch of pain points. I want SO much more.

*   I want to tag URLs without bookmarking them. The bookmark concept just gets in the way. It's an unnecessary unit of psychological weight. It's a vestigial metaphor of days gone by.
*   I want to open a tab group by typing the name of the group in the URL bar.
*   I want to add URLs to multiple groups easily, similar to tagging. I'd like to do it via the keyboard.
*   I want to send the current tab to a different group (or groups) using only the keyboard.
*   I want app tabs that are specific to a given group, and some that are global.
*   I want to switch quickly from an app tab back to the last non-app tab I was at. Or be able to peek quickly at an app tab without losing my context in the current set of tabs.
*   I want to switch quickly back to the last tab I was at. (Eg: When I open a new tab, and get sent to the end of the current set of tabs). OR be able to have new tabs open immediately to the right of the current tab, with linked parentage.
*   I'm tired of sites being browsers inside a browser. And I don't want "site-specific" browsers - I want a "me-specific" browser, for local or dynamic content.
*   Firefox creates the <tab> elements for hidden tabs when restoring the session. It would re/start even faster and use even less memory if the XUL elements for hidden tabs were not created until the group itself was opened.
*   As I work, memory use increases and responsiveness decreases, since I keep visiting more and more tabs. If I haven't visited a tab in a while, Firefox should unload it. If I haven't visited a group in a while, Firefox should completely unload the whole group, session content *and* XUL elements.
*   A downside of the "Don't load tabs until selected" option is that tab content is not ready and waiting when you select the tab. The web content has to load and the session data for the tab must be restored. Firefox should pre-load tabs that are adjacent to the active tab. This feature, combined with the dormant-izing of tabs described above would result in a decent balance of instant-gratification availability and responsiveness and resource frugality.
One idea I had was a merging of tagging and groups: The groups in Panorama would be comprised of the set of tags that exist. This would result in nice integration bits like search-by-tag in the awesomebar being equivalent to search-in-group. It also might mean that we'll need to make Panorama "bigger" - maybe allow it to be zoomed, or make it an infinite canvas.

An idea for navigating dynamic content is to merge feeds and groups. Imagine you have a BBC group, which has the BBC feed as it's source. The set of "tabs" in that group are the items in the feed. If you open the group, all the URLs in the feed are loaded into tabs (but not *really* loaded if you restore-on-demand).

Anyways, it's interesting to think about how to prototype some of these ideas in an add-on or a collection of them. I'm sure some of the items above already exist as add-ons.

I realize that I'm not a "typical user". However, after almost 6 years of browser-making, I'm pretty damn sure that there is no such person. I do not believe that the one-size-fits-all browser is the future. When adding a feature or fixing a bug, we shouldn't have to choose between grandma and the geeks. In order to stay relevant in a highly-personalized future, we should strive to ensure that Firefox is pliable enough that we who make it are not restricted by it, and more importantly we must ensure that add-on developers are free to mash-up and remix and experiment the f*ck out of it.