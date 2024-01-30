---
title: "My personal website: joffreylagut.fr"
description: "Portfolio and blog of a software engineer: use simple technologies to generate pure HTML files."
pubDate: 2024-01-30
updatedDate: 2024-01-30
heroImage: ./assets/joffreylagut-hero.png
badge: Website
tags:
- web
- frontend
- javascript
- typescript
- astro
- tailwindcss
- "github pages"
- "continuous delivery"
---

## Project sheet

| Label | Information |
| --- | --- |
| Demo | [joffreylagut.fr](/) |
| Development time | 7h ([v1](#v100)) ; 5h ([v1.1](#v110)) |
| Team | Solo project |
| Source code | [Github](https://github.com/JoffreyLGT/joffreylagut.fr)

## Context

I wanted to have my own website to be able to share my thoughts and information regarding myself in a format that would allow me to do what I want without limitation.

## Requirements

- Must be fast to load.
- Must be minimalistic.
- Avoid any backend and prefer plain markdown files that will survive all JavaScript frameworks and <i>flavor of the decade</i> programming language.
- Must use TailwindCSS. I don't want to go back to the project in X months and have to play hide and seek with the CSS classes.

## How was it built

First of all, it is build using [Astro](astro.build), a<b>(nother)</b> frontent JavaScript framework that I am using as a <b>static site generator</b>. It has a lot of interesting features, with notably the concept of islands where you can declare part of your website as dynamically rendered by the client, using all other JavaScript frameworks like React, Vue etc.
This choice allows me to write blog posts and projects sheets in <b>markdown</b> and have them transformed into plain HTML pages.

The design is thanks to the [Astrofy](https://astrofy-template.netlify.app/) theme already based on TailwindCSS. I created a new Astro project based on it, fixed the issues it had and tinkered it to fit my needs.

Last but not least, I added a continuous delivery workflow to built and deploy the website on my web hosting provided: Hostinger.

If you want to know more about its implementation, I wrote an article about it: [Continous deployment on Hostinger using Github pages](/blog/continous-deployment-on-hostinger-using-github-pages).

## Technical information

| Category | Technologies |
| --- | --- |
| Frontend library | [Astro](https://astro.build)|
| Base theme | [Astrofy](https://astrofy-template.netlify.app/) |
| Continuous delivery | [Github Actions](https://github.com/features/actions) |
| Programming language | TypeScript / JavaScript |
| Source code | [Github](https://github.com/JoffreyLGT/joffreylagut.fr) |

## Versions

I'm only detailing bellow the two first iteration. To see the complete list, visit the [Github releases pages](https://github.com/JoffreyLGT/joffreylagut.fr/releases).

### v1.0.0

See [Github release](https://github.com/JoffreyLGT/joffreylagut.fr/releases/tag/1.0.0) for the source code.

First iteration of the website.

- Index page
- Projects page
- One project post
- Blog page
- CV page

Identified issues to be fixed in next iteration:

- Tag pages not generated properly
- RSS feed not functional

### v1.1.0

See [Github release](https://github.com/JoffreyLGT/joffreylagut.fr/releases/tag/1.1.0) for the source code.

Fix issues previously identified and add small improvements.

- Fix tag pages generation
- Fix RSS feed
- Add continuous delivery.
