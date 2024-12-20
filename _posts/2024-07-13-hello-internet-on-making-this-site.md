---
title: "Hello Internet! On making this site"
date: 2024-07-13
excerpt_separator: "<!--more-->"
categories:
  - Blog
tags:
  - Typescript
  - Threejs
---

Welcome to my first post, which details my journey of building this website. 

This project started with the aim of creating a simple site to publish the occasional article and showcase my coding projects. It was meant to be simple no-code website, but as with many projects, scope creep set in, and soon I was working with HTML/CSS, modifying the Jekyll templates with Liquid, and adding animations with Three.js. 

# Building the Website with Jekyll and Minimal Mistakes

The foundation of this website is Jekyll, a static site generator that creates HTML webpages from templates, specifically for blogging sites. The theming comes from a template called [Minimal Mistakes](https://mmistakes.github.io/minimal-mistakes/), which provides a clean and customizable starting point. The advantage of this setup is that knowledge of HTML or CSS was not required to create a simple blogging website from the template. 
The following links were useful in getting started:
- [Jekyll Youtube tutorial series - by Giraffe Academy](https://www.youtube.com/playlist?list=PLLAZ4kZ9dFpOPV5C5Ay0pHaa0RJFhcmcB)
- [Jekyll documentation](https://jekyllrb.com/docs/)
- [Free Jekyll themes](https://jekyllthemes.io/free)

Ultimately, the main draw of Jekyll was its ability to generate a static site for free web hosting via GitHub Pages! It's amazing how GitHub offers such a powerful, user friendly and cost-free solution for developers to host and showcase their work.

# Learning HTML/CSS with GitHub Copilot

As I ventured beyond the blogging template to create  pages showcasing my projects and my game, some customization was required. This led me to dive into the world of HTML, CSS and Jekyll Collections with Liquid syntax. The basics were easier to grasp than I had anticipated, but the real hero of the story was GitHub Copilot.

GitHub Copilot is an AI-powered tool that helps generate code and suggestions, removing the need for memorizing extensive syntax or understanding every nuance of a framework. For instance, it helped me create the tiled image background for the page of my Android game, [Smiley Poop](/projects/Smiley-Poop/) in just 1 minute, whereas this would normally have involved 30+ minutes of googling.

This made it easy for even a relative HTML/CSS beginner like me to create this website,  and has the potential to make software development a lot more accessible to all. However, it was important to understand some basics because some knowledge is required to ask the right questions. For example, when I asked Copilot to "show the list of images on this webpage", I initially did not get a good result. It was only after I asked it to "use flexbox" that created a more robust layout for a variety of screen sizes. It could also occasionally suggest bad coding practices, such as using inline CSS with the style attribute, which is generally discouraged due to issues with maintainability, reusability, and performance. So I don't think professional software developers will be out of a job anytime soon!

# Web Animations with Three.js

At this point, the site still felt a bit boring, so I developed animations using Three.js, a JavaScript library designed for creating 3D graphics directly in the browser. I worked on a project that animates the construction of a building structure from its individual components for the homepage. You can check it out the project source code here.

I was particularly impressed by the zero-installation aspect of Three.js. Unlike the games and apps I’ve developed in the past, these instant web experiences are much easier to share with others. I look forward to doing more in the future!

This project was developed using TypeScript, a special version of JavaScript that adds type annotations which helps catch mistakes early. Coming from a C# background, I found TypeScript very useful because it builds upon the flexibility of Javascript, and adds the static typing, readability and code auto-completion that I take for granted whilst writing C# code!