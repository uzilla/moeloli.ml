/*
 * Copyright (C) 2018 MoeLoli.ML <urain39@qq.com>
 */

;(function() {
    function adjust_height() {
        var body_h = $(window).height();
        var remain_h = body_h - $('#head-container').outerHeight(true) - $('#main-container').outerHeight(true) - $('#main-footer').outerHeight(true);

        if (remain_h > 0) {
            $('#main-container').height($('#main-container').height() + remain_h);

            if (body_h < 480) {
                $('body').css('overflow-y', 'scroll');
            }
        }
    }

    var _onload = window.onload;
    
    window.onload = function() {
        adjust_height.apply(this);
        if (typeof _onload === 'function') {
            _onload.apply(this);
        }
    }

    $('#show-authors').on('click', function() {
        if ($('#copyright').hasClass('hide')) {
            $('#copyright').removeClass('hide');
            $('body').css('overflow-x', 'hidden');
            $('body').css('overflow-y', 'scroll');
            $('#main-footer').css('overflow-y', 'visible');
        } else {
            $('#copyright').addClass('hide');
            if ($(window).height() > 480) {
                $('body').css('overflow-y', 'hidden');
                $('#main-footer').css('overflow-y', 'hidden');
            }
        }
    });
})();
