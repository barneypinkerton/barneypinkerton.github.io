---
layout: single
title: "Projects"
permalink: /projects/
---

*Below is a selection of data, music-tech, and analytics projects I’ve built.*

<div class="project-card">

  <h2>Discogs ML Recommender</h2>

  <p><em>Python · Machine Learning · Discogs API · SQLite · Pandas</em></p>

  <div class="skill-row">
    <span class="skill-badge">Python</span>
    <span class="skill-badge">Pandas</span>
    <span class="skill-badge">SQLite</span>
    <span class="skill-badge">Machine Learning</span>
    <span class="skill-badge">Discogs API</span>
  </div>

  <p>
    A recommendation system that ingests the Discogs data dump and API to suggest vinyl records
    based on my collection, wantlist, label affinities, and listening behaviour. Designed for
    deep-catalog, crate-digging use cases rather than obvious chart picks.
  </p>

  <ul>
    <li>Parses Electronic releases into SQLite and engineers features for labels, sub-labels, aliases, and release year.</li>
    <li>Scores candidate records using a custom weighting system tailored for crate-digging and label discovery.</li>
    <li>Prioritises long-tail label/artist connections over mainstream, high-visibility releases.</li>
  </ul>

  <a class="btn btn--primary"
     href="https://github.com/barneypinkerton"
     target="_blank"
     rel="noopener noreferrer">
    View on GitHub
  </a>
</div>

<div class="project-card project-card--green">

  <h2>Apple Music Listening Insights</h2>

  <p><em>Tableau · SQLite · Automation · Data Engineering</em></p>

  <div class="skill-row">
    <span class="skill-badge">Tableau</span>
    <span class="skill-badge">SQLite</span>
    <span class="skill-badge">Python</span>
    <span class="skill-badge">ETL</span>
    <span class="skill-badge">Automation</span>
  </div>

  <p>
    End-to-end pipeline and dashboard for analysing my Apple Music listening habits over time,
    from daily ingestion to visual analytics.
  </p>

  <ul>
    <li>Automated export of listening data into CSV/SQLite via scripts.</li>
    <li>Data model tracks artist, genre, time of day, discovery vs repeat listening, and more.</li>
    <li>Tableau dashboards explore streaks, seasonal patterns, and “discovery vs comfort” listening.</li>
  </ul>

  <a class="btn btn--primary"
     href="https://public.tableau.com/app/profile/barnaby.pinkerton/viz/AppleMusicDashboard_17647709521790/WeeklyTrends"
     target="_blank"
     rel="noopener noreferrer">
    View Tableau dashboard
  </a>
</div>

<div class="project-card project-card--teal">

  <h2>Financial Risk & Anomaly Detection (placeholder)</h2>

  <p><em>Python · SQL · Predictive Modelling · Financial Crime Analytics</em></p>

  <div class="skill-row">
    <span class="skill-badge">Python</span>
    <span class="skill-badge">SQL</span>
    <span class="skill-badge">Scikit-learn</span>
    <span class="skill-badge">Feature Engineering</span>
    <span class="skill-badge">Financial Crime</span>
  </div>

  <p>
    Prototype predictive-risk model inspired by my work in financial crime analytics – focused on
    detecting anomalous customer and transaction behaviour in banking datasets.
  </p>

  <ul>
    <li>Explores supervised and unsupervised approaches to modelling suspicious activity.</li>
    <li>Emphasis on explainability and actionable outputs for compliance teams.</li>
    <li>Designed to plug into transaction-monitoring workflows as a scoring signal.</li>
  </ul>

  <a class="btn btn--primary"
     href="https://github.com/barneypinkerton"
     target="_blank"
     rel="noopener noreferrer">
    View repo (coming soon)
  </a>
</div>
