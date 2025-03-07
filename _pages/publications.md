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
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-2 row-cols-xl-3 g-4">
    {% for publication in site.data.publications reversed %}
    <div class="col">
      <div
        class="card text-bg-light text-center h-100 border-0"
        style="border-radius: 22px"
      >
        <div class="card-body d-flex flex-column">
          <div class="row">
            <div class="col">
              <span class="badge bg-dark">{{ publication.type }}</span>
            </div>
            <div class="col">
              {% if publication.access == "open" %}
              <span class="badge rounded-pill bg-primary">
                <span class="fas fa-lock-open"></span>
              </span>
              {% endif %} {% if publication.selected %}
              <span class="badge rounded-pill bg-warning">
                <span class="fas fa-star"></span>
              </span>
              {% endif %}
            </div>
            <div class="col text-end">
              <span class="badge bg-dark">{{ publication.year }}</span>
            </div>
          </div>
          <hr />
          {% if publication.page %}
          <a
            href="{{ site.baseurl }}/publications/{{ publication.page }}"
            class="card-text mb-0 flex-grow-1 d-flex align-items-center justify-content-center stretched-link link-dark link-offset-3-hover link-underline-opacity-0 link-underline-opacity-75-hover"
          >
            {{ publication.title }}</a
          >
          {% else %}
          <p
            class="card-text mb-0 flex-grow-1 d-flex align-items-center justify-content-center"
          >
            {{ publication.title }}
          </p>
          {% endif %}
          <hr />
          <p class="card-text text-body-secondary">{{ publication.authors }}</p>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>
