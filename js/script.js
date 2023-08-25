$(document).ready(function () {
    // 
    $('.banner-slider').slick({
        infinite: true,
        autoplay: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear',
        arrows: true,
        draggable: false,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa fa-arrow-left" aria-hidden="true"></i></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa fa-arrow-right" aria-hidden="true"></i></button>`,
        dots: true,
    });

    $('.testimonial-slider').slick({
        autoplay: true,
        autoplaySpeed: 5000,
        arrows: true,
        dots: true,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa fa-arrow-left" aria-hidden="true"></i></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa fa-arrow-right" aria-hidden="true"></i></button>`,
    })
    $('.brands-slider').slick({
        dots: false,
        autoplay: true,
        arrows: false,
        slidesToShow: 5,
        autoplaySpeed: 700,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    })

    $('.slider-room').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        centerMode: true,
        variableWidth: true,
        infinite: true,
        focusOnSelect: true,
        cssEase: 'linear',
        touchMove: true,
        prevArrow: `<button type='button' class='slick-prev slick-arrow'><i class="fa fa-arrow-left" aria-hidden="true"></i></button>`,
        nextArrow: `<button type='button' class='slick-next slick-arrow'><i class="fa fa-arrow-right" aria-hidden="true"></i></button>`,
    });

    var imgs = $('.slider-room img');
    imgs.each(function () {
        var item = $(this).closest('.item');
        item.css({
            'background-image': 'url(' + $(this).attr('src') + ')',
            'background-position': 'center',
            '-webkit-background-size': 'cover',
            'background-size': 'cover',
        });
        $(this).hide();
    })

    /* Demo purposes only */
    $("figure").mouseleave(
        function () {
            $(this).removeClass("hover");
        }
    );

});
