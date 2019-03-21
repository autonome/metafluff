---
layout: post
title: Installing Ubuntu Phone Demo on Galaxy Nexus from Mac OS X
published_at: 2013-02-22
date: 2013-02-22
---

Props to Mirko85 for [this post](http://j.mp/15yUsPE) which spelled it out for Windows.

STANDARD DEVICE WARNINGS: You'll violate your warranty probably, and you might brick your phone. You have been warned.

*   [Install adb and fastboot for Mac](http://code.google.com/p/adb-fastboot-install/)
*   Download these files from [Ubuntu's server](http://cdimage.ubuntu.com/ubuntu-touch-preview/quantal/mwc-demo/)

    *   quantal-preinstalled-boot-armel+maguro.img
    *   quantal-preinstalled-recovery-armel+maguro.img
    *   quantal-preinstalled-system-armel+maguro.img
    *   quantal-preinstalled-armel+maguro.img
    *   quantal-preinstalled-phablet-armhf.img

*   Plug the device in via USB
*   Open Terminal and navigate to the directory you downloaded the files to
*   If you haven't unlocked the device, execute "fastboot oem unlock" and follow onscreen instructions
*   Power down the device
*   Enter fastboot mode by pressing volume up, volume down and power buttons at the same time until you feel it vibrate
*   Once in fastboot mode, execute the following commands from Terminal

    *   fastboot flash recovery recovery-quantal-preinstalled-armel+maguro.img
    *   fastboot flash system quantal-preinstalled-system-armel+maguro.img
    *   fastboot flash boot quantal-preinstalled-boot-armel+maguro.img

*   Using the volume keys, select recovery mode and press power
*   In Terminal, execute "adb sideload quantal-preinstalled-armel+maguro.zip"
*   Wait for the command to complete (if you see "fixing fs_size in crypto footer", ignore it, it's done)
*   Use volume keys to navigate to "advanced", press power, select "reboot recovery" and press power again
*   Once back in recovery mode, execute from Terminal: "adb sideload quantal-preinstalled-phablet-armhf.zip"
*   Once the command has completed, use the volume keys to select "restart device" and press power button