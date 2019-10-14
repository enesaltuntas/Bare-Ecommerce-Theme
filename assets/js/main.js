
    // Bare Ecommerce Theme

    $("#owl-demo").owlCarousel({
        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        paginationSpeed : 400,
        singleItem:true,
        autoplay: true,
        autoplaySpeed: 3000,
        autoplayTimeout: 5000,
        loop: true,
        items : 1,
        nav : true,
        navText: ['<i class="ion-ios-arrow-left"></i>', '<i class="ion-ios-arrow-right"></i>']
    });

    $("#homeCategories").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed: 500,
        paginationSpeed: 1000,
        autoplay: true,
        loop: true,
        singleItem: false,
        nav : false,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:false,
                autoplay: true,
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:7,
                nav:true,
                loop:false
            }
        }
    });

    $(".tabSlider").owlCarousel({
        navigation : false, // Show next and prev buttons
        slideSpeed: 500,
        paginationSpeed: 1000,
        autoplay: true,
        margin: 15,
        loop: true,
        singleItem: false,
        nav : false,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
                nav:false,
                autoplay: true,
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:5,
                nav:true,
                loop:false
            }
        }
    });