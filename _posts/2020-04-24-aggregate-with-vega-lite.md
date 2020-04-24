---
title: Aggregate with Vega-Lite
date: 2020-04-24 07:00:00 +0100
subtitle: 24th April, 2020
style: blue
cover: 04.svg
categories: Tutorials
tags: [tutorial, vega-lite, data, exploration, chart]
---

This post is a follow-up of my Vega-Lite journey you can start reading from [here](/blog/vega-lite-for-data-exploration/).

I'm using the same dataset to stress-test my abilities with Vega-Lite.

Now, I want to explore the dataset using different aggregation types. As a reminder, the dataset is about the athletes information of the Sochi Winter Olympic Games.

I want to see the age distribution. Vega-Lite allows to add an handy `aggregate` function within the encoding, such as:

```json
"y":{
  "aggregate": "count",
  "field": "name",
  "type": "quantitative"
}
```

This way I can count all the athletes belonging to a [specific age](https://vega.github.io/editor/#/url/vega-lite/N4KABGBEAkDODGALApgWwIaQFxUQFzwAdYsB6UgN2QHN0A6agSz0QFcAjOxge1IRQyUa6ALQAbZskoAWOgCtY3AHaQANOCgYATgGtsYUBAiQ8AT0LJskdui1qoebtzF5GhbHi2tkYDQF91YwATdDxMLEMjSFYtMX1IfCIScgAzdHYeFK10JSRGJW46eG5UUiDGWB0y0PRYZDxYUlDEMXrkWAB9RTyi2ApIf0CoZFzucqVqfUioAA9saeMUxmQxIPj0akshqLMLeILUfPQ47eNFLTx4uY0wAJvIU3mb4w3qLWE8SxxIYtYlS9OUCWKzW3yU6FQW2eDnMXygAEdWDlXGFXFQBkY-P4QH4gA):

![](/blog/assets/posts/aggregate-with-vega-lite/01.svg)

Now, if I want to change the aggregation field, let's say, [by sport](https://vega.github.io/editor/#/url/vega-lite/N4KABGBEAkDODGALApgWwIaQFxUQFzwAdYsB6UgN2QHN0A6agSz0QFcAjOxge1IRQyUa6ALQAbZskoAWOgCtY3AHaQANOCgYATgGtsUdui1qNkACbo8mLKAgRIrLWP2R8REuQBm6dj09b0JSRGJW46eG5UUjNGWB1oy3RYZDxYUktEMRTkWAB9RWDw2ApIDQBfdQhTZCDuGKVqfVt7AA9sZrtIT0ZkMTMXCNYlPC0ATxM7ezxRwmQXUNQQ9GdKychFLTwXEXGNMAq9yHGbPft0amotYTw5rEhB4Ym17t7+nEgldFQ51c7p2ZcAEdWIE8MxLIwqE8-swsi4AIIsLI3WClOxlcogMpAA):

```json
"y":{
  "aggregate":"count",
  "field": "name",
  "type": "quantitative",
  "title": "Athletes"
}
```

![](/blog/assets/posts/aggregate-with-vega-lite/02.svg)

Now I can add a further dimension, using the `color` to encode the [countries](https://vega.github.io/editor/#/url/vega-lite/N4KABGBEAkDODGALApgWwIaQFxUQFzwAdYsB6UgN2QHN0A6agSz0QFcAjOxge1IRQyUa6ALQAbZskoAWOgCtY3AHaQANOCgYATgGtsUdui1qNkACbo8mLKAgRIrLWP2R8REuQBm6dj09b0JSRGJW46eG5UUjNGWB1oy3RYZDxYUktEMRTkWAB9RWDw2ApIDQBfdQhTZCDuGKVqfVt7AA9sZrtIT0ZkMTMXCNYlPC0ATxM7ezxRwmQXUNQQ9GdKychFLTwXEXGNMAq9yHGbPft0amotYTw5rEhB4Ym17t7+nEgldFQ51c7p2ZcAEdWIE8MxLIwqE8-swsi4AIIsLI3WClOwHToRMTcYwnSZQF59FywQg4ra-KYzW4fSJLZx7MrlEBlIA):

```json
"color":{
  "field": "sport",
  "type":"nominal"
}
```

![](/blog/assets/posts/aggregate-with-vega-lite/03.svg)

Now, time to show the medals. Here the histogram that shows the medals won by each country with the [gender evidence](https://vega.github.io/editor/#/url/vega-lite/N4KABGBEAkDODGALApgWwIaQFxUQFzwAdYsB6UgN2QHN0A6agSz0QFcAjOxge1IRQyUa6ALQAbZskoAWOgCtY3AHaQANOCgYATgGtsYUBAiQ8AT0LJskdui1qoebtzF5GhbHi2tkGgL7rjABN0PEwsQyNIVi0xfUh8IhJyADN0dh5krXQlJEYlbjp4blRSQMZYHVKQ9FhkPFhSEMQxOuRYAH1FXMLYCkg-ALANSGQc7jKlan0IqAAPbBnjZMZkMUC4otYlT1M1DUizCzjuLQn0WMHIxS08OJFd-f99yF3w-eN0amotYTxLHEgsFYqD2RiWKzWcUcoTE7VQyGCYlgoLBJnM-ygAEdWNlXKFXFQUQdmC04gBZBHnZGPS6QIpiE7Td5QZardYA6ijQLIOyXYyHDGQfKoPLnInGBDnf6LSKBYroPLYADakDJUvskAAYmh1QBdPmRLKTf4q9hibwan7rXXM3yPPwgXxAA) as well:

```json
"color": {
  "field": "gender",
  "type": "nominal",
  "scale":{
    "domain":["Male", "Female"],
    "range":["blue", "red"]
  }
}
```

![](/blog/assets/posts/aggregate-with-vega-lite/04.svg)

If I want to filter out the countries [with zero medals won](https://vega.github.io/editor/#/url/vega-lite/N4KABGBEAkDODGALApgWwIaQFxUQFzwAdYsB6UgN2QHN0A6agSz0QFcAjOxge1IRQyUa6ALQAbZskoAWOgCtY3AHaQANOCgYATgGtsYUBAiQ8AT0LJskdui1qoebtzF5GhbHi2tkGgL7rjABN0PEwsQyNIVi0xfUh8IhJyADN0dh5krXQlJEYlbjp4blRSQMZYHVKQ9FhkPFhSEMQxOuRYAH1FXMLYCkg-AIcspVhk7i1UfQBtDQgIo2NkxhdkOxxIYLxWVDpHULF21GRgsVgwAD4wAAZ+hd8NAF1ByGQc7jKlan15yAAPbHmi0YyDEgTiRVYSk8pjUs2MZgscXGH3QsUGkUUWjwcREMNm-lmkBh4ThUHQ1GoWmEeEs61g21hCygSxBYPWe1Rh2OqNgjIWJnMtKgAEdWNlXKFXFQ+ZEJS04gBZbmnW4QAmRIpicbfUmQFmguLUV6BVYy+GCuL5VB5VFmqAIVG0wGRQLFdB5bBTSAKx32SAAMTQvqepOMwyNnusYm8fqpYIepPuRiTYHuviAA), just add a `filter` in the `transform` array:

```json
"transform": [
  {
    "filter": "datum.total_medals > 0"
  }
]
```

![](/blog/assets/posts/aggregate-with-vega-lite/05.svg)

My next wish would be to create a stacked barchart showing the three type of medals won by each country. In the dataset those props are on three different columns, because a single athlete might won more than one metal type. If they were on a single column, by making the dataset more stacked, it'd be strightforward in Vega-Lite.

Unfortunately, with my dataset structure, it looks like much more complicated. I've made a couple of (failed) attempts, meaning I need to deep dive more on it. Stay tuned for the next updates.