'use strict';

$(document).ready(function () {
    // header scroll event
    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('header').addClass('minimal');
            $('.product-nav').fadeIn(500);
        } else {
            $('header').removeClass('minimal');
            $('.product-nav').fadeOut(500);
        }
    });

    // search script
    $('.btn-search , .search-toggle').on("click", function () {
        $('.search-wrap').fadeToggle(300);
    });
    $('.btn-closesearch').on("click", function () {
        $('.search-wrap').fadeOut(300);
    });

    // product filter script
    $('.btn-filter').scrollToFixed({
        marginTop: 50,
        zIndex: 50
    });

    $('.btn-sort .dropdown-toggle').text($('.btn-sort .dropdown-item.active').text());
    $('.btn-sort .dropdown-toggle').on("click", function () {
        $(this).text($('.btn-sort .dropdown-item.active').text());
    });

    $('.btn-showfilter').on("click", function () {
        $('.product-filter').toggleClass('open');
        $('.overlay').fadeToggle(500);
    });
    $('.overlay').on("click", function () {
        $('.product-filter').removeClass('open');
        $('.overlay').fadeOut(500);
    });
    $('.product-filter .btn-close').on("click", function () {
        $('.product-filter').removeClass('open');
        $('.overlay').fadeOut(500);
    });

    $('.btn-showsub').on("click", function () {
        $(this).siblings('.sub').slideToggle(300);
    });

    // Jquery rating
    $('.bar-rating').barrating({
        theme: 'fontawesome-stars'
    });

    // page popup script
    $('[data-popup]').on("click", function () {
        var idPopup = $(this).attr('data-popup');
        $(idPopup).toggleClass('open');
    });
    $('.page-popup').on("click", function () {
        $(this).removeClass('open');
    });
    $('.popup-dialog').on("click", function (e) {
        e.stopPropagation();
    });
    $('.btn-buy').on("click", function () {
        $('.page-popup').removeClass('open');
    });

    // page scroll to id
    $(".page-scroll a").mPageScroll2id({
        forceSingleHighlight: true,
        offset: 100
    });

    // date picker
    $('.datepicker').datepicker();

    // news page script
    $('.news-nav').scrollToFixed({
        marginTop: 50,
        zIndex: 50
    });

    // banner
    $('.banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true
    });

    // product slide
    $('.product-slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: false,
        dots: true
    });

    // LANDINGPAGE SCRIPT

    $('.product-slick').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        dots: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }]
    });

    $('.guide-slick').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        speed: 500,
        arrows: false,
        dots: true,
        variableWidth: true,
        infinite: false,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        }, {
            breakpoint: 480,
            settings: {
                slidesToShow: 1
            }
        }]
    });
});