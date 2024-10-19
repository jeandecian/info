---
layout: default
title: Education
permalink: /education/
---

<div class="container" style="margin-top: 1em">
  <div class="row row-cols-1 row-cols-md-2 g-4">
    {% for edu in site.data.education %}
    <div class="col">
      <div class="card text-bg-light text-center h-100">
        <img
          src="{{ site.baseurl }}{{ edu.image }}"
          class="card-img-top img-fluid"
          alt="{{ edu.institution }}"
          style="height: 15em; object-fit: contain; padding: 2em"
        />
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><b>{{ edu.degree }}</b></li>
          <li class="list-group-item">{{ edu.location }}</li>
          <li class="list-group-item">{{ edu.date }}</li>
        </ul>
        <div class="card-footer">
          <div
            class="progress"
            role="progressbar"
            aria-label="{{ edu.degree }} progress"
            aria-valuenow="{{ edu.progress }}"
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              class="progress-bar {{ edu.progress-bar }}"
              style="width: {{ edu.progress }}%"
            >
              {{ edu.progress }}% ({{ edu.credits }})
            </div>
          </div>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>
