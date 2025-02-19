---
layout: default
title: Learning
permalink: /learning/
---

<div class="container" style="margin-top: 1em">
  <div class="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-xl-3 g-3">
    {% assign recent = 'now' | date: '%s' | minus: 2592000 %} {% for course in
    site.data.learning %} {% assign course_date = course.date | date: '%s' |
    plus: 0 %}
    <div class="col">
      <div class="card mb-3" style="border-radius: 22px">
        <div class="card-body">
          <div class="row">
            <div class="col">
              <p class="text-body-secondary d-flex align-items-center">
                {% if course_date > recent %}
                <span
                  class="badge rounded-pill bg-white text-success border border-success border-2 me-1"
                  >New</span
                >
                {% endif %}{{ course.date }}
              </p>
            </div>
            <div class="col text-end">
              {% if course.hours %}
              <p class="text-body-secondary">
                <span class="far fa-clock"></span> {{ course.hours }}
              </p>
              {% endif %}
            </div>
          </div>
          <h5 class="card-title">{{ course.name }}</h5>
          <p class="card-text">{{ course.provider }}</p>
          <a
            class="btn btn-dark"
            href="{{ site.baseurl }}/assets/files/{{ course.certificate-id }}.{{ course.certificate-extension }}"
            role="button"
            target="_blank"
            ><span class="fas fa-certificate"></span> Certificate</a
          >
          {% if course.certificate-verification-url %}
          <a
            class="btn btn-primary"
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
