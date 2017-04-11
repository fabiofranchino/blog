;(function($){
    $(document).ready(function(){
        console.log('ready')
        var allFrames = $("iframe.fuildframe")

        var fluidEl = $("article");

        allFrames.each(function() {
            var md = $(this).data('width-mobile')
            var w = (window.isMobile && md) ? md : this.width
            $(this).data('aspectRatio', this.height / w)
        });

        $(window).resize(function() {
            var newWidth = fluidEl.width();
            allFrames.each(function() {
                var el = $(this)
                el.width(newWidth)
                  .height(newWidth * el.data('aspectRatio'));
            });

        }).resize();

    })

})(jQuery)