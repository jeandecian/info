---
layout: default
title: Media
permalink: /media/
---

<div class="container" style="margin-top: 1em">
  <h3>Media</h3>
  <ul class="list-unstyled">
    {% for media in site.data.media reversed %}
    <li class="d-flex justify-content-between">
      <span>
        <b>[{{ media.date | date: "%Y"}}] "{{ media.title }}"</b>, {{
        media.source }}, {{ media.date | date: "%b %Y"}}. ({{ media.context }})
        <b>[{{ media.language }}]</b></span
      >
      <span class="text-end">
        [<a
          href="{{ media.url }}"
          class="link-dark link-underline-opacity-0 link-underline-opacity-75-hover"
          target="_blank"
          >📖 Read</a
        >]
      </span>
    </li>
    {% endfor %}
  </ul>
</div>
