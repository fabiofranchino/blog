---
title: Tags
subtitle: List of posts by Tags
layout: aggregate
permalink: /tags/
---

<section>
    <article class="list">
        {% for tag in site.tags %}
          {% assign t = tag | first %}
          {% assign posts = tag | last %}

            <h2>{{ t | downcase }}</h2>
            
            {% for post in posts %}
              {% if post.tags contains t %}
              <p>
                <a href="{{ post.url }}">{{ post.title }}</a>
                <span class="date">{{ post.date | date: "%B %-d, %Y"  }}</span>
              </p>
              {% endif %}
            {% endfor %}
            
        {% endfor %}




    </article>
</section>
