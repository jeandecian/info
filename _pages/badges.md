---
layout: default
title: Badges
permalink: /badges/
---

<div class="container" style="margin-top: 1em">
  <h2>Badges</h2>
  {% for host in site.data.badges %}
  <h3>{{ host.name }} ({{ host.badges | size }})</h3>
  {% for badge in host.badges %}
  <div
    data-iframe-width="150"
    data-iframe-height="270"
    data-share-badge-id="{{ badge.id }}"
    data-share-badge-host="{{ host.url }}"
  ></div>
  {% endfor %} {% endfor %}
</div>
