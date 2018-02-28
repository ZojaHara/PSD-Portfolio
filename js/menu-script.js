;(function($) {

$(document).ready(function() {

  var hamburger = $("#hamburger");
  var nav = $(".nav-group");
  var ham1 = $('.hamburger-dash:nth-of-type(1)');
  var ham2 = $('.hamburger-dash:nth-of-type(2)');
  var ham3 = $('.hamburger-dash:nth-of-type(3)');

  var mainHeading = $(".main-heading");
  // var initialPos = mainHeading.css("padding-left");
  var newClick = true;

  //
  //
  // var headingWidth = mainHeading.innerWidth();
  // var groupWidth = $(".header-parts").innerWidth();
  //
  // console.log(groupWidth);
  // console.log(headingWidth);

    hamburger.on('click', function() {
      ham1.toggleClass("rot1");
      ham2.toggleClass("opacity");
      ham3.toggleClass("rot2");
      nav.toggleClass('move-nav');


      $(window).resize(function(){
        if ($(window).width() <= 1023){
          mainHeading.css("align-self","center");
        } else {
          mainHeading.css("align-self","flex-start");
          if(nav.hasClass('move-nav')) {
            nav.toggleClass('move-nav');
          }
        }


      });
      if ($(window).width() > 1024){
        var newPos = newClick ? "35%" : "0%";

          mainHeading.animate({
            paddingLeft: newPos
          }, 100, "linear");

          newClick = !newClick;

      }

    });


  //   $(window).resize(function(){
  //     nav.removeClass('move-nav');
  // });

  $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')  &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          }

          nav.toggleClass('move-nav');
        });
      }
    }
  });

});


})(jQuery);
