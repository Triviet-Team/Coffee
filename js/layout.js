$(document).ready(() => {
  $('.menu-btn').click(() => {
    $('aside').toggleClass('aside-mini');
    $('main').toggleClass('main-mini');
    $('header').toggleClass('header-mini');
    $('.logo-large').toggleClass('logo-large-mini');
    $('.logo-mini').toggleClass('logo-mini-mini');
    $('.menu-title').toggleClass('d-none');
    $('.menu-icon').toggleClass('menu-icon-mini');
  });

  $('aside').hover(function() {
    $(this).removeClass('aside-mini');
    $('main').removeClass('main-mini');
    $('header').removeClass('header-mini');
    $('.logo-large').removeClass('logo-large-mini');
    $('.logo-mini').removeClass('logo-mini-mini');
    $('.menu-title').removeClass('d-none');
    $('.menu-icon').removeClass('menu-icon-mini');
  });
});
