console.log('file 2');


import "slick-carousel";
import $ from "jquery";

// Partners swiper "https://kenwheeler.github.io/slick/"
  
$(".partners__slider").slick ({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        draggable: true,
        pauseOnHover: false,
        responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 4,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 3,
                  }
                },            
              ] 
});
$(".partners__slider2").slick ({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
        draggable: true,
        rtl: true,
        pauseOnHover: false,
        responsive: [
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 4,
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 3,
                  }
                },            
              ] 
});


 

// asad