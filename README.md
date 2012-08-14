MobileApps2012Demos
===================

A collection of mobile (web) apps developed during my [Mobile Applications Development](http://lore.com/course/6623) course in 2012 at the University of L'Aquila.

All the lectures of the course are available [here](http://www.slideshare.net/iivanoo/presentations).

The focus of the course is on understanding the mobile applications development problem space, how to effectively design a business-ready mobile app, and how to correctly implement it.

The course is intended to cover the following topics:

+ Understanding of the mobile ecosystem, platforms and strategies
+ Mobile information architecture and UI Design
+ Mobile app distribution and monetization
+ Web technologies for mobile app development (HTML5, CSS3, JQuery, and other microframeworks)
+ Data management (local data storage, REST APIs, server-side data storage)
+ Geolocalization and mapping
+ Accessing the device capabilities (camera, accelerometer, contacts, messaging, device rotation)
+ Security and user authentication
+ Intro to mobile app testing

In the following I report a small description of each demo I developed and made available to the participants of the course. All the demos are listed in the same order as I introduced them throughout the course, each demo is available as a distinct folder in this repository.

***

LatestMovies
------------

Demo app showing the basics about Phonegap and web apps development.
The app shows a list of the latest 10 movies out in the box office in the US. For each movie, it then shows its poster, synopsis and provides an external link to its Rotten Tomatoes page.

Platforms: PhoneGap (1.4.1), HTML5, CSS, JQuery, JQueryMobile, REST

Used Services: http://developer.rottentomatoes.com/

CutieCutie
----------

Demo app showing how to debug a PhoneGap application.
The app shows a list of random images of cats. Each time the user presses the "load more..." button, the app shows 15 more images.

Platforms: Cordova (1.6.0), iOS

Used services: http://thecatapi.com/, Google Maps

HTML5Demo
---------

Demo app showing the basics of HTML5.
The app is simply a very brief showcase of HTML5 capabilities like its new structural tags, forms, audio/video and web workers.

Platforms: Cordova(1.6.0), iOS

CutieCutie2
-----------

Demo app showing some typical usage of CSS3.
The app is a basic refinement of the previous version of the CutieCutie app.

Platforms: Cordova(1.7.rc1), iOS

CutieCutie3
-----------

Demo app showing how to structure Javascript code using RequireJS.
The app is a basic refinement of the previous version of the CutieCutie app

Platforms: Cordova(1.7.rc1), iOS

TemplatesDemo
-------------

Demo app showing the basics of Handlebars.js in combination with Require.JS
The app is meant to be simple boilerplate code for the projects.

Platforms: Cordova(1.6.0), iOS

EmployeeDirectoryModular
------------------------

Demo app showing the basics of Backbone.js in combination with all the other libraries we studied during the course, like jQuery, jQueryMobile, Handlebars, underscore, Require.JS

The app is meant to be simple boilerplate code for the projects. Please notice that this app, since it uses ALL the libraries all at once, represents the worst-case app in terms of performance (it is sluggish). So, you have to test it on your device. If your app is not fluid, you need to abandon some libraries in this (mandatory) order: jQueryMobile, jQuery (in favor of Zepto), Handlebars, Backbone.js, Require.js

So, the first library to abandon is jQueryMobile, then jQuery, etc. You will notice that everything will get much quicker simply by avoiding jQueryMobile.

Platforms: Cordova(1.7.0), iOS

EmployeeDirectoryModularClientServer
------------------------------------

Demo app with functionalities similar to EmployeeDirectoryModular, together with an implementation of a simple REST API in Java. Please, read and follow carefully the provided readme file in the provided archive.

Platforms: Tomcat, Jersey, MySQL

ChatWebSocket
-------------

Demo web app implementing a basic chat room.

Technologies: Jetty 8.1, Web Sockets, EclipseJEE

ServerSentEventsJava
--------------------

Timestamp web app showing the basics of server-sent events.

Used technologies: Tomcat 7.0, Server Sent Events, Eclipse JEE

ServerSentEventsPHP
-------------------

Timestamp web app showing the basics of server-sent events.

Used technologies: Apache, Server Sent Events

AppDocumentation
----------------

Document templates that could be useful for describing the app and keeping track of the design and development activities, more specifically:

+ **elevatorPitchTemplate** is a simple template to present your app if you have a 5-minutes slot only
+ **AppDesign** is a simple template for describing the strategies, context and design of the app. It is based on the well-known [book](http://www.amazon.com/Elements-User-Experience-User-Centered-Design/dp/0321683684%3FSubscriptionId%3DAKIAJYKJBAJTAUI7IXAQ%26tag%3Dcoursekit-20%26linkCode%3Dxm2%26camp%3D2025%26creative%3D165953%26creativeASIN%3D0321683684) on user-centered design by Jessie James Garret
+ **TechnicalDoc** is a simple template for recording all the activities and issues that arose during the development of the mobile app




