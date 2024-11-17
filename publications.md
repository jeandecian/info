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
      <div class="card text-bg-light text-center h-100">
        <div class="card-body d-flex flex-column justify-content-center">
          <h5 class="card-title mb-0">{{ publication.title }}</h5>
          <hr />
          <h6 class="card-subtitle text-body-secondary">
            {{ publication.authors }}
          </h6>
        </div>
        <div class="card-footer">
          <div class="row">
            <div class="col text-muted">{{ publication.year }}</div>
            <div class="col">
              <span
                class="badge text-bg-secondary w-100 h-100 d-flex align-items-center justify-content-center"
                >{{ publication.type }}</span
              >
            </div>
          </div>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>
