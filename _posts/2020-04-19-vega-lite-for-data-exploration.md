---
title: Vega-Lite for data exploration
date: 2020-04-19 07:00:00 +0100
subtitle: 19th April, 2020
style: blue
cover: 04.svg
categories: Tutorials
tags: [tutorial, vega-lite, data, exploration, scatterplot]
---

This is a follow-up of my [previous post](/blog/a-first-vega-lite-specs-dive/) dedicated to Vega-Lite.

I want to make practice on Vega-Lite using the Sochi Olympics Game dataset that contains all the athletes information.

Making a scatterplot with Vega-Lite is, [after a bit of exercise](/blog/a-first-vega-lite-specs-dive/), dead simple.

Let's try to refine more in order to make it useful for data exploration.

## Athletes weight/height

I want to show the athletes distribution according to height/weight properties, a perfect task for a scatterplot:

```json
{
  "$schema": "https://vega.github.io/schema/vega-lite/v4.json",
  "width": 400,
  "data": {
    "url": "https://fabiofranchino.com/disk/datasets/athletes_sochi.csv",
    "format":{
       "type": "csv"
    }
  },
  "mark": "point",
   "encoding": {
     "x":{
       "type":"quantitative", "field": "weight"
     },
     "y":{
        "type":"quantitative", "field": "height"
     }
   }
}
```

![](/blog/assets/posts/vega-lite-for-data-exploration/01.svg)

Since there are some missing values, I want to filter out the data points with missing height and weight, adding a filter in the transform array:

```json
"transform": [
  {
    "filter": "datum.weight > 0 && datum.height > 0"
  }
]
```

![](/blog/assets/posts/vega-lite-for-data-exploration/02.svg)

A filter can be also a list of filters, which is much more readable:

```json
"transform": [
  {
    "filter": "datum.weight > 0"
  },
  {
    "filter": "datum.height > 0"
  }
]
```

By adding one more filter we can show only a specific country:

```json
{
  "filter": "datum.country === 'Italy'"
}
```

![](/blog/assets/posts/vega-lite-for-data-exploration/03.svg)

But now I want to manipulate the scale of the x axis because a lot of space is not user by the scatterplot. We can set a different domain per single encoding:

```json
"x":{
  "type":"quantitative", 
  "field": "weight",
  "scale":{
    "type":"linear",
    "domain":[45, 105]
  }
},
"y":{
  "type":"quantitative", "field": "height",
  "scale":{
    "type":"linear",
    "domain":[1.5, 2]
  }
}
```

![](/blog/assets/posts/vega-lite-for-data-exploration/04.svg)

So far so good. 

I've tried to compute the domain dinamically without success. Let's see if it'll be something feasible in next attempts.

## Gender

Now, I want to show the gender comparison using a donut chart.

The first thing to do is transforming the dataset in order to have the useful values for the encoding part, thus, here an `aggregate` transform to do that:

```json
"transform": [{
  "aggregate": [{
    "op": "count",
    "field": "name",
    "as": "num" 
  }],
  "groupby": ["gender"]
}]
```

Then, let's add the `mark` compatible with the graphic element we want to create:

```json
"mark":{
  "type": "arc",
  "innerRadius": 40
}
```

And finally, the `encoding` that uses the new calculated property `num`:

```json
"encoding": {
  "theta": {
    "type": "quantitative",
    "field": "num"
  },
  "color":{
    "type":"nominal",
    "field": "gender" 
  } 
}
```

![](/blog/assets/posts/vega-lite-for-data-exploration/05.svg)

Full source code [here](https://vega.github.io/editor/#/url/vega-lite/N4KABGBEAkDODGALApgWwIaQFxUQFzwAdYsB6UgN2QHN0A6agSz0QFcAjOxge1IRQyUa6ALQAbZskoAWOgCtY3AHaQANOCgB3RgBMW2MADYADMfURIO9Hkw5QEC6wBOYg5HxES5AGbp2Pbyd0JSRGJW46eG5UUh1GWABrWOt0WGQ8WFJrRDF05FgAfUVQyNgKNQ0Lb24nDDxsewcHSDwAT0JkN3gyyEqwAF8NfvMoPCClWGragwBtRot0amonYTxOnDm+i25CLu5WJXqRpshvRmQxHTcldFRO4+bU69ZUSDA+-oBdB8hl-cJ2K1Zr9kEodMgnJBPkNvhpIBgnAkGn0Wu11lB0E54BUTmElBCAEroOKsWAGaTGIYjSCgqJxJTUAzzCwsdK2MDM5ptDpuACOrGCeGY1kYVBxTSq50uz1eW2GW0gUTENWREpZaOwkHCqDC6FcD2aZwuVxwILBELecveEEG-SAA).

There is still something I want to add, that is a label close to each slice. Since it's something we need to add further, let's use the `layer` capability to achieve the desired result. Let's add an additional `mark`

```json
"layer": [
  {"mark": {"type": "arc", "innerRadius": 40}},
  {
    "mark": {"type": "text", "radius": 120},
    "encoding": {"text": {"field": "gender", "type": "nominal"}}
  }
]
```

And we need to move the `encoding` of the `arc` outside the `layer`:

```json
"encoding": {
  "theta": {"type": "quantitative", "field": "num", "stack": true},
  "color": {"type": "nominal", "field": "gender"}
},
"layer": [
  {"mark": {"type": "arc", "innerRadius": 40}},
  {
    "mark": {"type": "text", "radius": 120, "color":"black"},
    "encoding": {"text": {"field": "gender", "type": "nominal"}}
  }
]
```

![](/blog/assets/posts/vega-lite-for-data-exploration/06.svg)

[Source code.](https://vega.github.io/editor/#/url/vega-lite/N4KABGBEAkDODGALApgWwIaQFxUQFzwAdYsB6UgN2QHN0A6agSz0QFcAjOxge1IRQyUa6ALQAbZskoAWOgCtY3AHaQANOCgB3RgBMW2MADYADMfURIO9Hkw5QEC6wBOYg5HxES5AGbp2Pbyd0JSRGJW46eG5UUh1GWABrWOt0WGQ8WFJrRDF05FgAfUVQyNgKNQ0Lb24nDDwDYEg8AE9CZDd4MsgAXw1u8yg8IKVYatqDAG1KsHsHC3RqaidhPHacCcbuQg7uViV61ShvRmQxHTcldFR2w8hUi9ZUHoBdAbnIJd3CdmbJj+QlDpkE5IM9pr0IK8NJAAVE4kpqA1pk0UDYGk1WmsoABHVjBPDMayMKhqI4nM4PJ63WA2eAJAxDVjIfrIqJiGrolptC7RMLoVy3Y6nc44f6A4E9PoDSBidDNCXraaNDBOel2DHc0XoJzwUmQMJKYEAJXQcVYsAM0mM3RZc1m7xVapmGqxTWQAA8DlAgmaLTgAIwAJjMUDZHKwkHYsrpPTeDhhIW48MR6tWnoM0ztkCFFNF1ABQJBty5rvCqD5rghczAVYgVbB3SAA)

A couple of note here. I make it to work following [this](https://vega.github.io/vega-lite/examples/layer_arc_label.html) example from the official website, where I've learned two mandatory things:

- Moving the `encoding` outside the `layer`
- Using the `stack` property in the `theta`

Not sure if I really understand the logic behind, maybe it's something I'll see later.

While I couldn't be able to change the text color even using the valid property in the `mark` definition. Again, not sure if it's a bug or something that needs to be done in a different way.

Again, so far, so good.

