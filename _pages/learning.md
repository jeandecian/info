---
layout: default
title: Learning
permalink: /learning/
---

<div class="container" style="margin-top: 1em">
  <div class="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-3 g-2">
    {% assign recent = 'now' | date: '%s' | minus: 2592000 %} {% for course in
    site.data.learning %} {% assign course_date = course.date | date: '%s' |
    plus: 0 %}
    <div class="col">
      <div class="card mb-3" style="border-radius: 22px">
        <div class="card-body">
          <h6 class="card-title">{{ course.name }}</h6>
          <p class="card-text mb-2">{{ course.provider }}</p>
          {% if course_date > recent %}
          <span
            class="badge rounded-pill bg-white text-danger border border-danger border-2"
            >New</span
          >
          {% endif %} {% if course.hours %}
          <span
            class="badge rounded-pill bg-white text-dark border border-dark border-2"
            ><span class="far fa-clock"></span> {{ course.hours }}h</span
          >
          {% endif %}
          <a
            class="badge rounded-pill bg-white text-primary border border-primary border-2"
            href="{{ site.baseurl }}/files/{{ course.certificate-id }}.{{ course.certificate-extension }}"
            role="button"
            target="_blank"
            ><span class="fas fa-certificate"></span> Certificate</a
          >
          {% if course.certificate-verification-url %}
          <a
            class="badge rounded-pill bg-white text-success border border-success border-2"
            href="{{ course.certificate-verification-url }}{{ course.certificate-id }}"
            role="button"
            target="_blank"
            ><span class="fas fa-passport"></span> Verify</a
          >
          {% endif %}
        </div>
      </div>
    </div>
    {% endfor %}
  </div>
</div>
