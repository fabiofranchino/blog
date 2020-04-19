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
"data": {
  "values": [
    {"a": "A", "b": 28}, {"a": "B", "b": 55}, {"a": "C", "b": 43},
    {"a": "D", "b": 91}, {"a": "E", "b": 81}, {"a": "F", "b": 53},
    {"a": "G", "b": 19}, {"a": "H", "b": 87}, {"a": "I", "b": 52}]
}
```

And we plot its values with:

```json
{
  "mark": "point",
  "encoding": {
    "x":{
      "type":"nominal", 
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
      "type":"nominal", 
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
    "on": "b"
  }],
  "encoding": {
    "y":{
      "field":"b",
      "type":"quantitative"
    },
    "x":{
      "field":"b",
      "type":"quantitative"
    }
  }
}
```

Here the result:

![](/blog/assets/posts/adding-a-regression-line-in-vega-lite-scatterplot/cover.svg)

And the [full source code](https://vega.github.io/editor/#/url/vega-lite/N4KABGBEDuCWAmAXAFpAXGAbABmwGnCngENFj0xQIJIA3YgGwFcBTAZwoG1DrLJyMkAIKQ8UAEYUATAA4AvmOD8KkAEKiJFAKxaFfAVADCGyJIwAWAMwKe1JQcgARE2bABOAIx77KgKIuKGS9FZUEAMQCMLWsCXggfQQBxSLAPN29QqAAJFJkAdgyHAEkUrSk5AF1CGxoGYgBPFgAndE4qOMgAW2ImgGsVAAcAe1gAO0RRWxoWUYBjIfgxgHMKdrioAA90NfWoRHqBlnRIUaHOscYNKY6AM1gWBngVcmuIGt3Ieu3X6kh9w5UAEcmMRxrAyIhYLQjrFdjQ7g8nmhTJAfnJrujeO94tcuj1+mgdrw-gcjsiGGMYT9IPMGEMWsiBkwmgMGEcMbDiYgmqC2Dd6Z1WkTfk0WEtRWw2LAhqMVJJOR0ZXLUetKgrpnMFstVtSvoSfvD7o9jvKDXtScdgaDIRCoey4diOlt9XDDYiTZNXeaAcirWDbdCVbtMXEQ29CFU5EA).