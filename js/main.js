// const mainNavBtnBurger = document.querySelector(".main-nav__btn-burger");
// const handleOpenBurger = () => {
//   mainNavBtnBurger.classList.remove
// }
// mainNavBtnBurger.addEventListener('click', handleOpenBurger);
"use strict";

var heroSlider = document.querySelector(".hero__slider");
var aboutMeSlider = document.querySelector(".about-me__slider");
var projectsSlider = document.querySelector(".projects__slider");
var aboutMeDetailSliderSectionSlider = document.querySelector(".about-me-detail-slider-section__slider");
var blogSlider = document.querySelector(".blog-slider-section__slider");
var arhievenementsSlider = document.querySelector(".arhievenements__slider");
var advantagesSlider = document.querySelector(".advantages__slider");
var swiperSlider = new Swiper(heroSlider, {
  centeredSlides: true,
  spaceBetween: 15,
  loop: true,
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev"
  },
  autoplay: {
    delay: 5000
  },
  breakpoints: {
    1199: {
      slidesPerView: 3
    },
    991: {
      slidesPerView: 2,
      centeredSlides: false
    },
    767: {
      slidesPerView: 1
    }
  }
});
var swiperSlider2 = new Swiper(aboutMeSlider, {
  centeredSlides: false,
  slidesPerView: 2.2,
  spaceBetween: 10,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 5000
  },
  scrollbar: {
    el: ".swiper-scrollbar"
  },
  breakpoints: {
    1199: {
      spaceBetween: 30
    },
    767: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    575: {
      slidesPerView: 1.2,
      spaceBetween: 10
    }
  }
});
var swiperSlider3 = new Swiper(projectsSlider, {
  centeredSlides: false,
  spaceBetween: 80,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 5000
  },
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev"
  },
  scrollbar: {
    el: ".swiper-scrollbar"
  },
  breakpoints: {
    575: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 0
    },
    769: {
      slidesPerView: 1,
      centeredSlides: true,
      spaceBetween: 0
    },
    1399: {
      slidesPerView: 2.2,
      spaceBetween: 30
    },
    1599: {
      slidesPerView: 1.1,
      spaceBetween: 45
    }
  }
});
var swiperSlider4 = new Swiper(aboutMeDetailSliderSectionSlider, {
  centeredSlides: false,
  slidesPerView: 1,
  spaceBetween: 0,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 5000
  },
  navigation: {
    nextEl: ".slider-button--next",
    prevEl: ".slider-button--prev"
  }
});
var swiperSlider5 = new Swiper(blogSlider, {
  centeredSlides: false,
  slidesPerView: 1,
  spaceBetween: 0,
  grabCursor: true,
  loop: true,
  autoplay: {
    delay: 5000
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});
var swiperSlider6 = new Swiper(arhievenementsSlider, {
  centeredSlides: false,
  slidesPerView: 3,
  spaceBetween: 10,
  grabCursor: false,
  loop: true,
  autoplay: {
    delay: 5000
  },
  breakpoints: {
    767: {
      scrollbar: {
        el: ".swiper-scrollbar",
        grabCursor: true
      }
    }
  }
});
var swiperSlider7 = new Swiper(advantagesSlider, {
  centeredSlides: false,
  slidesPerView: "auto",
  spaceBetween: 10,
  grabCursor: false,
  loop: true,
  autoplay: {
    delay: 5000
  },
  breakpoints: {
    1399: {
      scrollbar: {
        el: ".swiper-scrollbar",
        grabCursor: true
      }
    }
  }
});


var Modal = function(selector) {
  let element = document.querySelector(selector);

  if (!element.length) {
    console.error('Cannot find modal by selector `' + selector + '`');
  }

  let close = function () {
    element.classList.remove('open');
    Array.from(element.querySelectorAll('.modal-close')).forEach(function (elem) {
      elem.removeEventListener('click', close);
    });
  }.bind(this);

  let open = function () {
    element.classList.add('open');
    Array.from(element.querySelectorAll('.modal-close')).forEach(function (elem) {
      elem.addEventListener('click', close);
    });
  }.bind(this);

  return {
    open: open,
    close: close
  };
};

let modalCooperation = Modal('#modal-cooperation');

//# sourceMappingURL=main.js.map
