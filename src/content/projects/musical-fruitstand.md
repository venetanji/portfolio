---
title: Musical Fruitstand
subtitle: A touch-fruit interface for generative music
date: 2015-04-05T04:55:08.233Z
summary: An installation that turns a table of fruit into a musical
  instrument — touch a peach, hear a kick drum. Capacitive sensing,
  Arduino, Max/MSP and Ableton Live, no screens.
draft: false
featured: false
weight: 1
links:
  - name: Watch on YouTube
    url: https://youtube.com/watch?v=BWvFXbOAUBM
image:
  filename: featured.jpg
  focal_point: Smart
  preview_only: false
---

Musical Fruitstand is a tactile musical instrument disguised as a market stall. A spread of fruit sits on the table; touching a piece triggers a sound, and the way a hand lingers, pinches or brushes shapes the resulting note. There is no screen and no instructional layer — the interface is the food.

The hardware uses [Disney Research's Touché capacitive sensing technique](https://satomunehiko.com/works/touche/), which sweeps across a range of frequencies to read not just contact but the *kind* of contact: a fingertip, a flat palm, two hands at once, a slow drag. Each fruit becomes a different voice in the patch — pitch shifts, filter sweeps, drums, quantised stabs.

<div class="yt-embed">
  <iframe src="https://www.youtube-nocookie.com/embed/BWvFXbOAUBM" title="Musical Fruitstand" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

The signal chain runs through Arduino into Max/MSP and out via Ableton Live. The aim is small: invite people to play with their food, and to notice that the boundary between a familiar object and a musical instrument is mostly a matter of permission.
