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
      [{{ presentation.date }}] Presented "<b>{{ presentation.title }}</b>" at
      the
      <i
        ><a
          href="{{ presentation.event-url }}"
          class="link-dark link-underline-opacity-0 link-underline-opacity-75-hover"
          target="_blank"
          >{{ presentation.event }}</a
        ></i
      >
      in {{ presentation.location }}. [📑
      <a
        href="{{ site.baseurl }}/files/presentation/{{ presentation.file }}"
        class="link-primary link-underline-opacity-0 link-underline-opacity-75-hover"
        target="_blank"
        >{{ presentation.type }}</a
      >]
    </li>
    {% endfor %}
  </ul>
</div>
