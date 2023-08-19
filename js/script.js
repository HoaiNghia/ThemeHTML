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
        autoplaySpeed: 200,
    })

    $('.slider-room').slick({
        "prevArrow": "<span class=\"fas fa-arrow-left slick-arrow slick-arrow-soft-white slick-arrow-left slick-arrow-centered-y rounded-circle ml-sm-2 ml-xl-4\"></span>",
        "nextArrow": "<span class=\"fas fa-arrow-right slick-arrow slick-arrow-soft-white slick-arrow-right slick-arrow-centered-y rounded-circle mr-sm-2 mr-xl-4\"></span>",
        "infinite": true,
        "centerMode": true,
        "centerPadding": "150px",
        "responsive": [{
            "breakpoint": 992,
            "settings": {
                "centerPadding": "120px"
            },
            "breakpoint": 768,
            "settings": {
                "centerPadding": "80px"
            },
            "breakpoint": 554,
            "settings": {
                "centerPadding": "50px"
            }
        }]
    })

    /* Demo purposes only */
    $("figure").mouseleave(
        function () {
            $(this).removeClass("hover");
        }
    );

});
