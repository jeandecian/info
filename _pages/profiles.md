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
      <div
        class="card text-bg-light text-center mb-3 border-0"
        style="border-radius: 22px"
      >
        <div class="card-body">
          <h2 class="card-title" style="margin-bottom: 1rem">
            <span
              class="{{ profile.icon }} fa-3x"
              style="color: {{ profile.color }}"
            ></span>
          </h2>
          <a
            href="{{ profile.url }}{{ profile.username }}"
            class="btn btn-outline-dark col-12"
            target="_blank"
            >{{ profile.name }}</a
          >
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
  {% endfor %}
</div>
