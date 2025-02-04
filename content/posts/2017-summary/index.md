---
title: "UTC+5 and Above: My 2017 DevRel Wrap-up"
published_at: 2017-11-13
date: 2017-11-13
tags: ["firefox","mozilla","devrel","asia", "posts"]
---

![kids](kids.png)

I'm on the developer relations team at Mozilla. The "devrel" role has many parts, but generally means communicating to developers about web technologies important to Mozilla and [our mission](https://www.mozilla.org/en-US/mission/), and being an advocate for developers in our product development process.

I spent 2017 on typical developer relations activities - coding, writing, speaking - but entirely in UTC+5 and higher timezones. I'd lived in Asia before, and learned how much *presence* matters in order to learn about a place, and also I wanted to reduce my carbon footprint by not flying back and forth across mega-oceans.

From a "devrel at Mozilla" perspective, I had specific reasons for doing this:

* The [largest internet populations are in Asia](http://www.internetworldstats.com/top20.htm), as well as the largest *offline populations*. We need to be where the users are, and where growth will happen in the future.
* It's estimated that [~90% of the world's electronics are manufactured in Shenzen, China](https://www.inc.com/will-yakowicz/shenzhen-city-of-electronics.html). If we want to make a safer internet, then Shenzhen is a place we *must* be.
* I wanted to learn about how technology decision making is happening - by developers, or otherwise, in as many different communities in Asia as possible.

I'll be publishing a series of briefs on what I learned this year about things like mobile payment patterns and the rise of physical computing, the transient nature of mobile web task workflows, where technical decision making happens, the relationship between the web and messaging apps, cultural and community verticalism, timezone bias, app investor ecosystem, ethical echo-chambers, Chinese maker spaces, a survey of noodle soups across Asia, and more.

But first, here's my 2017 in review.

## Firsts

It was a year with a few firsts:

  * First keynote speaking appearances, three different events, each very different from the other.
  * [First time at #1 on Hacker News](https://news.ycombinator.com/item?id=14823807)
  * First press briefings, in Taipei and Singapore
  * [First modules published on NPM!](https://www.npmjs.com/~dietrich)

## Events

In 2017, I spoke at or facilitated 22 events in 12 different countries.

I specifically chose a diverse set of events, in an effort to learn about communities of technology decision-making outside the typical web developer or open source events. I spoke to high school and university students, designers, developers, open source die-hards, startup founders, entrepreneurs, investors, device manufacturers, academics, and people in various levels and roles in governments.

Some of the speaking happened because I submitted a proposal to conference CFPs, some from events reaching out to Mozilla for a speaker, some because I reached out to the organizer asking to speak, some from just being present and offering to speak, and one because I had a drink with a friend who introduced me to another friend whose dad ran a conference and thought I'd be a good match.

  * [Barcamp Yangon, Yangon, Myanmar, Jan 28-29](http://barcampyangon.org/), "Virtuality Reality on the Web"
  * [Phandeeyar, Yangon, Myanmar, Feb 2](http://phandeeyar.org/preparing-for-the-app-ocalypse-the-web-and-the-age-of-physical-computing/), "Preparing for the App-ocalypse: The Web and the Age of Physical Computing"
  * [Code for Nepal, Kathmandu, Nepal, Mar 4](https://www.facebook.com/events/1905375803079986/), "Preparing for the App-ocalypse"
  * [Digital Nepal, Janakpur, Nepal, Mar 8](https://www.facebook.com/events/1412248025474505/)
  * [FOSSAsia, Singapore, Mar 17-19](https://2017.fossasia.org/schedule.html#s-2866), "Integrated Physical Computing on the Web" ([video](https://engineers.sg/video/integrated-physical-computing-on-the-web-fossasia-2017--1567))
  * [Thailand Startup Summit, Bangkok, Thailand, Mar 31](https://www.eventbrite.com/e/thailand-startup-summit-tss-2017-2nd-edition-tickets-29342367812#) (keynote), "Touching the Future: Merging the Physical and Digital for Creative Experiences on the Web"
  * [Dev Day Danang, Danang, Vietnam, Apr 16](http://devday.org/en/), "Preparing for the App-ocalypse: The Web in the Age of Physical Computing"
  * [ThingsCon Shenzhen, Shenzhen, China, May 17](https://www.thingscon.nl/shenzhen/), "App-ocalypse Now: The Future of User Onboarding in IoT"
  * Tech In Asia Singapore, Singapore, May 17-18
  * CommunicAsia, Singapore, May 23-25
  * [WebConf.asia, Hong Kong, June 3](https://webconf.asia/talks), "Touching the Future: Designing Physical Experiences with the Web"
  * [HKOSCON, Hong Kong, June 9-10](https://hkoscon.org/2017/topics/preparing-for-the-app-ocalypse-the-web-in-the-age-of-physical-computing/) (keynote), "Preparing for the App-ocalypse: The Web in the Age of Physical Computing"
  * [Mozilla Developer Conference, Taipei, Taiwan, Sept 22](https://www.facebook.com/events/276049929466918/), "Designing Physical Experiences: The Web in the Age of Room-Scale Computing"
  * [MDN Roadshow](https://mzl.la/devroadshow), Kuala Lumpur, Malaysia, Sept 23, "Designing Physical Experiences: The Web in the Age of Room-Scale Computing"
  * [MDN Roadshow](https://mzl.la/devroadshow), Penang, Malaysia, Sept 25, "Designing Physical Experiences: The Web in the Age of Room-Scale Computing"
  * [ICMAC](http://www.icmac.asia/), Denpasar, Indonesia, Nov 16-17 (keynote), "(Em)Powering Smart Cities: Designing for Resiliency in the Leapfrog Age"

I also spoke at, designed and ran or facilitated various trainings, workshops and briefings:

  * Speaker training for the Mozilla Taipei university program, Jan 17
  * Facilitator for Common Voice design sprint, Mozilla Taipei, Apr 28-29
  * Spring Firefox press briefing, Taipei, May 19
  * Spring Firefox press briefing, Singapore, May 26
  * Augmented City VR/AR Workshop, VRARA & Intel, Singapore, Jul 15
  * Speaker training for Mozilla dev conf, Mozilla Taipei, Sept 20

## Intent To Ship

Early in 2017 I scratched an itch I'd been having around the "Intent to..." messages on Mozilla's dev.platform mailing list, and Blink's blink-dev mailing list. These "intent" messages are sent when either of these engines is changing their implementation of the web platform. These messages are extremely useful for communication between the browser vendors - which was validated by how quickly the tweets from this account got picked up by key members of Gecko and Blink development teams, being retweeted and favorited regularly.

Now, nine months after starting the account, it has only ~1600 followers, but they are largely influencers in web/browser devrel, or web platform implementors. And the tweets from the account had 375k impressions in the last month, according to Twitter's analytics.

* [@intenttoship on Twitter](http://twitter.com/intenttoship)
* [Bot source code on Github](https://github.com/autonome/intenttoship-bot)
* The bot runs on Glitch.com, with a cron.org keepy-uppy job

Feed-to-tweet is a module I wrote for easily creating Twitter bots driven by feeds 
* [Feed-to-tweet source code on Github](https://github.com/autonome/feed-to-tweet)
* [Feed-to-tweet on NPM](https://www.npmjs.com/package/feed-to-tweet)

Infinite-rss is a module I wrote for generating test feeds through URL configurations
* [Infinite-rss source code on Github](https://github.com/autonome/infinite-rss)
* [Infinite-rss live endpoint on Glitch.com](https://infinite-rss.glitch.me/?feedTitle=Teletubby%20Nightmares&itemTitleBase=You%27ll%20never%20wake%20up.)

## Performance

Around the [Quantum launch](https://blog.mozilla.org/blog/2017/11/14/introducing-firefox-quantum/) I started some work around performance testing, digging into some low-level performance characteristics of Firefox while running the [Speedometer 2.0 benchmark](https://mozilla.github.io/arewefastyet-speedometer/2.0/). It resulted in some handy cross-browser automation tooling - I implemented part of Chrome's Puppeteer API in Node.js.

Once it was easy to run Speedometer with multiple browsers and different versions, I added some measurements of things like CPU usage and disk IO. The work isn't done yet, but the most interesting learning yet is that it's beginning to look like the *quantity of writes*, irrespective of the amount of data, is the determining factor in performance on Mac for this particular test. More to come in 2018 on this.

  * [Automation scripts for cross-browser Speedometer testing on Mac](https://github.com/autonome/quantum-testing)
  * [Puppeteer for Firefox on Github](https://github.com/autonome/puppeteer-fx)
  * [Puppeteer for Firefox on NPM](https://www.npmjs.com/package/puppeteer-fx)

## Speech Recognition

I worked with [Andre Natal](https://twitter.com/andrenatalbr) to take the work done in the [Voice Fill Test Pilot experiment for Firefox](https://testpilot.firefox.com/experiments/voice-fill), and make it accessible to developers both for web and Node.js use.

Voice Fill is an extension, which uses a cloud-based speech recognition service run by Mozilla. It's a *private* cloud service - not connected to any type of account, and no audio is saved on our servers.

This means that developers who want to add speech recognition to their web pages, apps and devices can do so without having to buy into a cloud provider ecosystem.

I started by modularizing the extension code into a single library for web pages.

* Source is at [speaktome-web on Github](https://github.com/mozilla/speaktome-web)
* Module is at [speaktome-api on NPM](https://www.npmjs.com/package/speaktome-api)

I also wrote a module for using the service from Node.js in your own devices - a RaspberryPi with a USB microphone, for example. This was a fun jaunt through the various libraries that deal with mics and recording and codecs and I only cried a little bit. But it works pretty well now, so time well spent.

* Source is at [speaktome-node on Github](https://github.com/mozilla/speaktome-node)
* Module is at [speaktome-node on NPM](https://www.npmjs.com/package/speaktome-node)

## WebExtensions

I've been writing browser extensions for Firefox since 2005, and in 2017 Mozilla made the biggest change in how extensions are written since they were initially added to the browser: The WebExtensions API. It's a change that sets the stage for Firefox to be much faster and safer while still being customizable. I spent some time migrating some of the extensions I'd written that I just couldn't live without, and also doing some experimentation with making new browser APIs and a few more experiments.

* *Tab hiding*: The tab groups extension needs an API for hiding and showing tabs, so I wrote an [experimental version of that API](https://github.com/autonome/webext-experiment-showOnlyTheseTabs).
* *Dormancy*: Once the tab.discard API was implemented, I ported Dormancy, an extension that unloads the web content in tabs after five minutes of not being used. [Source code on Github](https://github.com/autonome/Dormancy), [AMO listing](https://addons.mozilla.org/en-US/firefox/addon/dormancy/)
* *Peek*: An experiment in quick access to web content without breaking the user workflow. [Source code on Github](https://github.com/autonome/Peek), [AMO listing](https://addons.mozilla.org/en-US/firefox/addon/peek/)
* *Tab Statistics*: Extensions for showing different statistics about how you use tabs. It is implemented as a single extension, but since WebExtensions only allows a single menu item per extension, I listed four different versions on AMO, each showing a different piece of information. [Source code on Github](https://github.com/autonome/tabstatistics)
  * [Tab Count on AMO](https://addons.mozilla.org/en-US/firefox/addon/tab-count-button/)
  * [Tabs Opened on AMO](https://addons.mozilla.org/en-US/firefox/addon/tabs-opened-button/)
  * [Tabs Closed](https://addons.mozilla.org/en-US/firefox/addon/tabs-closed-button/)
  * [Tab Switches](https://addons.mozilla.org/en-US/firefox/addon/tabs-switched-button/)
* *Force Google Locale*: Detect your locale, and add it to Google URLs. [Source code on Github](https://github.com/autonome/forcegooglelocale), [AMO listing](https://addons.mozilla.org/en-US/firefox/addon/force-google-locale/)
* *Vim Keybindings*: HJKL navigation on web pages. [Source code on Github](https://github.com/autonome/vimkeybindings), [AMO listing](https://addons.mozilla.org/en-US/firefox/addon/vimkeybindings/)
* *Always Right*: New tabs in the same place all the time forever. [AMO listing](https://addons.mozilla.org/en-US/firefox/addon/always-right/), [Source code on Github](https://github.com/autonome/Always-Right)

## Miscellanous Projects

* *Web and Messaging*: Research exploring how the web and messaging apps can play together. [Research on Github](https://github.com/autonome/web-and-messaging)
* *TreeViewSortable*: An extension for the Atom Editor for sorting the file tree in different ways. [Source code on Github](https://github.com/autonome/tree-view-sortable)
* *Twitter Inline Oembed*: Embed Tweets in a single line of code in your blog posts. [Source code on Github](https://github.com/autonome/twitter-inline-oembed), [On NPM]( https://www.npmjs.com/package/twitter-inline-oembed)

## Writing

While I had a few posts that I really liked and were successful, I really thought I'd write more this year, and am disappointed by how little I managed to publish. I have a huge number of partially completed posts in my drafts folder. I need to create a habit of flexing the writing muscle regularly.

The big traffic post was about my absurd number of tabs. I did some basic performance testing across a bunch of versions of Firefox, which showed dramatic improvements in startup time even with more than 1000 tabs. I really didn't expect such a response - [#1 on HackerNews](https://news.ycombinator.com/item?id=14823807) (537 comments!), coverage by loads of mainstream tech news outlets like [ZDNET](http://www.zdnet.com/article/firefox-can-open-over-1500-tabs-in-15-seconds/), and [pretty massive comment thread on /r/programming](https://www.reddit.com/r/programming/comments/6otuw7/the_new_firefox_and_ridiculous_numbers_of_tabs/).

* Jan 11 - [Infectious Ideas: Scaling the Physical Web](https://medium.com/@dietrich/infectious-ideas-scaling-the-physical-web-c04bd1261fa2) (Medium post)
* Jan 31 - [Barcamp Yangon 2017: Technology, Community and the Largest Unconference in the World](https://medium.com/@dietrich/barcamp-yangon-2017-technology-community-and-the-largest-unconference-in-the-world-5966687fd84d) (Medium Post)
* Mar 28 - [FOSSAsia 2017](https://metafluff.com/2017/03/28/fossasia2017/) (blog post)
* Jun 12 - [Trust, Lies and Fitness Wearables](https://medium.com/the-state-of-responsible-internet-of-things-iot/dietrichayala-115fda22a95a), for ThingsCon's State of Responsible IoT report
* Jul 06 - [A-Frame Quickstart for Augmented City](https://metafluff.com/2017/07/06/aframe-augmented-city/) (blog post)
* Jul 12 - [Augmented City - VR](https://metafluff.com/2017/07/12/augmented-city-vr/) (blog post)
* Jul 20 - [Augmented City - Singapore](https://metafluff.com/2017/07/20/augmented-city-singapore/) (blog post)
* Jul 21 - [The New Firefox and Ridiculous Numbers of Tabs](https://metafluff.com/2017/07/21/i-am-a-tab-hoarder/) (blog post)
* Aug 08 - [The Secret of Flow State - Productivity for Busy People](https://superyesmore.com/the-secret-of-flow-state-productivity-for-busy-people-a659c99de96aaa3c5e5780ebf3db24e7), for SuperYesMore's Human in the Machine series
* Sep 21 - [Always Right – An Extension Migration Story](https://hacks.mozilla.org/2017/09/always-right-a-webextension-migration-story/), for Mozilla Hacks
