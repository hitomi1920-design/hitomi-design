$(function(){
    $(window).scroll(function (){
        $('.fadein').each(function(){
            var targetElement = $(this).offset().top;
            var scroll = $(window).scrollTop();
            var windowHeight = $(window).height();
            if (scroll > targetElement - windowHeight + (windowHeight / 4)){
                $(this).addClass('is-show');
            }
        });
    });
    // ページ読み込み時にも一度実行（最初に見えている要素のため）
    $(window).trigger('scroll');
});
