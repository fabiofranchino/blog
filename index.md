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

	<article>
		<p>You might be interested browsing by <a href="categories">categories</a>, by <a href="tags">tags</a> or go straight to the <a href="archive">archive</a> page.</p>
	</article>
</section>

<footer>
	<a href="/index.html">About</a>
	<a href="https://twitter.com/fabiofranchino">Follow on Twitter</a>
	<a href="https://fabiofranchino.com/blog/feed.xml">RSS</a>
</footer>