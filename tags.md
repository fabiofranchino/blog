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
          
          {% assign count = 0 %}
          {% for post in posts %}
            {% if post.tags contains t %}
              {% assign count = count | plus: 1 %}
            {% endif %}
          {% endfor %}
        

            <h2 id="{{ t | slugize }}" class="aggr_togg">{{ t | downcase }} ({{count}})<span class="sign"></span></h2>
            <div class="aggr_cont">
            {% for post in posts %}
              {% if post.tags contains t %}
              <p>
                <a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a>
                <span class="date">{{ post.date | date: "%B %-d, %Y"  }}</span>
              </p>
              {% endif %}
            {% endfor %}
            </div>
            
        {% endfor %}




    </article>
</section>
