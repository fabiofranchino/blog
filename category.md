---
title: Categories
subtitle: List of posts by Categories
layout: aggregate
permalink: /categories/
---

<section>
    <article class="list">
        
            {% for category in site.categories %}
                {% capture category_name %}{{ category | first }}{% endcapture %}
                
                <h2 id="{{ category_name | slugize }}" class="aggr_togg">{{ category_name }} <span class="sign"></span></h2>
                <div class="aggr_cont">
                {% for post in site.categories[category_name] %}
                <p>
                  <a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a>
                  <span class="date">{{ post.date | date: "%B %-d, %Y"  }}</span>

                </p>
                {% endfor %}
                </div>
            {% endfor %}

    </article>
</section>
