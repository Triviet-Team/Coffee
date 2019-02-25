$('.slider-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  autoplayTimeout: 5000,
  autoplayHoverPause: true,
  dots: false,
  nav: true,
  items: 1,
  center:true,
  autoWidth: true,
  navText: [
    "<i class='mdi mdi-chevron-left'></i>", 
    "<i class='mdi mdi-chevron-right'></i>"
  ],
  autoplaySpeed: 1000,
});

$('.slider-carousel').on('changed.owl.carousel', function(event) {
  var item = event.item.index-2;

  $('h1').removeClass('animated flipInX');
  $('.owl-item')
    .not('.cloned')
    .eq(item)
    .find('h1')
    .addClass('animated flipInX');


  $('h5').removeClass('animated fadeInUp');
  $('.owl-item')
    .not('.cloned')
    .eq(item)
    .find('h5')
    .addClass('animated fadeInUp');
});

wow = new WOW(
  {
  mobile:       false,
  }
)
wow.init();

$(document).ready(() => {
  const ww = document.body.clientWidth;

  $('.item').css('width', 'max-content');

  $('.menu-btn').click(() => {
    $('aside').toggleClass('aside-mini');
    $('main').toggleClass('main-mini');
    $('header').toggleClass('header-mini');

    $('.logo-large').toggleClass('logo-large-mini');
    $('.logo-mini').toggleClass('logo-mini-mini');
    $('.menu-title, .menu-down').toggleClass('mini');
    
    $('.menu-icon').toggleClass('menu-icon-mini');
    $('.nav-item .collapse').removeClass('show');
    $('.menu-down').addClass('mdi-chevron-down');

    $('.menu-down').removeClass('mdi-chevron-up');
    $('.overlay-menu').addClass('overlay-in');
  });

  $('.menu .nav li').click(function() {
    $(this).find('.menu-down').toggleClass('mdi-chevron-down mdi-chevron-up')
  });

  if (ww > 1200) {
    $('aside').hover(function() {
      $(this).removeClass('aside-mini');
      $('main').removeClass('main-mini');
      $('header').removeClass('header-mini');
  
      $('.logo-large').removeClass('logo-large-mini');
      $('.logo-mini').removeClass('logo-mini-mini');
      $('.menu-title, .menu-down').removeClass('mini');
  
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

  $('.overlay-menu, .menu-close').click(function() {
    $('.overlay-menu').removeClass('overlay-in');
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

  let url = window.location.href;
  $("aside a").each( function () {
    if (url == (this.href)) {
      $(this).closest("li").addClass("active");
      $(this).parent().parent().parent().parent().addClass("active")
    }
  });
});
