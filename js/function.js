$(document).on('ready', function() {
  $(".vertical-center").slick({
    autoplay: true,
    autoplaySpeed: 1500,
    dots: true,
    vertical: true,
    verticalSwiping: true,
    centerMode: true,
  });
});

$(function(){
    function fadeFunction() {
        var scroll_top = $(window).scrollTop();
        var scroll_btm = scroll_top + $(window).height();
        
        $('.scroll-fade').each(function(){
            var this_pos = $(this).offset().top;
            // 画面の下から100pxの位置に入ったら表示
            if (scroll_btm - 100 > this_pos) {
                $(this).addClass('is-show');
            }
        });
    }

    // スクロール時と読み込み時に実行
    $(window).on('scroll load', fadeFunction);
    
    // 最初の読み込み直後にも一度実行
    fadeFunction();
});


