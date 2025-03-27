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

      myMap.geoObjects.add(
        new ymaps.Placemark([59.875113, 30.337751], {
          iconContent: "",
          hintContent: "Униор Профешнл Тулз",
        })
      );
    }
  }

  $(".accordion-header").click(function () {
    // Закрываем все, кроме текущего
    $(".accordion-content").not($(this).next()).slideUp();

    // Открываем/закрываем текущий
    $(this).parent().toggleClass("_is-open");
    $(this).next(".accordion-content").slideToggle();
  });

  $(".js-hidden-block-btn").click(function () {
    $(this).prev(".js-hidden-block").toggleClass("_is-open");
  });

  $(document).ready(function () {
    $(".tab-btn").click(function () {
      const tabId = $(this).data("tab");
      $(".tab-btn, .tab-pane").removeClass("_is-active");
      $(this).addClass("_is-active");
      $(`.tab-pane[data-tab="${tabId}"]`).addClass("_is-active");
    });
  });

  $('.js-stats-section').each(function() {
    const $block = $(this);
    let animationStarted = false;
    
    // Подготовка чисел с плюсами
    $block.find('.js-stast-number').each(function() {
        const $number = $(this);
        const value = $number.data('value');
        
        if (value.includes('+')) {
            $number.html('0<span class="plus">+</span>');
        }
    });
    
    // Функция анимации числа
    function animateNumber($element, target) {
        // const hasPlus = target.includes('+');
        const numTarget = parseInt(target);
        const duration = 2000;
        const startTime = performance.now();
        // const $plus = $element.find('.plus');
        
        function updateNumber(currentTime) {
            const elapsedTime = currentTime - startTime;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentValue = Math.floor(progress * numTarget);
            
            $element.text(currentValue);
            
            if (progress < 1) {
                requestAnimationFrame(updateNumber);
            } 
        }
        
        requestAnimationFrame(updateNumber);
    }
    
    // Проверка видимости блока
    function checkScroll() {
        if (animationStarted) return;
        
        const blockTop = $block.offset().top;
        const scrollPosition = $(window).scrollTop() + $(window).height() * 0.7;
        
        if (scrollPosition > blockTop) {
            animationStarted = true;
            $block.find('.js-stats-number').each(function() {
                const $number = $(this);
                animateNumber($number, $number.data('value'));
            });
        }
    }
    
    // Наблюдатель за скроллом для этого блока
    $(window).on('scroll', checkScroll);
    // Проверить сразу при загрузке
    checkScroll();
});
});
