---
title: The Best Thing Ever
subtitle: A 1970s variety-show pastiche music video, generated end-to-end by my creative-skills pipeline
date: 2026-05-17T00:00:00.000Z
draft: false
featured: true
weight: 1
summary: An AI-generated 3:22 music video for the original song "The Best Thing Ever",
  styled as a faux 1976 Italian late-night variety show. Song written and sung in
  Suno; per-scene visuals composed with flux2 and animated with LTX-2.3 via my
  open-source creative-skills pipeline.
links:
  - name: Watch on YouTube
    url: https://youtu.be/QNU6dc4j6i4
  - name: Pipeline source (creative-skills)
    url: https://github.com/venetanji/creative-skills
  - name: Project spec / scenes YAML
    url: https://github.com/venetanji/creative-scripts/tree/main/music-videos/the-best-thing-ever
image:
  filename: featured.jpg
  focal_point: Smart
  preview_only: false
---

<div class="yt-embed">
  <iframe src="https://www.youtube-nocookie.com/embed/QNU6dc4j6i4" title="The Best Thing Ever" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>

A 3:22 music video for an original Suno song, produced end-to-end with my
[creative-skills](https://github.com/venetanji/creative-skills) pipeline.

## The concept

A faux 1976 Italian late-night variety show. *The Operator* hosts; the studio
audience is the partner he's begging for engagement from. Twenty-six scenes,
three set zones (main stage, intimate verse perch, b-stage armchair), four
backup dancers, a featured copper-haired duet partner. Cuts are bar-aligned
to the 123 BPM beat; the verse-end "I know you do" lands cleanly inside its
scene instead of bleeding across the cut.

## The pipeline

- **Song** — written and sung in Suno (stem pack + word-level Whisper STT)
- **Scene boundaries** — bar-aligned via MIDI tempo map (`analyze_song.py`)
- **Per-scene anchors** — flux2 `i2i` / `i2i2` / `i2iN` against locked
  character + setting references (operator photo, main-stage sheet, b-stage
  sheet, featured-singer sheet)
- **Per-scene video** — LTX-2.3 audio-reactive image-to-video, two-pass refine,
  with each scene conditioned on its slice of the song audio for lipsync
- **Final assembly** — ffmpeg concat with the clean Suno mix overlaid

The full scene spec (timings, prompts, camera LoRAs, anchor references) lives at
[`creative-scripts/music-videos/the-best-thing-ever/song.yaml`](https://github.com/venetanji/creative-scripts/tree/main/music-videos/the-best-thing-ever).

## Open-source skill

The pipeline is published as a set of composable
[AgentSkills](https://agentskills.ai/) at
[`venetanji/creative-skills`](https://github.com/venetanji/creative-skills) —
designed so an AI agent or a human can take a song concept (or a Suno track +
stem pack) and produce a finished music video. The repo includes the
`music-video` orchestrator, the `comfyui` skill (direct ComfyUI REST access for
flux2 + LTX-2.3), the `suno-mcp` skill, and the shared `storyboard` toolkit
for character / setting reference generation.
