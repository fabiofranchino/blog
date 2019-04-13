---
title: Get the SVG right from Illustrator
date: 2019-04-13 10:00:00 +0100
subtitle: 13th April, 2019
style: blue
categories: Tutorials
tags: [tutorial, svg, illustrator]
---

I usually teach in my computational design class the **benefits** of the SVG format as a way to **lower the barriers** in the creative coding field.

Indeed, I teach my students that they can **draw assets** in Adobe Illustrator to transform them in **interactive** and **dynamic** compositions using a programming language, javascript for instance.

The SVG format is a structured and hierarchical (scene-graph) document that can be nicely manipulated through code within the browser.

This is the process (simplified):

- draw something on Illustrator 
- export it in SVG
- put it in the browser and start playing with it through javascript

To achieve that, a drawn composition needs to be exported to make it compatible with the coding environment. 

> Unfortunately, exporting an SVG is not a seamless process, even these days.

Different tools produce different markup. Adobe Illustrator, by far, is the most reliable and predictable tool in terms of generated SVG. There are some quirks, though, that I want to highlight here.

## Two exporters

There are two distinct ways to generate an SVG from an Illustrator document. Indeed, for some unknown reasons, it has two exporters.

You can **Save As** a document in an SVG format and you can **Export As** to do the same. Both produce an SVG but the  markup can be pretty different and there are PRO's and CON's for each option.

## The "Save As" SVG

This is the most obvious command and it's the one I used (and **struggled**) for a long time. Here the review:

PRO'S:

- You can use the SVG as the main source since it tries to include all the elements
- The artboard size is the default way to define the SVG size
- outside and hidden elements are preserved, this can be useful in some situation

CON'S:
- **Layer name can be messed up** very easily, just duplicating already named element to enter in what I call the **naming-hell** where it's almost impossible to fix unless starting over the document.
- **Mask is messed too**, names are ignored, using unpredictable internal encoding names. Furthermore, it breaks the hierarchy of the elements every time the file is re-open for further edits. Another problem is that clip-path id and element id are on the same element making impossible to manipulate only one (the mask or the content) independently.
- Gradients have same name issues as the masks
- outside and hidden elements are preserved, this can be an issue in some situation

## The "Export As" SVG

PRO'S:
- layer name conflict works much well because it can be predictable and fixable within illustrator, conflicted names bring the original string in a data-name attribute, that means we can exploit to have a sort-of classification for multiple items
- the mask works as expected, structure and name are respected and is predictable and fully exploitable with code
- you can use artboards to export multiple SVGs, sometime might be useful
- outside and hidden elements are not exported by default, this can be a PRO in some situations

CON'S:
- outside artboard elements and hidden elements are not exported in the SVG, this can be a CON if you plan to have already outside positioned element or already hidden element that will be brought to life through code
- there is the option to keep the outside element in the exported version, exporting the whole doc instead of the artboards, but still, the hidden elements are skipped and the viewBox is increased according to the bounding-box of all the elements, again, not predictable size.
- elements within the artboard with opacity=0 are included in the export, at least.
- an element that is outside the artboard but a descendant of an object that is inside the artboard will be skipped in the exported version.
- you need to export for any change instead to just save, a slower process
- it includes a title tag that shows an annoying tooltip in the browser, it can be disabled with CSS though.

## The Winner

It's difficult to declare a real winner but considering the better trade-off, the **Export As** is the most reliable and predictable, that is the most important thing in the integration field. Export As would be almost perfect if it weren't for the way it optiomize the SVG excluding hidden or artboard-outside elements.

These are some rules to remember when exporting an SVG with "Export As" in Illustrator that can ease the process:
- Everything needs to be within the artboard
- Everything needs to be visible
- Images need to be in the same folder

Said that, I'm still looking for a solid tool that allows a designer-friendly experience to draw and create graphic elements with an easy and repeatable way to integrate them in a coding environment. We'll see.