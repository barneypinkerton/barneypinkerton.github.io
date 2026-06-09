---
title: "Projects"
permalink: /projects/
layout: single
classes: wide
author_profile: false
---

*A selection of technical projects involving machine learning, dashboard analytics, and predictive modelling. Each card includes a short description, a skills snapshot, and a link to explore the full work.*

---

<!-- CARD 1: Discogs ML Algorithm -->
<div class="project-card">

<h2>Discogs Recommendation Model</h2>
<div class="card-meta">Machine Learning · 2025</div>

<p>
A personalised recommendation system built using the Discogs API to analyse my collection and wantlist, then branch out through connected labels and artists. The model includes a desirability and rarity score that boosts high-want/low-have records while down-weighting over-owned ones. The result is a personalised engine for surfacing genuinely obscure (and hopefully cheap!) dance records I'm likely to enjoy.
</p>

<div class="skills-badge">Skills</div>

<ul>
  <li>Python (Pandas, Numpy, Scikit-learn, SciPy)</li>
  <li>JSON API integration and rate-limited ETL pipeline design</li>
  <li>Content-based recommender modelling (TF-IDF, cosine similarity)</li>
  <li>Custom scoring logic for weighting and feature scaling</li>
  <li>LLM prompt engineering for quick iteration and scaling</li>
</ul>

<a href="https://github.com/barneypinkerton/discogs-ml" target="_blank" rel="noopener noreferrer">
  View project on GitHub &rarr;
</a>

</div>

---

<!-- CARD 2: Apple Music Dashboard -->
<div class="project-card">

<h2>Apple Music Listening Analytics Dashboard</h2>
<div class="card-meta">Data Visualisation · 2025</div>

<p>
  A Tableau Public dashboard visualising listening patterns across songs, artists,
  albums, and genres. Includes parameters, ranking logic, calculated fields,
  and an integrated UX-focused layout for dynamic analysis – happy clicking!
</p>

<div class="tableau-container">
<div class='tableauPlaceholder' id='viz_apple_music' style='position:relative; width:100%;'>
  <noscript>
    <a href='https://public.tableau.com/app/profile/barnaby.pinkerton/viz/AppleMusicDashboard_17647709521790/AppleMusicDashboard'>
      <img alt='Apple Music Dashboard' src='https://public.tableau.com/static/images/Ap/AppleMusicDashboard_17647709521790/AppleMusicDashboard/1_rss.png' style='border: none; width:100%;' />
    </a>
  </noscript>
  <object class='tableauViz' style='display:none;'>
    <param name='host_url' value='https%3A%2F%2Fpublic.tableau.com%2F' />
    <param name='embed_code_version' value='3' />
    <param name='site_root' value='' />
    <param name='name' value='AppleMusicDashboard_17647709521790/AppleMusicDashboard' />
    <param name='tabs' value='no' />
    <param name='toolbar' value='yes' />
    <param name='animate_transition' value='yes' />
    <param name='display_static_image' value='yes' />
    <param name='display_spinner' value='yes' />
    <param name='display_overlay' value='yes' />
    <param name='display_count' value='yes' />
    <param name='language' value='en-US' />
    <param name='filter' value='publish=yes' />
  </object>
</div>
<script type='text/javascript'>
  (function() {
    var divElement = document.getElementById('viz_apple_music');
    var vizElement = divElement.getElementsByTagName('object')[0];
    vizElement.style.width = '100%';
    vizElement.style.height = '827px';
    var scriptElement = document.createElement('script');
    scriptElement.src = 'https://public.tableau.com/javascripts/api/viz_v1.js';
    vizElement.parentNode.insertBefore(scriptElement, vizElement);
  })();
</script>
</div>

<div class="skills-badge">Skills</div>

<ul>
  <li>Tableau (calculated fields, parameters, LODs, dynamic sorting and grouping)</li>
  <li>Script Editor and Python-based ETL</li>
  <li>Time-based filtering</li>
  <li>Dashboard UX design</li>
  <li>Interactive storytelling</li>
</ul>

<a href="https://public.tableau.com/app/profile/barnaby.pinkerton/viz/AppleMusicDashboard_17647709521790/AppleMusicDashboard?publish=yes" target="_blank" rel="noopener noreferrer">
  Open full dashboard in Tableau Public &rarr;
</a>

</div>

---

<!-- CARD 3: Term Deposit ML Predictor -->
<div class="project-card">

<h2>Term Deposit Subscription Prediction Model</h2>
<div class="card-meta">Predictive Modelling · 2024</div>

<p>
  A supervised machine learning classifier predicting customer conversion for term
  deposit campaigns. Includes preprocessing, feature engineering, model training, and
  evaluation (ROC-AUC, CV).
</p>

<div class="skills-badge">Skills</div>

<ul>
  <li>Python (Pandas, Numpy, Seaborn, Scikit-learn)</li>
  <li>Feature engineering</li>
  <li>Model evaluation (ROC-AUC, cross-validation)</li>
  <li>Performance comparison</li>
  <li>Jupyter notebook workflow</li>
</ul>

<a href="https://github.com/barneypinkerton/termdeposit-ml/blob/main/td_ml_v2.ipynb" target="_blank" rel="noopener noreferrer">
  View project on GitHub &rarr;
</a>

</div>
