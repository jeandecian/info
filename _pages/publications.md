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
  {% include selected-publications.html %}
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
