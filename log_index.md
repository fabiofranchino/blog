---
title: Logs
subtitle: All the logs in a list
layout: aggregate
permalink: /log/index.html
---

<section>
  <article class="list">
    {% for post in site.log %}
        
        {% unless post.next %}
          <h2>{{ post.date | date: '%Y %b' }}</h2>
        {% else %}
          {% capture year %}{{ post.date | date: '%Y %b' }}{% endcapture %}
          {% capture nyear %}{{ post.next.date | date: '%Y %b' }}{% endcapture %}
          {% if year != nyear %}
            <h2>{{ post.date | date: '%Y %b' }}</h2>
          {% endif %}
        {% endunless %}

        <p class="{{ post.style }}">
          <a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a>
          <span class="date">{{ post.date | date: "%B %-d, %Y"  }}</span>
        </p>

    {% endfor %}
  </article>

  <article>
    <p>You might be interested also browsing my <a href="/blog">blog</a> by <a href="/blog/categories">categories</a>, <a href="/blog/tags">tags</a> or <a href="/blog/archive">dates</a>.</p>
  </article>
</section>

