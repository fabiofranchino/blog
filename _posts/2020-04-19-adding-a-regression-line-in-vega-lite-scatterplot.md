---
title: Adding a regression line in Vega-Lite scatterplot
date: 2020-04-19 07:00:00 +0100
subtitle: 19th April, 2020
style: blue
cover: cover.svg
categories: Tutorials
tags: [tutorial, vega-lite, regression, scatterplot]
---

In my current [journey on Vega-Lite](/blog/a-first-vega-lite-specs-dive/) grammar, today I've learned how to add a graphic line over a scatterplot, that might show a linear regression.

First, we need to exploits the `layer` capability of Vega-Lite. This is the way to compose non standard chart.

Suppose we have this dataset:

```json
"values": [
  {"a": 23, "b": 28}, {"a": 12, "b": 55}, {"a": 3, "b": 43},
  {"a": 56, "b": 91}, {"a": 11, "b": 81}, {"a": 34, "b": 53},
  {"a": 32, "b": 19}, {"a": 41, "b": 87}, {"a": 53, "b": 52}]
```

And we plot its values with:

```json
{
  "mark": "point",
  "encoding": {
    "x":{
      "type":"quantitative", 
      "field": "a"
    },
    "y":{
      "type": "quantitative",
      "field":"b"
    }
  }
}
```

Now we want to add a line element, thus, we use `layer` to include both the scatterplot and the line:

```json
"layer":[{
  "mark": "point",
  "encoding": {
    "x":{
      "type":"quantitative", 
      "field": "a"
    },
    "y":{
      "type": "quantitative",
      "field":"b"
    }
  }
},
{
  "mark":{
    "type":"line",
    "color":"purple"
  }
}
]
```

Now we need to calculate the coordinates (using the `regression` transform) and encode the line properties using the new dataset:

```json
{
  "mark":{
    "type":"line",
    "color":"purple"
  },
  "transform":[{
    "regression": "b",
    "on": "a"
  }],
  "encoding": {
    "y":{
      "field":"b",
      "type":"quantitative"
    },
    "x":{
      "field":"a",
      "type":"quantitative"
    }
  }
}
```

Here the result:

![](/blog/assets/posts/adding-a-regression-line-in-vega-lite-scatterplot/cover.svg)

And the [full source code](https://vega.github.io/editor/#/url/vega-lite/N4KABGBEDuCWAmAXAFpAXGAbABmwGnCngENFj0xQIJIA3YgGwFcBTAZwoG1DrLJyMAJgDMeKACMKggBwBfMcH4UAjILGRJGAKxb5fAWFESKAFmHye1RQa2Z1msAE5le6yuX2K0lwqUZhJp7a5gS8EG7+asYYyo6ufmAmHtFg0gDs8TZGGhRagrIAuoQWNAzEAJ4sAE7onFRhkAC2xFUA1hSQAA4A9rAAdoiQoQ0sfQDG3fD9AOYU9WFQAB7o8wtQiOWdLOiQAI5MxAOwZIiwtNtilguQAGawLAzwHeRX1CVrkOUrr7yQG1sdfaHU4nM4XH7UW73R47SQQ2SvBG8d7hV5NFrtNCrX7-bZoSAMfrgtZQCYMbo1fGdJhVToMbaI4Y4qqHNg3CmNWrYyFVFjTXlsNiwbp9DqSJkNEXPSCIgoSmijCZTPqzDDcmhfLEQmh3B5PfHi7XrTZ4vYHI6g84ykkohrLLUknXQ-VKeUNXE7IEW0hg61rJFhAMQANFWRAA).

