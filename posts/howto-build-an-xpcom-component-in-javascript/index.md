---
layout: post
title: "Howto: Build an XPCOM Component in Javascript"
published_at: 2006-02-25
date: 2006-02-25
tags: ["mozilla"]
---

## Introduction

Here's my first cut at a "Hello World" tutorial for creating an XPCOM component in Javascript. The tutorials, wiki pages and knowledge-base entries that exist on this subject are mostly from the perspective of a C++ developer, not a front-end developer, and therefore seemed to always leave out basic steps and information. Slay me with corrections in the comments :)

<span style="color:red;">UPDATE:</span> I've moved this tutorial to the Mozilla Developer Center, and made a some of the changes recommended in the comments. Please read the [updated version](http://developer.mozilla.org/en/docs/How_to_Build_an_XPCOM_Component_in_Javascript) instead of this one.

This is a very utilitarian tutorial (say that 10x fast!): I'm not going to describe how and why XPCOM works the way it does, or what every bit of the example code does. That's been detailed [elsewhere](http://developer.mozilla.org/en/docs/XPCOM). I'm just going to show you what you need to do to get things *working*, in as few and as simple steps as possible.

Caveat: This was done on a Mac. YMMV with Windows.

## Prerequisites

<strike>Download and compile Firefox. Haha, ok maybe this tutorial is not as simple as I thought :) Seriously though, it takes a while to build, but it's not hard, and the instructions (at least for Mac) are simple and intuitive. If you don't want to do this, then you probably don't need to implement your class as an XPCOM component, and should just stick with plain ol' Javascript. (There is probably a way to fetch and build only what is needed to compile the typelib, but that's probably more complicated and less documented than building Firefox. Maybe it's time to build a web-service for compiling XPCOM typelibs...)</strike>

<span style="color:red;">Please read the [updated version](http://developer.mozilla.org/en/docs/How_to_Build_an_XPCOM_Component_in_Javascript) of this tutorial!</span>

## Implementation

This example component will expose a single method, which returns the string "Hello World!".

### Defining the Interface

XPCOM uses a dialect of IDL to define interfaces, called XPIDL. Here's the XPIDL for our HelloWorld component:

HelloWorld.idl
<div style="font-size:-1px;overflow:auto;border:1px solid black;">
<pre>
#include "nsISupports.idl"
[scriptable, uuid(1C0E8D86-B661-40d0-AE3D-CA012FADF170)]
interface nsIHelloWorld: nsISupports {
  string hello();
};
</pre>


Note that you must generate a new UUID for each XPCOM component that you create. A web-based UUID generator is available [here](http://www.bengoodger.com/software/mb/extensions/guidgen.html).

### Creating the Component

HelloWorld.js
<div style="font-size:-1px;overflow:auto;border:1px solid black;">
<pre>
/***********************************************************
constants
***********************************************************/

// reference to the interface defined in nsIHelloWorld.idl
const nsIHelloWorld = Components.interfaces.nsIHelloWorld;

// reference to the required base interface that all components must support
const nsISupports = Components.interfaces.nsISupports;

// guid uniquely identifying our component
const CLASS_ID = Components.ID("{1C0E8D86-B661-40d0-AE3D-CA012FADF170}");

// description
const CLASS_NAME = "My Hello World Javascript XPCOM Component";

// textual unique identifier
const CONTRACT_ID = "@dietrich.ganx4.com/helloworld;1";

/***********************************************************
class definition
***********************************************************/

//class constructor
function HelloWorld() {
};

// class definition
HelloWorld.prototype = {

  // define the function we want to expose in our interface
  hello: function() {
      return "Hello World!";
  },

  QueryInterface: function(aIID)
  {
    if (!aIID.equals(nsIHelloWorld) &&
        !aIID.equals(nsISupports))
      throw Components.results.NS_ERROR_NO_INTERFACE;
    return this;
  }
};

/***********************************************************
class factory

This object is a member of the global-scope Components.classes.
It is keyed off of the contract ID. Eg:

myHelloWorld = Components.classes["@dietrich.ganx4.com/helloworld;1"].
                          createInstance(Components.interfaces.nsIHelloWorld);

***********************************************************/
var HelloWorldFactory = {
  createInstance: function (aOuter, aIID)
  {
    if (aOuter != null)
      throw Components.results.NS_ERROR_NO_AGGREGATION;
    return (new HelloWorld()).QueryInterface(aIID);
  }
};

/***********************************************************
module definition (xpcom registration)
***********************************************************/
var HelloWorldModule = {
  _firstTime: true,
  registerSelf: function(aCompMgr, aFileSpec, aLocation, aType)
  {
    if (this._firstTime) {
      this._firstTime = false;
      throw Components.results.NS_ERROR_FACTORY_REGISTER_AGAIN;
    };
    aCompMgr = aCompMgr.
        QueryInterface(Components.interfaces.nsIComponentRegistrar);
    aCompMgr.registerFactoryLocation(CLASS_ID, CLASS_NAME,
        CONTRACT_ID, aFileSpec, aLocation, aType);
  },

  unregisterSelf: function(aCompMgr, aLocation, aType)
  {
    aCompMgr = aCompMgr.
        QueryInterface(Components.interfaces.nsIComponentRegistrar);
    aCompMgr.unregisterFactoryLocation(CLASS_ID, aLocation);
  },

  getClassObject: function(aCompMgr, aCID, aIID)
  {
    if (!aIID.equals(Components.interfaces.nsIFactory))
      throw Components.results.NS_ERROR_NOT_IMPLEMENTED;

    if (aCID.equals(CLASS_ID))
      return HelloWorldFactory;

    throw Components.results.NS_ERROR_NO_INTERFACE;
  },

  canUnload: function(aCompMgr) { return true; }
};

/***********************************************************
module initialization

When the application registers the component, this function
is called.
***********************************************************/
function NSGetModule(aCompMgr, aFileSpec) { return HelloWorldModule; }

</pre>


## Usage

### Compile Typelib

Here {objdir} is the directory specified for the MOZ_OBJDIR option in your .mozconfig file.

1.  Copy HelloWorld.idl to {objdir}/dist/idl/
2.  Copy HelloWorld.js to {objdir}/dist/bin/components/
3.  Change directories to {objdir}/dist/idl/
4.  $../bin/xpidl -m typelib -w -v -e ../bin/components/HelloWorld.xpt HelloWorld.idl

This will create a typelib file at {objdir}/dist/bin/compontents/HelloWorld.xpt.

## Installation

### For extensions:

1.  Copy HelloWorld.js and HelloWorld.xpt to {extensiondir}/components/
2.  Delete compreg.dat and xpti.dat from your profile directory.
3.  Restart application

### For Firefox core, using the application that you just built:

1.  Copy HelloWorld.js and HelloWorld.xpt to the {objdir}/dist/bin/components directory
2.  Delete compreg.dat and xpti.dat from the components directory.
3.  Delete compreg.dat and xpti.dat from your profile directory.
4.  Restart application

## Using Your Component

<div style="font-size:-1px;overflow:auto;border:1px solid black;">
<pre>
var oMyComponent = Components.classes['@dietrich.ganx4.com/helloworld;1'].
                        createInstance(Components.interfaces.nsIHelloWorld);

alert(oMyComponent.hello());
</pre>