$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
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
