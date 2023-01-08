$(document).ready(function () {
    /*Digital asset item carousel */
    $('.asset-items').owlCarousel({
        loop: true,
        autoplay:true,
        margin: 15,
        navText: ["←", "→"],
        dots:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:true,
            },
            1000:{
                items:4,
                nav:true,
            },
            1400:{
                items:6,
                nav:true,
            },
        }
    })
    $('.testimonial-items').owlCarousel({
        loop: true,
        autoplay:true,
        margin: 15,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
               
            },
            600:{
                items:2,
               
            },
            1000:{
                items:3,
            },
            1400:{
                items:4,
                
            },
        }
    })
    $('.investment-plans').owlCarousel({
        loop: true,
        autoplay:true,
        margin: 15,
        navText: ["←", "→"],       
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            600:{
                items:2,
                nav:false,
            },
            1000:{
                items:3,
                nav:true,
            },
            1400:{
                items:4,
                nav:true,
            },
        }
    })
    /*======== SCROLL TO TOP FUNCTIONALITY =========*/
  $(window).scroll(function () {
    if ($(this).scrollTop() >= "300") {
      $("#scrollTopBtn").addClass("active");
    } else {
      $("#scrollTopBtn").removeClass("active");
    }
  });
  $("#scrollTopBtn").click(function () {
    $("html,body").animate({ scrollTop: 0 }, 1000);
  });

})