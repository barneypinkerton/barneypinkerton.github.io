---
title: "Projects"
permalink: /projects/
layout: single
classes: wide
---

*Below is a selection of data, music-tech, and analytics projects I’ve built.*

---

<div markdown="1" style="
  border-left: 4px solid #3366FF;
  padding: 20px;
  margin-bottom: 32px;
  background: #fafafa;
  border-radius: 6px;
">
### Discogs ML Recommender  
**Python · Machine Learning · Discogs API**

A recommendation system that ingests the Discogs data dump and API to suggest vinyl records based on my collection, wantlist, label affinities, and listening behaviour.

- Parses Electronic releases into SQLite and engineers features for labels, sub-labels, aliases, and release year.  
- Scores candidate records using a custom weighting system tailored for crate-digging.  
- Prioritises deep-catalog relationships over obvious, mainstream suggestions.

[View on GitHub](https://github.com/barneypinkerton/){: .btn .btn--primary }

</div>

---

<div markdown="1" style="
  border-left: 4px solid #22A779;
  padding: 20px;
  margin-bottom: 32px;
  background: #fafafa;
  border-radius: 6px;
">
### Apple Music Listening Insights  
**Tableau · SQLite · Automation**

End-to-end pipeline and dashboard for analysing my Apple Music listening habits over time.

- Automated export of listening data into CSV/SQLite via scripts.  
- Data model tracks artist, genre, time of day, discovery vs repeat listening, and more.  
- Tableau dashboards reveal streaks, seasonal patterns, and discovery vs comfort-listening patterns.

[View Tableau Dashboard](https://public.tableau.com/app/profile/barney.pinkerton/viz/AppleMusicDashboard_17602778655540/WeeklyTrends){: .btn .btn--primary }

</div>

---

<div markdown="1" style="
  border-left: 4px solid #0F766E;
  padding: 20px;
  margin-bottom: 32px;
  background: #fafafa;
  border-radius: 6px;
">
### Transaction Risk Prediction Model  
**Python · Financial Crime Analytics · Predictive Modelling**

A finance-focused predictive ML model designed to score and prioritise potentially suspicious transactions in a banking environment.

- Uses historical transaction behaviour, peer-group analysis, and engineered risk features to flag anomalous activity.  
- Incorporates model monitoring, threshold tuning, and post-model explainability for compliance teams.  
- Designed as a modular pipeline suitable for integration into AML/CTF workflows.

[View on GitHub](https://github.com/barneypinkerton/finance-ml-placeholder){: .btn .btn--primary }

</div>
