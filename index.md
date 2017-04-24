---
title: This is my weblog
layout: default
---

<section>
	<article class="excerpt">
		{% for post in site.posts %}
		<div class="header {{ post.style }}">
            <a href="{{ post.url | prepend:site.baseurl }}">
                <div class="header_img">
                    <div class="header_wrap">
                        <div class="title">{{ post.title }}</div>
                        <div class="thumb">
                        {% if post.cover %}
                            <div><img src="assets/posts/{{ post.slug }}/{{ post.cover }}" /></div>
                        {% endif %}
                        </div>
                        <div class="date">{{ post.subtitle }}</div>
                    </div>
                </div>
            </a>
        </div>
        {% endfor %}
	</article>
</section>

<footer>
	<a href="/index.html">About</a>
	<a href="https://twitter.com/fabiofranchino">Follow on Twitter</a>
	<a href="https://fabiofranchino.com/blog/feed.xml">RSS</a>
</footer>