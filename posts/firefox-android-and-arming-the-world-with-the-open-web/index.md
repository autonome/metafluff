---
layout: post
title: "Firefox, Android and ARMing the World with the Open Web."
published_at: 2011-08-18
date: 2011-08-18
tags: ["android","firefox","firefox","mozilla","mozilla"]
---

I've been meaning to blog about this for a while, and Singularity Hub's article about [the explosive sales of low-cost Android phones in Kenya](http://j.mp/oowRDz) reminded me to actually do it.

I was lucky enough to attend a bunch of different tech events outside of the USA in the last year. I went to events in Thailand, Cambodia, Laos, Vietnam, Indonesia and Kenya. I also visited Malaysia and China, and briefly crossed the border into Burma.

Everywhere I went I found Android.

As the article mentioned, [Huawei's IDEOS phones](http://www.huaweidevice.com/resource/mini/201008174756/ideos/products_specifications.html) are selling fast in Kenya at ~80USD. These were on sale in the airport in Nairobi, and in many of the mobile shops I went into. [Nexian](http://www.nexian.co.id/index.php/product.html) is a manufacturer in Indonesia, with a bunch of Android phones aimed at the mid- to low-end market. In Thailand, HTC is the big Android purveyor (and always *one* Windows phone on offer!). Their low-budget phones in the US are the mid-range phones in Thailand, such as the Wildfire and Tattoo. There were a bunch of other brands and models, I really should've taken pictures. The advertising was everywhere. Google was holding Android dev days in major cities. The presence was constant and sometimes unavoidable - like when I rode a tuk-tuk into Siem Reap from the airport and we drove under a Google/Android banner that crossed all 6 lanes of traffic.

Anyways, everywhere I went I was asked why Firefox wasn't in the Android Market, or if it was, people said that it wouldn't install, or crashed before starting up.

Well, the explanation is that not all Android devices are equal. The Android devices that are selling well in these countries are very low cost devices. They're selling in places where 40% of the population lives on less than 2USD per day (Kenya, according to that article), or where >80% of the populace is not even online yet (less than 20% of Indonesia is online, according to Internetworldstats.com). The ARM CPUs that these Android phones have are not very powerful, and they usually have little memory. Often these devices are running 1.x versions of Android. Their screens are small and have the best resolution you could get in a phone in 2002.

But that's only part of the explanation. These phones all come with browsers! Why can't they install Firefox instead?

*   Firefox on Android doesn't support the ARM CPUs commonly used in these phones.
*   Firefox is not realistically usable given the amount of memory many of these phones ship with.
There've been bugs filed about supporting Android devices with weak CPUs, little memory and poor screen resolution, but no traction. The mobile team has explicitly not targeted these phones. Maybe this is because Firefox as it exists today is too far away from being able to run under these conditions. If that's the case, maybe we need to look at other options, like radically cutting down the feature set, even further than Fennec did.

I don't think we can wait for decent hardware to become affordable in these markets. They are growing fast, and turning to the Android they can get, and taking the only Web they can get: The one they can afford. There's not much choice in that scenario, and choice is a key part of the Mozilla mission. When the other 80% of Indonesia comes online for the very first time, Mozilla and Firefox should be there, ready to provide that choice.