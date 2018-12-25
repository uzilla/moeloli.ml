/*
 * Copyright (C) 2018 MoeLoli.ML <urain39@qq.com>
 */

;(function() {
    function autoAdjustHeight() {
        var bodyHeight = $(window).height();
        var remainHeight = bodyHeight - $('#head-container').outerHeight(true) - $('#main-container').outerHeight(true) - $('#main-footer').outerHeight(true);

        if (remainHeight > 0) {
            $('#main-container').height($('#main-container').height() + remainHeight);
        }

        if (bodyHeight < 500) {
            $('body').css('overflow-y', 'scroll');
        }
    }

    var _onload = window.onload;

    window.onload = function() {
        autoAdjustHeight.apply(this);
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
