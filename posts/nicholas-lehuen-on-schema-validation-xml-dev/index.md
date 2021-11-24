---
layout: post
title: "Nicholas Lehuen on Schema Validation (xml-dev)"
published_at: 2002-03-18
date: 2002-03-18
tags: ["quotes","xml","XML","Schemas"]
---

"I still don't understand why validation is not performed in a SAX filter rather than in parsers. Parsers like Xerces have dramatically grown in size and have performance problem due to the fact that validation is built in the parser.   

To me, parsing and validating are two different activities. They may have  

been integrated for performance reasons of the parsing+validation pipeline,  

but I'd still like to have a clean, high performance parsing pipeline in  

which I could plugin any kind of validators (eg. Sun MSV).  

Take the bug that causes Xerces 2 to dereference and parse schemas even if  

validation is disabled for example. I hope it has been fixed since, but if Xerces 2 was not mixing a lot of APIs and technologies (parsing, validating, building a DTD specific DOMs, etc.) in a monolithic way, the bug would have never appeared in the first place."[Link]()  