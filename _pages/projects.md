---
title: "Projects"
permalink: /projects/
layout: single
classes: wide
---

A selection of data, music-tech, and analytics projects. Each card links out to
code repositories or live dashboards.

---

<!-- CARD 1: Discogs Recommender -->

<div style="
  border-left: 4px solid #3366FF;
  padding: 20px;
  margin-bottom: 32px;
  background: #fafafa;
  border-radius: 6px;
">

### Discogs ML Recommender

<div style="color:#666; font-size:0.95em; margin-bottom:8px;">
  Python · Machine learning · Discogs API
</div>

A recommendation system that ingests the Discogs data dump and API to suggest
vinyl records based on my collection, wantlist, labels, and listening habits.

- Parses Electronic releases into SQLite and engineers features for labels, sub-labels, aliases, and release year.
- Scores candidate records using a custom weighting system tuned for crate-digging use cases.
- Designed to surface deep-catalog label/artist connections rather than obvious chart picks.

[View on GitHub](https://github.com/barneypinkerton){: .btn .btn--primary }

</div>

---

<!-- CARD 2: Apple Music Listening Dashboard -->

<div style="
  border-left: 4px solid #22A779;
  padding: 20px;
  margin-bottom: 32px;
  background: #fafafa;
  border-radius: 6px;
">

### Apple Music Listening Insights

<div style="color:#666; font-size:0.95em; margin-bottom:8px;">
  Tableau · SQLite · Automation
</div>

End-to-end pipeline and dashboard for analysing my Apple Music listening habits
over time, from daily ingestion to visual analytics.

- Automated export of listening data into CSV/SQLite via scripts.
- Data model tracks artist, genre, time of day, discovery vs repeat listening, and more.
- Tableau dashboards explore streaks, seasonal patterns, and “discovery vs comfort listening”.

[View Tableau dashboard](https://public.tableau.com/app/profile/barney.pinkerton/viz/AppleMusicDashboard_17602778655540/WeeklyTrends){: .btn .btn--primary }

</div>

