console.log('file 2');
import "slick-carousel";
import $ from "jquery";
// Partners swiper "https://kenwheeler.github.io/slick/" 
const partners = document.querySelector('.partners');
const partnersObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add ("show");
    } else {
      entry.target.classList.remove ("show");
    }
  })
})

partnersObserver.observe(partners);



$(".partners__slider").slick ({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        arrows: false,
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
nums.forEach(num => {
  observerNum.observe(num)
})

// MODAL
var modalContacts = document.getElementById('modal__contacts');
var modalBG = document.getElementsByClassName("modal__backgr")[0];
var btnContacts = document.getElementById("btn__contacts");
var modalClose = document.getElementsByClassName("modal__close")[0];

btnContacts.onclick = function() {
    modalContacts.classList.add("show__modal");
    modalBG.classList.add("show__modal");
}
modalClose.onclick = function() {
  modalContacts.classList.remove("show__modal");
  modalBG.classList.remove("show__modal");
}

modalBG.onclick = function() {
  modalContacts.classList.remove("show__modal");
  modalBG.classList.remove("show__modal");
}

// MODAL

// MENU
var modalMenu = document.getElementById('header__menu');
var modalBG = document.getElementsByClassName("modal__backgr")[0];
var btnMenu = document.getElementById("header__burger");
var menuClose = document.getElementsByClassName("menu__close")[0];

btnMenu.onclick = function() {
  modalMenu.classList.add("show__menu");
  modalBG.classList.add("show__modal");
}
modalBG.onclick = function() {
  modalMenu.classList.remove("show__menu");
  modalBG.classList.remove("show__modal");
}
menuClose.onclick = function () {
  modalMenu.classList.remove("show__menu");
  modalBG.classList.remove("show__modal");
  
}

// MENU