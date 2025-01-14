---
layout: default
title: Learning
permalink: /learning/
---

<div class="container" style="margin-top: 1em">
  <h2>Completed Courses</h2>
  <table class="table table-hover table-sm">
    <thead class="table-light">
      <tr>
        <th scope="col">Course Name</th>
        <th scope="col">Provider</th>
        <th scope="col">Education Hours</th>
        <th scope="col">Completion Date</th>
        <th scope="col">Certificate</th>
      </tr>
    </thead>
    <tbody>
      {% for course in site.data.learning %}
      <tr>
        <th scope="row">{{ course.name }}</th>
        <td>{{ course.provider }}</td>
        <td>{{ course.hours }}</td>
        <td>{{ course.date }}</td>
        <td>
          <a
            href="{{ site.baseurl }}/assets/files/{{ course.certificate-id }}.{{ course.certificate-extension }}"
            target="_blank"
            ><span class="fas fa-award"></span
          ></a>
        </td>
      </tr>
      {% endfor %}
    </tbody>
  </table>
</div>
