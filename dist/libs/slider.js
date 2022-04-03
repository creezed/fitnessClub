const trainer = new Swiper('.trainer-slider', {
    slidesPerView: 1.3,
    spaceBetween: 20,
    grabCursor: true,
    navigation: {
        nextEl: ".trainer-pagination__btn--right",
        prevEl: ".trainer-pagination__btn--left",
    },
    breakpoints: {
        420: {
            slidesPerView: 2.3, 
            spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1024: {
          slidesPerView: 4,
          spaceBetween: 50,
        },
      },
})