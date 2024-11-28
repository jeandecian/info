---
layout: default
title: Home
---

<div class="container" style="margin-top: 1em">
  <h2>Jean Decian</h2>
  <hr />
  <div class="row">
    {% for index in site.data.index %}
    <div class="{{ index.class }}">
      <div class="card text-center h-100">
        <div class="card-header">{{ index.header }}</div>
        <div class="card-body">
          <h5 class="card-title mb-0">{{ index.title }}</h5>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>
