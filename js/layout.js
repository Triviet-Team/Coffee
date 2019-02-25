$('.slider-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  dots: true,
  nav: true,
  items: 1,
  center:true,
  autoWidth: true,
  navText: [
    "<i class='mdi mdi-watch-export-variant'></i>", 
    "<i class='mdi mdi-watch-export-variant'></i>"
  ],
  autoplaySpeed: 1000,
});

$(document).ready(() => {
  const ww = document.body.clientWidth;

  $('.item').css('width', 'max-content');

  if (ww < 1400) {
    $('.menu-btn').click(() => {
      $('aside').toggleClass('aside-mini');
      $('main').toggleClass('main-mini');
      $('header').toggleClass('header-mini');
  
      $('.logo-large').toggleClass('logo-large-mini');
      $('.logo-mini').toggleClass('logo-mini-mini');
      $('.menu-title, .menu-down').toggleClass('d-none');
      
      $('.menu-icon').toggleClass('menu-icon-mini');
      $('.nav-item .collapse').removeClass('show');
      $('.menu-down').addClass('mdi-chevron-down');
  
      $('.menu-down').removeClass('mdi-chevron-up');
      $('.overlay-menu').addClass('overlay-in');
    });
  
    $('.menu .nav li').click(function() {
      $(this).find('.menu-down').toggleClass('mdi-chevron-down mdi-chevron-up')
    });
  } 

  if (ww < 1400 && ww > 1200) {
    $('aside').hover(function() {
      $(this).removeClass('aside-mini');
      $('main').removeClass('main-mini');
      $('header').removeClass('header-mini');
  
      $('.logo-large').removeClass('logo-large-mini');
      $('.logo-mini').removeClass('logo-mini-mini');
      $('.menu-title, .menu-down').removeClass('d-none');
  
      $('.menu-icon').removeClass('menu-icon-mini');
    });
  }


  $('.cart-btn').click(() => {
    $('.overlay').addClass('overlay-in');
    $('.cart').toggleClass('cart-out');
  });
  
  $('.overlay, .cart-close').click(function () {
    $('.overlay').removeClass('overlay-in');
    $('.cart').removeClass('cart-out');
    
  });

  $('.overlay-menu').click(function() {
    $(this).removeClass('overlay-in');
    $('aside').removeClass('aside-mini')
  });

  // autocomplete search
  $( function() {
    let availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( ".search input" ).autocomplete({
      source: availableTags
    });
  });

  // NOTIFICATION ADD TO CART 
  $('.custom-cart').click(() => {
    Swal({
      title: 'Thông báo',
      type: 'success',
      html: 'Bạn đã thêm vào giỏ thành công',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<a href="gio-hang.html">Vào giỏ hàng</a>',
      cancelButtonText:
        'Tiếp tục mua sắm',
    })
  });

  $(".quantity button").on("click", function() {

    let $button = $(this);
    let oldValue = $button.parent().find("input").val();
  
    if ($button.text() == "+") {
      var newVal = parseFloat(oldValue) + 1;
    } else {
     // Don't allow decrementing below zero
      if (oldValue > 1) {
        var newVal = parseFloat(oldValue) - 1;
      } else {
        newVal = 1;
      }
    }
  
    $button.parent().find("input").val(newVal);
  });
});
