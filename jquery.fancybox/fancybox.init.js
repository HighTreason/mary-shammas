function fancybox_init() {
    $('.gallery-images').fancybox({

        afterShow: function() {
            $.fn.fullpage.setAllowScrolling(false);
            $.fn.fullpage.setKeyboardScrolling(false);
        },

        afterClose: function() {
            $.fn.fullpage.setAllowScrolling(true);
            $.fn.fullpage.setKeyboardScrolling(true);
        },

        openEffect: 'elastic',
        openSpeed: 150,
        closeEffect: 'elastic',
        closeSpeed: 150,

        prevEffect: 'elastic',
        nextEffect: 'elastic',

        closeBtn: false,
        arrows: false,
        nextClick: true,

        helpers: {
            thumbs: {
                width: 50,
                height: 50
            },
            title: {
                type: 'over'
            },
        }
    });
}