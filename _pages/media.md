---
layout: default
title: Media
permalink: /media/
---

<div class="container" style="margin-top: 1em">
  <h2>Media</h2>
  <table class="table table-hover table-sm">
    <thead class="table-light">
      <tr>
        <th scope="col">Date</th>
        <th scope="col">Title</th>
        <th scope="col">Language</th>
        <th scope="col">URL</th>
      </tr>
    </thead>
    <tbody>
      {% for media in site.data.media reversed %}
      <tr>
        <th scope="row">{{ media.date }}</th>
        <td>{{ media.title }}</td>
        <td>{{ media.language }}</td>
        <td>
          <a href="{{ media.url }}" target="_blank"
            ><span class="fas fa-link"></span
          ></a>
        </td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>
