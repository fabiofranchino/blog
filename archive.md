---
title: Archive
subtitle: All the shit in a list
layout: aggregate
permalink: /archive/
---

<section>
    <article class="list">

      	{% for post in site.posts %}
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
</section>
