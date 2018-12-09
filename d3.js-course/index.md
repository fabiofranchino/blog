---
title: Adventures in Data Visualization
layout: default
last_modified_at: 2017-08-11
permalink: d3-viz-course/index
---

<section>

    <article class="list">
    
    	<h1>Adventures in Data Visualization</h1>
    	
    	<h2>Table of content</h2>
    	
    	{% for page in site.pages %}
    	  {% if page.categories contains 'adv' %}
    	      <p>
    	        <a href="{{ site.baseurl }}{{ page.url }}">{{page.title}}</a>
    	      </p>
    	  {% endif %}
    	{% endfor %}
    
    </article>
</section>
