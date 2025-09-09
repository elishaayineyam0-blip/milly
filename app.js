
// Initialize Swiper for all containers
 document.querySelectorAll('.swiper-container').forEach(container => {
  new Swiper(container, {
    slidesPerView: 3,
    spaceBetween: 20,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: document.createElement('div'),
      clickable: true,
    },
    navigation: {
      nextEl: document.createElement('div'),
      prevEl: document.createElement('div'),
    },
    breakpoints: {
      1024: { slidesPerView: 3 },
      768: { slidesPerView: 2 },
      480: { slidesPerView: 1 }
    }
  });
}); 















