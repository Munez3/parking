(function($){
  $(document).ready(function(){

    mobileNav();
    pinNavbar();

    if($('.faq__item').length > 0){
      displayFaqAnswer();
    }
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

  function displayFaqAnswer(){
    var $faqItem = $('.faq__item');
    var $faqAnswer = $('.faq__answer');
    var answerPos = $($faqAnswer[0]).show().offset().top;

    $faqItem.on('click', function(){
      $faqItem.removeClass('faq__item--active');
      $(this).addClass('faq__item--active');

      var id = $(this).data('target');
      $faqAnswer.hide();
      for(var i=0; i<$faqAnswer.length; i++){
        if($($faqAnswer[i]).data('id') === id){
          $($faqAnswer[i]).show();
          $('html, body').animate({
            scrollTop: answerPos - 100
          });
          return;
        }
      }
    });
  }
})(jQuery);
