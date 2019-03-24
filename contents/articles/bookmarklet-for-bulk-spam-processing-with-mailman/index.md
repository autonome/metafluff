---
layout: post
title: "Bookmarklet for Bulk Spam Processing with Mailman"
published_at: 2014-10-20
date: 2014-10-20
---

We use Mailman for mailing list management at Mozilla. However, [we haven't been able to control spam on those lists](https://bugzilla.mozilla.org/show_bug.cgi?id=983758). Not only does spam not get caught before hitting Mailman, the built-in spam rules don't work - I configured the rules to discard anything above spam level 1, and tons of spam is still held for moderation. But identification *does* work... so we can just ignore the moderation queue forever and move on with life, right? No. Because we have another problem: The newsgroups support means that valid posts might be held for processing because Mailman doesn't know the sender is valid because they subscribed through Google Groups. So we have to view the lists and mark those messages as valid and add the sender to the valid-senders list. To cap it all off, in the long tradition of open source user interface design, Mailman has a full featured but RSI-inducing UI for managing all of this.

So if you're an admin for a bunch of Mailman lists, here's a mitigation that might make your day suck just a little bit less:

I wrote a bookmarklet that will do the following for all messages held for moderation:

*   Select the radio button to discard the message
*   Check the box to auto-discard from that sender
*   Check the box to ban the sender from ever subscribing again
<del>**To install, drag this link to your bookmarks Toolbar: <a>Mailman - discard and ban all</a>**</del>

Wordpress removes JavaScript in links, so create a new bookmark and copy the following code into the URL field:

`
javascript:function%20qsa(e){return[].slice.call(document.querySelectorAll(e))}qsa(%22input[type=RADIO][name^=senderaction]%22).forEach(function(e){e.checked=!0}),qsa(%22input[type=CHECKBOX][name^=senderfilter]%22).forEach(function(e){e.checked=!0}),qsa(%22input[type=CHECKBOX][name^=senderbanp]%22).forEach(function(e){e.checked=!0});
`

Remember to make VERY sure that none of the messages are valid before executing this bookmarklet... not only because valid messages will be discarded and their senders will be banned, but also because the UI for removing addresses from the block-list in Mailman is even worse than the one for moderation.