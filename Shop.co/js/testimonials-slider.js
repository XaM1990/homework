export const testimonialsSlider = () => {
  new Swiper(".testimonials__slider", {
    slidesPerView: 3,
    spaceBetween: 20,

    navigation: {
      nextEl: ".testimonials__next",
      prevEl: ".testimonials__prev",
    },

    breakpoints: {
      0: {
        slidesPerView: 1,
        centeredSlides: false,
      },

      768: {
        slidesPerView: 2,
        centeredSlides: false,
      },

      1200: {
        slidesPerView: 3,
        centeredSlides: true,
      },
    },
  });
};