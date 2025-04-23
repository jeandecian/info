---
layout: default
title: Home
---

<div class="container" style="margin-top: 1em">
  <h2>Jean Decian</h2>
  <hr />
  <h3>📊 Statistics</h3>
  <div class="row">
    <div class="col-md-2">
      <div class="card text-center h-100">
        <div class="card-header">Total Publications</div>
        <div class="card-body">
          <h5 class="card-title mb-0">{{ site.publications | size }}</h5>
        </div>
      </div>
    </div>
  </div>
  <br />
  {% include selected-publications.html %}
</div>
