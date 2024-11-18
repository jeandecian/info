---
layout: default
title: Publications
permalink: /publications/
---

<div class="container" style="margin-top: 1em">
  <div class="btn-group d-flex" role="group">
    {% for category in site.data.profiles %} {% if category.name == "Academic"
    %} {% for profile in category.links %}
    <a
      href="{{ profile.url }}{{ profile.username }}"
      class="btn btn-outline-dark"
      target="_blank"
      >{{ profile.name }}
      <span class="{{ profile.icon }}" style="color: {{ profile.color }}"></span
    ></a>
    {% endfor %} {% endif %} {% endfor %}
  </div>
  <br />
  <h2>Latest Publications</h2>
  <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
    {% for publication in site.data.publications reversed %}
    <div class="col">
      <div class="card text-center h-100">
        <div class="card-header">
          <div class="row">
            <div class="col">
              <span
                class="badge text-bg-secondary w-100 h-100 d-flex align-items-center justify-content-center"
                >{{ publication.type }}</span
              >
            </div>
            <div class="col">
              {% if publication.selected %}
              <span
                class="fas fa-star text-warning"
                style="font-size: 1em"
              ></span>
              {% endif %}
            </div>
            <div class="col text-muted text-end">{{ publication.year }}</div>
          </div>
        </div>
        <div class="card-body d-flex flex-column">
          <h5
            class="card-title mb-0 flex-grow-1 d-flex align-items-center justify-content-center"
          >
            {{ publication.title }}
          </h5>
          <div>
            <hr />
            <h6 class="card-subtitle text-body-secondary">
              {{ publication.authors }}
            </h6>
          </div>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>
