---
title: Tags
subtitle: List of posts by Tags
layout: aggregate
permalink: /tags/
---

<section>
    <article class="list">

<!-- Get the tag name for every tag on the site and set them
to the `site_tags` variable. -->
{% capture site_tags %}{% for tag in site.tags %}{{ tag | first }}{% unless forloop.last %},{% endunless %}{% endfor %}{% endcapture %}

<!-- `tag_words` is a sorted array of the tag names. -->
{% assign tag_words = site_tags | split:',' | sort %}

{% for item in (0..site.tags.size) %}{% unless forloop.last %}
  {% capture this_word %}{{ tag_words[item] }}{% endcapture %}

  <h2 id="{{ this_word | slugize }}" class="aggr_togg">{{ this_word | downcase }} ({{ site.tags[this_word].size }}) <span class="sign"></span></h2>

  <div class="aggr_cont">
    {% for post in site.tags[this_word] %}
      {% if post.tags contains this_word %}
      <p>
        <a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a>
        <span class="date">{{ post.date | date: "%B %-d, %Y"  }}</span>
      </p>
      {% endif %}
    {% endfor %}
    <p class="perma"><a href="{{ site.baseurl }}/tag/{{ this_word | slugize }}">permalink</a></p>
  </div>
    
{% endunless %}{% endfor %}


    </article>
</section>
