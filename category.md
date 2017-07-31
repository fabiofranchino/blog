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
                <div id="#{{ category_name | slugize }}"></div>
                
                <h2>{{ category_name }}</h2>
                <a name="{{ category_name | slugize }}"></a>
                {% for post in site.categories[category_name] %}
                <p>
                  <a href="{{ site.baseurl }}{{ post.url }}">{{post.title}}</a>
                  <span class="date">{{ post.date | date: "%B %-d, %Y"  }}</span>

                </p>
                {% endfor %}
            {% endfor %}

    </article>
</section>
