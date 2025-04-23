---
layout: default
title: Presentations
permalink: /presentations/
---

<div class="container" style="margin-top: 1em">
  <h2>Presentations</h2>
  <ul class="list-unstyled">
    {% for presentation in site.data.presentations %}
    <li>
      [{{ presentation.date }}] "<b>{{ presentation.paper }}</b>" at
      <i
        ><a
          href="{{ presentation.conference-url }}"
          class="link-dark link-underline-opacity-0 link-underline-opacity-75-hover"
          target="_blank"
          >{{ presentation.conference }}</a
        ></i
      >
      in {{ presentation.location }}. [📑
      <a
        href="{{ site.baseurl }}/files/slides/{{ presentation.slides-id }}.pdf"
        class="link-primary link-underline-opacity-0 link-underline-opacity-75-hover"
        target="_blank"
        >Slides</a
      >]
    </li>
    {% endfor %}
  </ul>
</div>
