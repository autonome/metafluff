---
layout: post
title: UW Team Releases Bad-ass XML Toolkit
published_at: 2002-08-28
date: 2002-08-28
tags: xml
---

"There are two important technical contributions in the toolkit: a highly scalable XML stream processor, and an XML stream index. Both have important applications beyond the toolkit, to XML packet routing and to selective dissemination of information. The XML stream processor achieves a sustained throughput of about 5.6MB/s and scales up to large numbers of XPath expressions (up to 1,000,000 in our experiments). Since the processor transforms all XPath expressions into a single deterministic automaton, we did a detailed theoretical analysis to prove that the number of states in the automaton remains relatively small. The stream index is the first attempt to index streaming data, rather than stored data. It has to be small compared to the data stream (ours is 6% or less), and has to arrive just in time with the data stream. We measured speedups of up to a factor of four in processing XML streams with the index."[Link](http://www.cs.washington.edu/homes/suciu/XMLTK/)  