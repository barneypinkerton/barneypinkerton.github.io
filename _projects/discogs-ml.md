---
layout: single
title: "Discogs ML Recommender"
date: 2024-01-01
type: "Project · 2024"
skills:
  - Python
  - Pandas
  - SQLite
  - Machine Learning
  - Discogs API
---

A recommendation system that ingests the Discogs data dump and API to suggest vinyl records
based on my collection, wantlist, label affinities, and listening behaviour. Designed for
deep-catalog, crate-digging use cases rather than obvious chart picks.

- Parses Electronic releases into SQLite and engineers features for labels, sub-labels, aliases, and release year.
- Scores candidate records using a custom weighting system tailored for crate-digging and label discovery.
- Prioritises long-tail label/artist connections over mainstream, high-visibility releases.

[View on GitHub](https://github.com/barneypinkerton){: .btn .btn--primary target="_blank" rel="noopener noreferrer" }
