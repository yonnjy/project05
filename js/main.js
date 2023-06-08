$(function () {
    $('.main_slide').slick({
        arrows: false,
        autoplay: true,
        autoplaySpeed: 5000,
        dots: true,
        pauseOnHover: false,
        pauseOnFocus: false,
    });

    $('.main_vi .arrows .left').on('click', function () {
        $('.main_slide').slick('slickPrev');
    });
    $('.main_vi .arrows .right').on('click', function () {
        $('.main_slide').slick('slickNext');
    });

    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $('.to_top').fadeIn(50);
        } else {
            $('.to_top').fadeOut(50);
        }
    });

    $('.family_site span').on('click', function () {
        $(this).toggleClass('on');
        $(this).next().toggleClass('on');
    });
});