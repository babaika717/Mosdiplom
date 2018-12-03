$(document).ready(function(){


    //menu
    $('.open-menu').on('click', function(){
        $(this).toggleClass('active');
        $('.global-menu').slideToggle();
    });

$(window).on('load resize', function() {

    $('.buy-slider').not(".slick-initialized").slick({
        dots: false,
        infinite: true,
        arrows: false,
        speed: 300,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    var width = $(document).width();
    if (width < 478) {
        $('.buy-slider').slick('unslick');
    }

});
    $('.reviews-slider').not(".slick-initialized").slick({
        dots: true,
        infinite: true,
        arrows: true,
        prevArrow: $('.reviews-slider-wrapper .slider-nav .slick-prev'),
        nextArrow: $('.reviews-slider-wrapper .slider-nav .slick-next'),
        appendDots: $('.reviews-slider-wrapper .slider-nav .slick-dotts'),
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('select.custom').styler();
    //video
    $('#move').on('click', function() {
        $('#my-video').css({
            "transform":"translatex(300px)"
        });
    });
    $('#rotate')
        .on('click', function() {
        $('#my-video').css({
            'transform': 'rotate(180deg)'
        });
    });
    $('#skew')
        .on('click', function() {
        $('#my-video').css({
            'transform': 'skewx(45deg)'
        });
    });
});
    
$(window).on('load resize', function() {

        $('#advan-sl').not(".slick-initialized").slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            arrows: true,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 680,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        dots: true
                    }
                }
            ]
        });

    var width = $(document).width();
    if (width > 1199) {
        $('#advan-sl').slick('unslick');
    } else {
        $('#advan-sl').not('.slick-initialized').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true
        });
    }

});
//////////////////////////ARROW TOP BUTTON
$(document).ready(function() {
    $(window).scroll(function () {
        var top = $(this).scrollTop();
        if (top >= 400) {
            $(".back-arrow a").addClass("activate");
        }
        if (top < 400) {
            $(".back-arrow a").removeClass("activate");
        }
    });
});
///////////////////////////////////////////
$('.search-wrapper').click(function (e) {
    $('.mobile-search').addClass('activate-srch');
    e.preventDefault();
    e.stopPropagation();
    $('.mobile-search').toggle();
});
$('.mobile-search').click(function(e) {
    e.stopPropagation();
});
$('body').click( function() {
    $('.mobile-search').hide();
});


$(document).ready(function () {
    $(".down-arrow-button").click(function (arrow) {
        arrow.preventDefault();
        $(this).toggleClass("down-arrow-active");
        $(".main-navbar-wrapper").slideToggle(200);
        $(".main-navbar-wrapper").css("display", "flex");
    })
});

//////////////////////////////DIPLOM SLIDER
$(document).ready(function () {
    $('.diplom-slides').slick({
        slidesToShow: 1,
        draggable: false,
        infinite: true,
        slidesToScroll: 1,
        prevArrow: '<button class="diplom__slider-prev"><img src="/img/left-arrow__diplom.png" alt="" /></button>',
        nextArrow: '<button class="diplom__slider-next"><img src="/img/right-arrow__diplom.png" alt="" /></button>',
        arrows: true,
        fade: true,
        asNavFor: '.diplom-slider-nav'
    });
    $('.diplom-slider-nav').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        draggable: false,
        asNavFor: '.diplom-slides',
        dots: false,
        infinite: true,
        arrows: false,
        centerMode: false,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 1199,
                settings: {
                    slidesToShow: 4,
                    infinite: true
                }
            }
        ]
    });
});

/*BOTTOM DIPLOM SLIDER*/

$('#rev-diplom-sl').not(".slick-initialized").slick({
    dots: false,
    infinite: true,
    arrows: true,
    prevArrow: '<button class="reviews__slider-prev"><img src="/img/left-arrow-diplom.png" alt="" /></button>',
    nextArrow: '<button class="reviews__slider-next"><img src="/img/right-arrow-diplom.png" alt="" /></button>',
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true
            }
        },
        {
            breakpoint: 701,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true
            }
        }
    ]
});


$(window).on("resize load", function() {
   console.log($(window).width());
});

/*THANKS POPUP*/

$('.close-call').on('click', function () {
    $(".overlay__thanks-popup").fadeOut();
});

$('form').submit(function (e) {
    e.preventDefault();
    $(this).trigger("reset");
    $(".modal, .modal-backdrop").fadeOut();
    $(".modal-open").css("overflow", "auto");
    $(".modal-open").css("padding-right", "0");
    var popup = $('.overlay__thanks-popup').fadeIn();
    setTimeout(function () {
        popup.fadeOut();
    }, 2000);

});

/*SUBMENU*/

$('.header-nav__submenu__open').on('click', function (e) {
    e.preventDefault();
   $('.header-nav__submenu').slideToggle(200);
});