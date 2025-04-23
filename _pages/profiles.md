---
layout: default
title: Profiles
permalink: /profiles/
---

<div class="container" style="margin-top: 1em">
  {% for category in site.data.profiles %}
  <h2>{{ category.name }}</h2>
  <div
    class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 row-cols-xl-6 g-4"
  >
    {% for profile in category.links %}
    <div class="col">
      <div class="card text-center border border-2" style="border-radius: 22px">
        <div class="card-body">
          <span
            class="{{ profile.icon }}"
            style="color: {{ profile.color }}"
          ></span>
          <span class="text-end">
            <a
              href="{{ profile.url }}{{ profile.username }}"
              class="card-text mb-0 flex-grow-1 d-flex align-items-center justify-content-center stretched-link link-dark link-offset-3-hover link-underline-opacity-0 link-underline-opacity-75-hover"
              target="_blank"
              >{{ profile.name }}</a
            ></span
          >
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
  <br />
  {% endfor %}
</div>

