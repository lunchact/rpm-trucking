$(document).ready(function() {

    $(".fancybox-link").fancybox({
        // padding: 0,
        helpers: {
            overlay: {
                locked: false
            }
        }
    })

    $(".fancybox-pdf").fancybox({
        type   :'iframe',
        width  : 960,
        height : 720,
        autoSize: false,
        autoDimensions: false,
        autoScale: false,
    })

})