document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector(".js-profiles-slider")) {
    const profilesSlider = new Swiper(".js-profiles-slider", {
      slidesPerView: 2,
      spaceBetween: 16,
      pagination: {
        el: ".js-profiles-slider-pagination",
        clickable: true,
      },
      breakpoints: {
        560: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 4,
          spaceBetween: 24,
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 30,
        },
      },
    });
  }

  if (document.querySelector(".js-reviews-slider")) {
    const reviewsSlider = new Swiper(".js-reviews-slider", {
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
        el: ".js-reviews-slider-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".js-reviews-slider-next",
        prevEl: ".js-reviews-slider-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  }

  if (document.querySelector(".js-companies-address-slider")) {
    const companiesAddressSlider = new Swiper(".js-companies-address-slider", {
      slidesPerView: 1,
      spaceBetween: 16,
      pagination: {
        el: ".js-companies-address-slider-pagination",
        clickable: true,
      },
    });
  }

  if (document.querySelector(".js-map")) {
    ymaps.ready(init);

    function init() {
      var myMap = new ymaps.Map("js-map", {
        center: [59.875113, 30.337751], // Координаты Санкт-Петербурга
        zoom: 17,
      });

      myMap.geoObjects.add(new ymaps.Placemark(
        [59.875113, 30.337751],
        {iconContent: '', hintContent: 'Униор Профешнл Тулз'}
    ));
    }
  }

  $('.accordion-header').click(function() {
    // Закрываем все, кроме текущего
    $('.accordion-content').not($(this).next()).slideUp();
    
    // Открываем/закрываем текущий
    $(this).parent().toggleClass('_is-open');
    $(this).next('.accordion-content').slideToggle();
    
  });

  $('.js-hidden-block-btn').click(function() {
    $(this).prev('.js-hidden-block').toggleClass('_is-open');
  })
});
