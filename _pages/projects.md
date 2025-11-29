---
title: "Projects"
permalink: /projects/
layout: single
author_profile: true
---

*Below is a selection of data, music-tech, and analytics projects I’ve built.*
{: .page__lead}

<!-- =========================
     Discogs ML Recommender
     ========================= -->

<div class="project-card project-card--blue">

  <h2>Discogs ML Recommender</h2>

  <div class="skill-row">
    <span class="skill-badge">Python</span>
    <span class="skill-badge">Machine Learning</span>
    <span class="skill-badge">Discogs API</span>
    <span class="skill-badge">SQLite</span>
    <span class="skill-badge">Pandas</span>
  </div>

  <p>
    A recommendation system that ingests the Discogs data dump and API to suggest
    vinyl records based on my collection, wantlist, label affinities, and listening
    behaviour. Designed for deep-catalog, crate-digging use cases rather than obvious
    chart picks.
  </p>

  <ul>
    <li>Parses Electronic releases into SQLite and engineers features for labels, sub-labels, aliases, and release year.</li>
    <li>Scores candidate records using a custom weighting system tuned for crate-digging and label discovery.</li>
    <li>Prioritises long-tail label/artist connections over mainstream, high-visibility releases.</li>
  </ul>

  <a href="https://github.com/barneypinkerton" class="btn btn--primary" target="_blank" rel="noopener">
    View on GitHub
  </a>

</div>

<!-- =========================
     Apple Music Listening Insights
     ========================= -->

<div class="project-card project-card--green">

  <h2>Apple Music Listening Insights</h2>

  <div class="skill-row">
    <span class="skill-badge">Tableau</span>
    <span class="skill-badge">SQLite</span>
    <span class="skill-badge">Automation</span>
    <span class="skill-badge">Python</span>
  </div>

  <p>
    An end-to-end pipeline and dashboard for analysing my Apple Music listening
    habits over time, turning daily ingestion into visual analytics.
  </p>

  <ul>
    <li>Automated export of listening data into CSV/SQLite via scripts.</li>
    <li>Data model tracks artist, genre, time of day, discovery vs repeat listening, and more.</li>
    <li>Tableau dashboards explore streaks, seasonal patterns, and “discovery vs comfort-listening” behaviour.</li>
  </ul>

  <a href="https://public.tableau.com/profile/barney.pinkerton" class="btn btn--primary" target="_blank" rel="noopener">
    View Tableau profile
  </a>

</div>

<!-- =========================
     FinCrime / Banking ML Model
     ========================= -->

<div class="project-card project-card--teal">

  <h2>Financial Crime Risk Scoring Model</h2>

  <div class="skill-row">
    <span class="skill-badge">Python</span>
    <span class="skill-badge">SQL</span>
    <span class="skill-badge">Risk Modelling</span>
    <span class="skill-badge">Financial Crime Analytics</span>
  </div>

  <p>
    A prototype machine-learning risk scoring framework inspired by my work in
    financial crime analytics — focused on transaction-level behaviour, entity
    risk, and explainable alerts.
  </p>

  <ul>
    <li>Combines customer, transaction, and network features into a unified risk score.</li>
    <li>Emphasises transparency and explainability of drivers behind each alert.</li>
    <li>Built to be compatible with rule-based monitoring environments in banks.</li>
  </ul>

  <p><em>Repository coming soon — placeholder for ongoing work.</em></p>

  <a href="https://github.com/barneypinkerton" class="btn btn--primary" target="_blank" rel="noopener">
    GitHub profile
  </a>

</div>
