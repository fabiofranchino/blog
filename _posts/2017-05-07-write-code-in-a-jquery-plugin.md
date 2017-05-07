---
title: Write Code in a jQuery Plugin
date: 2017-05-06 14:00:00 +0100
subtitle: 6th May, 2017
style: red
cover: modularity.jpg
---


I think that every developer at some point in his/her career starts wondering how to increase the modularity of his/her own code.  
It's in the DNA of any developer.  
Code can be used but most importantly can be **re-used**

![](../assets/posts/write-code-in-a-jquery-plugin/modularity.jpg)

As mentioned in [this](/blog/still-using-jquery/) post, I do currently use [jQuery](http://jquery.com) for all my projects.  
For that reason I'm very interested in jQuery plugin development since it's a good way to develop chunks of code easy to use, re-use, test and debug.  
jQuery comes with its own modularity flavour that doesn't differ so much from common best practices of the javascript world.

Although it might take more efforts writing something into a plugin, it worth every single extra minutes, indeed the benefits are big.

## The bolierplate

Of course there are tons of tutorials about this topic, I would suggest you to read at least the official one which is [here](https://learn.jquery.com/plugins/basic-plugin-creation/).

If you want to grab something to start off right now, this is **my** minimal empty template to bootstrap a jQuery plugin:

```js
;(function($){

    function init(){
        var el = $(e)
        // your wonderful code here
    }

    $.fn.newplugin = function(options) {
        
        var defaults = {};
        var settings = $.extend( {}, defaults, options );
        
        return this.each(function(i, e){
            init(e)
        });
    };

})(jQuery)
```

As you can see all the internals are private that means they don't pollute the global scope.  
The only public variable is the plugin name which is attached straight to the jQuery global object.

The **this.each** statement allows to run the code on multiple targets, a common expectation by a jQuery plugin' user.

## Conclusion

Every time you start to write a bunch of code to manipulate the DOM, please consider to put that code within a plugin, chances are to get benefits in terms of modularity and reliability.  
It can even happen to have some fun out of it.
