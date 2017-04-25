(function($){
  $(document).ready(function(){

    mobileNav();
    pinNavbar();
  });

  function mobileNav(){
    var $burger = $('.burger');
    var $navbar = $('.navbar');

    $burger.on('click', function(){
      $burger.toggleClass('burger--active');
      $navbar.toggleClass('navbar--active');
    });
  }

  function pinNavbar(){
    var $navbar = $('.navbar');
    var position = $navbar.offset().top;

    $(document).on('scroll', function(){
      if($(document).scrollTop() > position){
        $navbar.addClass('navbar--fixed');
      }else{
        $navbar.removeClass('navbar--fixed');
      }
    });
  }
})(jQuery);
