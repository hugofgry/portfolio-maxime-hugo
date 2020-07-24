$(function() {
    $('.works-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots:false,
        navText: ['<img src="img/left.svg">', '<img src="img/right.svg">' ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1.3
            }
        }
    });
    $('.contributor-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:true,
        dots:false,
        navText: ['<img src="img/left.svg">', '<img src="img/right.svg">' ],
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    });
});

