---
layout: "layouts/home.njk"
numberOfLatestPostsToShow: 3
---

<!--
{% set postsCount = collections.posts | length %}
{% set latestPostsCount = postsCount | min(numberOfLatestPostsToShow) %}
<h1>Latest {{ latestPostsCount }} Post{% if latestPostsCount != 1 %}s{% endif %}</h1>

{% set postslist = collections.posts | head(-1 * numberOfLatestPostsToShow) %}
{% set postslistCounter = postsCount %}
{% include "postslist.njk" %}

{% set morePosts = postsCount - numberOfLatestPostsToShow %}
{% if morePosts > 0 %}
<p>{{ morePosts }} more post{% if morePosts != 1 %}s{% endif %} can be found in <a href="blog.njk">the archive</a>.</p>
{% endif %}

{# List every content page in the project #}
{#
<ul>
	{%- for entry in collections.all %}
	<li><a href="{{ entry.url }}"><code>{{ entry.url }}</code></a></li>
	{%- endfor %}
</ul>
#}
-->

## current

[User &amp; Agents](https://userandagents.com): Growing a community working on projects that increase user agency at the intersection of the web, AI and end-user programming.

[Peek](https://github.com/autonome/peek): Explorations in browser infrastructure, experimental web user agents, local-first data and applications.

[WebTransitions](https://webtransitions.org): Accelerating transitional change on the web platform and in browsers with funding, coordination and development.

[Filecoin Foundation](https://fil.org): Advising on IPFS, digital archiving, space, devrel and more.

## past

[Protocol Labs](https://protocol.ai)

[Mozilla](https://mozilla.com)

## ongoing projects

[Intent to Ship](https://intenttoship.dev): A bot that posts when browser makers announce their intent to ship/change/remove/etc features in their web engines - [Bluesky](https://bsky.app/profile/intenttoship.dev) / [Mastodon](https://twitter.com/intenttoship/) / [Twitter](https://twitter.com/intenttoship/) / [Github](https://github.com/autonome/intenttoship-bot)

[Superflow.dev](https://superflow.dev) - Stack Overflow metrics dashboard and health monitoring for maintainers - [Github](https://github.com/autonome/superflow)

Always Right: Browser extension to always open new tabs to the right of the active tab - [Chrome](https://chromewebstore.google.com/detail/always-right/npjpaghfnndnnmjiliibnkmdfgbojokj) / [Firefox](https://addons.mozilla.org/en-US/firefox/addon/always-right/)

Dormancy: Browser extension for configurable tab unloading - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/dormancy/)

Tab Statistics: Browser extension to count open tabs, and tabs open/closed/switched per day - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/tab-count-button/)

Vim keybindings: Browser extension providing basic directional keybindings - [Firefox](https://addons.mozilla.org/en-US/firefox/addon/vimkeybindings/)

## oldentymes projects

[Libdweb](https://github.com/libdweb/libdweb)

[Meatclub.in](https://meatclub.in)

[Noms.in](https://noms.in)

[NuSOAP](https://sourceforge.net/projects/nusoap/)

## the hits

#1 on HackerNews: January 17 2024 - ["Filecoin Foundation successfully deploys IPFS in space"](https://news.ycombinator.com/item?id=39013412)

#1 on HackerNews: July 21, 2017 - ["The new Firefox and ridiculous numbers of tabs"](https://news.ycombinator.com/item?id=14823807)

Digg front page: June 20, 2006 - I wrote up the plans for session-restore in Firefox [on this wiki page](https://wiki.mozilla.org/Session_Restore) which hit the Digg front page and knocked over the Mozilla wiki
