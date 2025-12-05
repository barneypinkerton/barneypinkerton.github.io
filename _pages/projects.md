---
layout: single
title: "Projects"
permalink: /projects/
---

*Below is a selection of data, music-tech, and analytics projects I’ve built.*

<!-- CARD 1: Discogs ML Recommender -->
<div style="max-width: 900px; margin: 0 auto 32px;">
  <div style="
    border-left: 4px solid #3366FF;
    padding: 20px;
    background: #fafafa;
    border-radius: 6px;
  ">
    <h2 style="margin-top:0;">Discogs ML Recommender</h2>

    <div style="color:#666; font-size:0.95em; margin-bottom:12px;">
      Project · 2024
    </div>

    <div style="display:flex; flex-wrap:wrap; gap:8px; margin-bottom:12px;">
      <span style="
        background:#e8f0ff;
        color:#1a4fd7;
        padding:6px 12px;
        border-radius:999px;
        font-size:0.9em;
      ">Python</span>
      <span style="
        background:#e8f0ff;
        color:#1a4fd7;
        padding:6px 12px;
        border-radius:999px;
        font-size:0.9em;
      ">Pandas</span>
      <span style="
        background:#e8f0ff;
        color:#1a4fd7;
        padding:6px 12px;
        border-radius:999px;
        font-size:0.9em;
      ">SQLite</span>
      <span style="
        background:#e8f0ff;
        color:#1a4fd7;
        padding:6px 12px;
        border-radius:999px;
        font-size:0.9em;
      ">Machine Learning</span>
      <span style="
        background:#e8f0ff;
        color:#1a4fd7;
        padding:6px 12px;
        border-radius:999px;
        font-size:0.9em;
      ">Discogs API</span>
    </div>

    <p style="margin-bottom:10px;">
      A recommendation system that ingests the Discogs data dump and API to suggest vinyl records based on my collection,
      wantlist, label affinities, and listening behaviour. Designed for deep-catalog, crate-digging use cases rather than
      obvious chart picks.
    </p>

    <ul>
      <li>Parses electronic releases into SQLite and engineers features for labels, sub-labels, aliases, and release year.</li>
      <li>Scores candidate records using a custom weighting system tailored for crate-digging and label discovery.</li>
      <li>Prioritises long-tail label/artist connections over mainstream, high-visibility releases.</li>
    </ul>

    <a href="https://github.com/barneypinkerton" target="_blank" rel="noopener noreferrer">
      View on GitHub &rarr;
    </a>
  </div>
</div>
