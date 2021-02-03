$(function () {

  $('.product-slide__thumb').slick({
    asNavFor: '.product-slide__big',
    focusOnSelect: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: true,
    draggable: false
  });

  $('.product-slide__big').slick({
    asNavFor: '.product-slide__thumb',
    draggable: false,
    arrows: false,
    fade: true
  });

  $('.select-style, .product-one__item-num').styler();

  $('.products-content__filter-btn').on('click', function () {
    $('.products-content__filter-btn').removeClass('products-content__filter-btn--active')
    $(this).addClass('products-content__filter-btn--active')
  })

  $('.product__item-btn').on('click', function () {
    $(this).addClass('product__item-btn--active')
  })

  $('.product__item-cart').on('click', function () {
    $('.product__item-btn').removeClass('product__item-btn--active')
  })

  $('.button-list').on('click', function () {
    $('.product__item').addClass('product__item--list')
    $('.products-content__inner').addClass('products-content__inner--list')
  })

  $('.button-grid').on('click', function () {
    $('.product__item').removeClass('product__item--list')
    $('.products-content__inner').removeClass('products-content__inner--list')
  })

   $(".star").rateYo({
    starWidth: "12px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
  });

   $(".product-one__item-star").rateYo({
    starWidth: "16px",
    normalFill: "#d6d6d6",
    ratedFill: "#ffcc00",
    readOnly: true
  });

  $('.filter-price__input').ionRangeSlider({
    type: "double",
    prefix: "$",
    onStart: function (data){
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
    },
    onChange: function (data) {
      $('.filter-price__from').text(data.from);
      $('.filter-price__to').text(data.to);
      },
  });
  
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false,
    fade: true,
    autoplay: true,
    autoplaySpeed: 2000
  })

  var mixer = mixitup('.product__items');
  var mixer = mixitup('.design__items');
  
})