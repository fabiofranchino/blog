---
title: promise
subtitle: Posts tagged with promise - back to <a href="/blog/tags">tags</a>
layout: aggregate
permalink: /tag/promise
---

<section>
    <article class="list">


{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}

{% assign tag_words = site_tags | split:',' | sort %}

{% capture this_word %}{{ "promise" }}{% endcapture %}

{% for post in site.tags[this_word] %}
  {% if post.tags contains this_word %}
  <p>
    <a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a>
    <span class="date">{{ post.date | date: "%B %-d, %Y"  }}</span>
  </p>
  {% endif %}
{% endfor %}


    </article>
</section>
