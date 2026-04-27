---
title: A-Eye
subtitle: An AI installation that reimagines the audience in real time
date: 2024-03-01T04:55:08.233Z
draft: false
featured: true
weight: 1
summary: An interactive installation premiered at the M+ private party for
  Art Basel — capturing the audience and reimagining it on the gallery wall
  through generative AI.
image:
  filename: featured.png
  focal_point: Smart
  preview_only: false
---

A-Eye is an interactive installation that premiered at the M+ private party for Art Basel. The piece treats the audience itself as raw material: cameras capture the room, and a generative AI system reinterprets what it sees into a continuous visual that is projected back on the gallery wall.

## How it works

A live capture pipeline feeds pose and motion data into a real-time diffusion model. The model transforms the scene frame by frame, holding loose continuity from one image to the next so the projection feels like a single, evolving picture rather than a sequence of edits. The result is a kind of mirror that doesn't quite mirror — recognisable enough that visitors find themselves in it, abstract enough that the room becomes a shared dream.

## Stack

- Real-time computer vision and pose detection
- TensorRT-accelerated diffusion for visual transformation
- Live projection mapping
- WebRTC for low-latency capture

## Context

The installation was shown to art collectors, curators and technology audiences during Art Basel week. It is the most public outcome of doctoral research into how generative AI changes the relationship between makers, audiences and the artwork itself — and into what happens when an audience becomes both subject and co-author of a piece.