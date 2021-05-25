$(document).ready(function () {
  $('.client-wrapper').owlCarousel({
    loop: true,
    autoplay: true,
    lazyLoad: true,
    autoplayTimeout: 1520,
    smartSpeed: 1500,
    animateIn: 'linear',
    animateOut: 'linear',
    responsiveClass: true,
    autoplayHoverPause: true,
    center: true,
    stagePadding: 50,
    navText: [
      '<i class="bi bi-chevron-left"></i>',
      '<i class="bi bi-chevron-right"></i>',
    ],
    nav: true,
    responsive: {
      0: {
        items: 1,
        autoWidth: true,
      },
      600: {
        items: 4,
        autoWidth: true,
      },
      1000: {
        items: 8,
      },
    },
  });
});

$(document).ready(function () {
  $('.testimonial-wrapper').owlCarousel({
    loop: true,
    autoplay: true,
    items: 1,
    lazyLoad: true,
    autoplayTimeout: 3000,
    smartSpeed: 1500,
    center: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>',
    ],
    nav: true,
    autoplayHoverPause: true,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
});

$(function () {
  $('.popup-video-one').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
});

window.onscroll = function () {
  navbarHandler();
};

var header = document.getElementById('header');
var sticky = header.offsetTop;

function navbarHandler() {
  if (window.pageYOffset > sticky) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
}
