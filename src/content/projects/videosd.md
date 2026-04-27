---
title: VideoSD
subtitle: A real-time img2img pipeline for live performance
date: 2023-02-21T04:55:08.233Z
draft: false
featured: false
weight: 1
summary: A TensorRT-accelerated diffusion pipeline with a WebRTC frontend —
  live camera in, transformed video out, with speech recognition driving
  the prompt in real time.
links:
  - name: Source on GitHub
    url: https://github.com/venetanji/videosd
image:
  filename: featured.png
  focal_point: Smart
  preview_only: false
---

VideoSD is a real-time img2img pipeline built around Stable Diffusion, accelerated with TensorRT and wired to a WebRTC front-end. A live camera stream is transformed frame by frame; speech recognition feeds the prompt as the user talks, so the projected output responds to both what is happening in front of the camera and what is being said.

The system is packaged with Docker and was the technical backbone of A-Eye and several teaching workshops.

<video src="/videos/videosd.mp4" poster="/images/projects/videosd.png" controls preload="metadata" class="md-video"></video>