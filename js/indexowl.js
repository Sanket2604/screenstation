$(document).ready(function(){
    $(".owl-carousel1").owlCarousel({
        autoplay:false,
        nav: true,
        loop:true,
        navText : ["<div class='prev-slide'><i class='fa fa-chevron-left'></i></div>",
        "<div class='next-slide'><i class='fa fa-chevron-right'></i></div>"],
        smartSpeed:1000,
        slideTransition:'linear',
        autoplayHoverPause:true,
        responsive:{
            0:{
                items:1,
            },
            760:{
                items:2,
            },
            1190:{
                items:3,
            }
        }
    });
});

