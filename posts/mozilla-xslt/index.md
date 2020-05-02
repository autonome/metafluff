---
layout: post
title: "Mozilla + XSLT"
published_at: 2002-10-24
date: 2002-10-24
tags: ["mozilla","XSLT"]
---

Code snippet from Sjeord  Fischer on the OPML-DEV list:  

var xslProcessor = new XSLTProcessor();  

var outputDoc = document.implementation.createDocument("text/xml", "", null);  

xslProcessor.transformDocument(xmlNode, xslNode, outputDoc, null);  

(code taken from Q42's Mozilla2IE converter for Xopus, available at   

xopus.org)  

[Link]()  