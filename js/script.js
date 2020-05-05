$(document).ready(function () {
   
   /* Scroll on buttons */
   $('.js--scroll-introducere').click(function () {
      $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000)
   });

});