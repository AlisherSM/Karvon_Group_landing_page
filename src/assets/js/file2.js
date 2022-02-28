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

const animations = document.querySelectorAll('.animation');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add ('animate')
    }
  })
})
animations.forEach(animation => {
  observer.observe(animation)
})

const time = 1000;
const step = 1;


function countNum (num, elem) {
  
  let l = document.querySelector('#' + elem);
  let n = 0;
  let t = Math.round (time/(num/step));
  let interval = setInterval (() => {
    n = n + step;
    if (n == num) {
      clearInterval(interval);
    }
    l.innerHTML = n;
  },
    t);
}
const nums = document.querySelectorAll ('.number');
const observerNum = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      countNum (30, 'num-1');
      countNum (15, 'num-2');
      countNum (5, 'num-3');
    }
  })
})
nums.forEach(number => {
  observerNum.observe(number)
})

