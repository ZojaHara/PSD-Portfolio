;(function($) {

$(document).ready(function() {

  var hamburger = $("#hamburger");
  var nav = $(".nav-group");
  var ham1 = $('.hamburger-dash:nth-of-type(1)');
  var ham2 = $('.hamburger-dash:nth-of-type(2)');
  var ham3 = $('.hamburger-dash:nth-of-type(3)');

    hamburger.on('click', function() {
      ham1.toggleClass("rot1");
      ham2.toggleClass("opacity");
      ham3.toggleClass("rot2");
      nav.toggleClass('move-nav');
    });

  //   $(window).resize(function(){
  //     nav.removeClass('move-nav');
  // });


});


})(jQuery);
