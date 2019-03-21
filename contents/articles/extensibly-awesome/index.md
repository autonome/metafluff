---
layout: post
title: Extensibly Awesome: A Jetpack API for the Firefox Location Bar
published_at: 2011-06-09
date: 2011-06-09
tags: firefox firefox jetpack mozilla mozilla
---

I tweaked some of [Mardak's code for the Twitter Add-on](http://mozillalabs.com/prospector/2011/06/01/exploring-social-search-with-twitter-address-bar-search/), and created a Jetpack module that makes it terribly simple to write add-ons that extend the awesomebar with your own suggestions. As an example, here's an add-on that uses the Google Translate API to translate text into a specified language directly in the location bar. If you type in the keyword 'translate', followed by a language code and some text, it will show the translation in the awesomebar results:

[![Screenshot](http://autonome.files.wordpress.com/2011/06/screen-shot-2011-06-09-at-3-36-53-am.png "Screenshot")](screen-shot-2011-06-09-at-3-36-53-am.png)

The code:
<pre>require('awesomebar').add({
  keyword: 'translate',
  onSearch: function(query, suggest) {
    let lang = query.substring(0, query.indexOf(' '));
    let text = query.substring(query.indexOf(' '));
    if (lang.length == 2 && text.length > 2) {
      translate(lang, text, function(translatedText) {
        suggest({
          title: 'Translated text in ' + lang + ': ' + translatedText,
          url: 'http://translate.google.com/?tl=' + lang +
               '&q=' + encodeURIComponent(text),
        }, true);
      });
    }
  }
});

function translate(lang, text, callback) {
  require('request').Request({
    url: 'http://ajax.googleapis.com/ajax/services/language/translate',
    content: {
      v: '1.0',
      q: text,
      langpair: ''' + lang
    },
    headers: {
      Referer: require('tabs').activeTab.location
    },
    onComplete: function() {
      callback(this.response.json.responseData.translatedText);
    }
  }).get();
}</pre>
The example needs niceties such as being able to write full language names, but you get the gist.

Here's the [awesomebar.js module](https://github.com/autonome/Jetpack-Modules/blob/master/awesomebar.js).

There's a bit of documentation in there. The code could use some cleanup, and could probably be much smaller if converted to use the internal Jetpack APIs for things like window-watching, etc.