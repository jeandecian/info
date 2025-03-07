---
layout: default
title: Presentations
permalink: /presentations/
---

<div class="container" style="margin-top: 1em">
  <h2>Presentations</h2>
  <table class="table table-hover table-sm">
    <thead class="table-light">
      <tr>
        <th scope="col">Date</th>
        <th scope="col">Paper Title</th>
        <th scope="col">Conference</th>
        <th scope="col">Location</th>
        <th scope="col">Slides</th>
      </tr>
    </thead>
    <tbody>
      {% for presentation in site.data.presentations %}
      <tr>
        <th scope="row">{{ presentation.date }}</th>
        <td>{{ presentation.paper }}</td>
        <td>
          <a href="{{ presentation.conference-url }}" target="_blank"
            >{{ presentation.conference }}</a
          >
        </td>
        <td>{{ presentation.location }}</td>
        <td>
          <a
            href="{{ site.baseurl }}/assets/files/slides/{{ presentation.slides-id }}.pdf"
            target="_blank"
            ><span class="fas fa-file-pdf"></span
          ></a>
        </td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>
