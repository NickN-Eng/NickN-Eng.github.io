---
layout: collection
title: Coding Projects
permalink: /projects/
---

<style>
.project-item {
    display: flex;
    flex-direction: row;
    margin-bottom: 1em;
    align-items: center;
    clear: both;
    display: flex;
  }
  
.project-image {
    flex: 0 0 auto;
    margin-right: 1rem;
    float: left;
    width: 170px;
    height: 170px;
    // margin-right: 1em;
  }
  
  .project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .project-content {
    align-self: center;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  }

  .project-content h2 {
    margin-top: 0;
  }

  .project-content p {
    margin-top: -2px;
    margin-bottom: -6px
  }
</style>
<script>
window.onload = function() {
    var paragraphs = document.getElementsByTagName('p');
    for (var i = 0; i < paragraphs.length; i++) {
        if (paragraphs[i].innerHTML.replace(/\s+/, '') == '') {
            paragraphs[i].parentNode.removeChild(paragraphs[i]);
        }
    }
}
</script>

<div class="projects">
  {% assign sorted_projects = site.projects | sort: 'rank' %}
  {% for project in sorted_projects %}
    <div class="project-item">
        <div class="project-image">
            <img src="{{ project.image_path | relative_url }}" alt="{{ project.title }}">
        </div>
        <div class="project-content">
            <h2><a href="{{ project.link }}">{{ project.title }}</a></h2>
            <p>{{ project.content | markdownify }}</p>
        </div>
    </div>
    <div class="gap" style="height: 20px;"></div>
  {% endfor %}
</div>
