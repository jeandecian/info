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
    {% for publication in site.publications reversed %}
    <div class="col">
      <div class="card h-100 mb-3" style="border-radius: 22px">
        <div class="card-body d-flex flex-column">
          <p>
            {% if publication.selected %}
            <span class="badge rounded-pill bg-warning">
              <span class="fas fa-star"></span>
            </span>
            {% endif %}{% if publication.access == "open" %}
            <span class="badge rounded-pill bg-primary">
              <span class="fas fa-lock-open"></span>
            </span>
            {% endif %}
            <span class="badge bg-dark"
              >{{ publication.date | date: "%Y" }}</span
            >
            <span class="badge bg-dark">{{ publication.type }}</span>
          </p>
          <a
            href="{{ site.baseurl }}{{ publication.permalink }}"
            class="card-text mb-0 flex-grow-1 d-flex stretched-link link-dark link-offset-3-hover link-underline-opacity-0 link-underline-opacity-75-hover"
          >
            {{ publication.title }}</a
          >
          <p class="card-text text-body-secondary text-end">
            {{ publication.authors }}
          </p>
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
  <br />
  <h3>Full Publications List</h3>
  <ol reversed>
    {% for publication in site.publications reversed %}
    <li>
      [{{ publication.type }}] {{ publication.authors }}, "<b
        >{{ publication.title }}</b
      >," <i>{{ publication.compilation }}</i>, {{ publication.extra }}. [<a
        href="{{ site.baseurl }}{{ publication.permalink }}"
        class="link-primary link-underline-opacity-0 link-underline-opacity-75-hover"
        >Blog</a
      >] {% if publication.doi %}[<a
        href="https://www.doi.org/{{ publication.doi }}"
        class="link-primary link-underline-opacity-0 link-underline-opacity-75-hover"
        target="_blank"
        >DOI</a
      >]{% endif %}
    </li>
    {% endfor %}
  </ol>
</div>
