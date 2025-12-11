---
title: "Projects"
permalink: /projects/
layout: single
classes: wide projects-page
author_profile: true
---

*A selection of technical and creative projects involving machine learning, data pipelines, dashboard analytics, and predictive modelling. Each card includes a short description, a skills snapshot and a link to explore the full work.*

---

<!-- CARD 1: Discogs ML Algorithm -->
<div class="project-card" style="
  border-left: 6px solid #1E293B;
  padding: 24px;
  margin-bottom: 36px;
  background: #fafafa;
  border-radius: 10px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.06);
">

<h2 style="margin-top:0;">Discogs Recommendation Algorithm</h2>
<div style="color:#666; font-size:0.95em; margin-bottom:10px;">
  Machine Learning · 2025
</div>

<p>
A personlised recommendation system built using the Discogs API to analyse my collection and wantlist, then branch out through connected labels and artists. The model includes a desirability and rarity score that boosts high-want/low-have records while down-weighting over-exposed ones. The result is a personalised engine for surfacing genuinely obscure (and hopefully cheap!) dance records I’m likely to enjoy.
</p>

<div style="
  margin-top: 10px;
  margin-bottom: 6px;
  padding: 6px 14px;
  border-radius: 999px;
  background: #1E293B;
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: #fff;
">
  Skills used
</div>

<ul style="margin-top: 8px; margin-bottom:14px; padding-left: 1.2rem;">
  <li>JSON API integration & rate-limited ETL pipeline design (Discogs API)</li>
  <li>Content-based recommender modelling (TF-IDF, cosine similarity)</li>
  <li>Graph-style feature engineering from label/artist relationships</li>
  <li>Custom scoring logic for weighting and feature scaling</li>
  <li>LLM prompt engineering for quick iteration and scaling</li>
</ul>

<a href="https://github.com/barneypinkerton/discogs-ml/blob/main/discogs_ml_v9.ipynb" target="_blank" rel="noopener noreferrer">
  View project on GitHub &rarr;
</a>

</div>

---

<!-- CARD 2: Apple Music Dashboard -->
<div class="project-card" style="
  border-left: 6px solid #1E293B;
  padding: 24px;
  margin-bottom: 36px;
  background: #fafafa;
  border-radius: 10px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.06);
">

<h2 style="margin-top:0;">Apple Music Listening Analytics Dashboard</h2>
<div style="color:#666; font-size:0.95em; margin-bottom:10px;">
  Data Visualization · 2025
</div>

<p>
  A Tableau dashboard analysing listening patterns across songs, artists,
  albums and genres. Includes dynamic parameters, ranking logic, calculated fields
  and an integrated UX-focused layout for storytelling.
</p>

<div style="
  margin-top: 10px;
  margin-bottom: 6px;
  padding: 6px 14px;
  border-radius: 999px;
  background: #1E293B;
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: #fff;
">
  Skills used
</div>

<ul style="margin-top: 8px; margin-bottom:14px; padding-left: 1.2rem;">
  <li>Tableau (parameters, LODs, dynamic sorting)</li>
  <li>Python and Script Editor based data preparation</li>
  <li>Time-series interpretation</li>
  <li>Dashboard UX design</li>
  <li>Interactive data storytelling</li>
</ul>

<a href="https://public.tableau.com/app/profile/barnaby.pinkerton/viz/AppleMusicDashboard_17647709521790/AppleMusicDashboard?publish=yes" target="_blank" rel="noopener noreferrer">
  View dashboard on Tableau Public &rarr;
</a>

</div>

---

<!-- CARD 3: Term Deposit ML Predictor -->
<div class="project-card" style="
  border-left: 6px solid #1E293B;
  padding: 24px;
  margin-bottom: 36px;
  background: #fafafa;
  border-radius: 10px;
  box-shadow: 0 4px 14px rgba(0,0,0,0.06);
">

<h2 style="margin-top:0;">Term Deposit Subscription Prediction Model</h2>
<div style="color:#666; font-size:0.95em; margin-bottom:10px;">
  Predictive Modelling · 2024
</div>

<p>
  A supervised machine learning classifier predicting customer conversion for term
  deposit campaigns. Includes preprocessing, feature engineering, model training and
  evaluation (ROC-AUC, CV).
</p>

<div style="
  margin-top: 10px;
  margin-bottom: 6px;
  padding: 6px 14px;
  border-radius: 999px;
  background: #1E293B;
  display: inline-block;
  font-size: 0.8rem;
  font-weight: 600;
  letter-spacing: .08em;
  text-transform: uppercase;
  color: #fff;
">
  Skills used
</div>

<ul style="margin-top: 8px; margin-bottom:14px; padding-left: 1.2rem;">
  <li>Scikit-Learn (logistic regression, tree models)</li>
  <li>Feature engineering</li>
  <li>Model evaluation (ROC-AUC, cross-validation)</li>
  <li>Performance comparison</li>
  <li>Jupyter notebook workflow</li>
</ul>

<a href="https://github.com/barneypinkerton/termdeposit-ml/blob/main/td_ml_v2.ipynb" target="_blank" rel="noopener noreferrer">
  View project on GitHub &rarr;
</a>

</div>
