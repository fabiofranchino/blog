---
title: This is my weblog
layout: default
---

<section>
	<article>
		<ul id="index">
		  {% for post in site.posts %}
		    <li class="{{ post.style }}">
		      <a href="{{ post.url | prepend:site.baseurl }}">{{ post.title }} <span> - {{ post.subtitle }}</span></a>
		    </li>
		  {% endfor %}
		</ul>
	</article>
</section>

<footer>
	<a href="/index.html">About</a>
	<a href="https://twitter.com/fabiofranchino">Follow on Twitter</a>
	<a href="https://fabiofranchino.com/blog/feed.xml">RSS</a>
</footer>