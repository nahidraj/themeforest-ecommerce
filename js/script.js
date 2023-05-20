(function ($) {
  "use strict";
  // category menu js
  $('.all-category .category-menu').hide();
  $('.all-category .title').on('click', function () {
    $('.all-category .category-menu').slideToggle();
  });

  // mobile category menu js
  $('.child-menu').hide();
  $('.category-menu h4').on('click', function () {
    $('.child-menu').slideToggle();
  });

  // fixed menu js
  $(window).scroll(function () {
    if ($(this).scrollTop() > 500) {
      $('.sticky-top').addClass('shadow-sm').css('top', '0px');
    } else {
      $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
    }
  });

  // tooltip js
  let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  })

  // promo code js
  $('.promo-input').hide();
  $('.promo-code p').on('click', function () {
    $('.promo-input').slideToggle();
  });

  // chosen js
  $(".chosen").chosen()

  // checkout js
  $('.different-add-form').hide();
  $('.checkout-hide-show').on('click', function () {
    $('.different-add-form').slideToggle();
  });

  $(".cart-minus").on('click', function () {
    var $input = $(this).parent().find("input");
    var count = parseInt($input.val()) - 1;
    count = count < 1 ? 1 : count;
    $input.val(count);
    $input.change();
    return false;
  });
  $(".cart-plus").on('click', function () {
    var $input = $(this).parent().find("input");
    $input.val(parseInt($input.val()) + 1);
    $input.change();
    return false;
  });

  // home banner slider js
  $('.home-banner').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    verticalSwiping: false,
    prevArrow: '<i class="bi bi-chevron-left icon left"></i>',
    nextArrow: '<i class="bi bi-chevron-right icon right"></i>',
  }).slickAnimation();

  // home browse category slider js
  $('.browse-category-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    slidesToShow: 7,
    slidesToScroll: 1,
    prevArrow: '<i class="bi bi-chevron-left icon left"></i>',
    nextArrow: '<i class="bi bi-chevron-right icon right"></i>',
    responsive: [{
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 429,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })

  // best seller product slider js
  $('.best-seller-prd').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<i class="bi bi-chevron-left icon left"></i>',
    nextArrow: '<i class="bi bi-chevron-right icon right"></i>',
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })

  // flash product countdown js
  $('#getting-started').countdown('2023/04/13', function (event) {
    $(this).html(event.strftime('%w weeks %d days %H:%M:%S'));
    $(this).html(event.strftime('<div class="sing-counter">%D <span>Days</span></div> <div class="sing-counter">%H <span class="hours">hrs</span></div> <div class="sing-counter">%M <span>min</span></div> <div class="sing-counter">%S <span>sec</span></div>'));
  });

  // flash product slider js
  $('.flash-product-slider').slick({
    dots: false,
    arrows: true,
    infinite: true,
    autoplay: false,
    speed: 1000,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<i class="bi bi-chevron-left icon left"></i>',
    nextArrow: '<i class="bi bi-chevron-right icon right"></i>',
    responsive: [{
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  })

  // mobile menu js
  $('.mobile-icon').on('click', function () {
    $('.aside').toggleClass('show-aside')
  })

  $('.sub-menu ul').hide();
  $(".sub-menu a").on('click', function () {
    $(this).parent(".sub-menu").children("ul").slideToggle("100");
    $(this).find(".right").toggleClass("fa-caret-up fa-caret-down");
  });

  $('.bars i').on('click', function () {
    $('.mobile-menu-body').addClass('show-mobile-menu-body');
  });

  $('.close i').on('click', function () {
    $('.mobile-menu-body').removeClass('show-mobile-menu-body');
  });

  $('.bars i').on('click', function () {
    $('.mobile-menu-overlay').addClass('show-mobile-menu-overlay');
  });

  $('.close i').on('click', function () {
    $('.mobile-menu-overlay').removeClass('show-mobile-menu-overlay');
  });

  $('.mobile-menu-overlay').on('click', function () {
    $('.mobile-menu-overlay').removeClass('show-mobile-menu-overlay');
  });

  $('.mobile-menu-overlay').on('click', function () {
    $('.mobile-menu-body').removeClass('show-mobile-menu-body');
  });

  // prd mini img slider js
  $('.prd-mini-img-slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.prd-zoom-image',
    prevArrow: '<i class="bi bi-chevron-left icon left"></i>',
    nextArrow: '<i class="bi bi-chevron-right icon right"></i>',
  })

  // prd zoom image slider js
  $('.prd-zoom-image').slick({
    dots: false,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.prd-mini-img-slider',
  })
  
  // magnific popup js
  $('.parent-container').magnificPopup({
    delegate: 'a',
    type: 'image',
  });

})(jQuery);