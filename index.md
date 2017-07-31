---
title: This is my weblog
layout: default
---

<section>
	<article class="excerpt">
		{% for post in site.posts %}
        {% include post_item.html %}
        {% endfor %}
	</article>
</section>

<footer>
	<a href="/index.html">About</a>
	<a href="https://twitter.com/fabiofranchino">Follow on Twitter</a>
	<a href="https://fabiofranchino.com/blog/feed.xml">RSS</a>
</footer>