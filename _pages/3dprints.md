---
layout: collection
title: "3D Prints"
permalink: /3dprints/
---
<style>
.gallery-container {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  padding: 20px;
}

.gallery-item {
  text-align: center;
  max-width: 200px;
}

.gallery-item img {
  width: 100%;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.gallery-item img:hover {
  transform: scale(1.05);
}
</style>

<div class="gallery-container">
  {% for post in site.posts %}
    {% if post.categories contains "3dprints" %}
      <div class="gallery-item">
        <a href="{{ post.url | relative_url }}">
          <img src="{{ post.image_path | relative_url }}" alt="{{ post.title }}">
        </a>
        <p>{{ post.title }}</p>
      </div>
    {% endif %}
  {% endfor %}
</div>
