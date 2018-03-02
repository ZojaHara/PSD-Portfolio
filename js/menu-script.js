;(function($) {

$(document).ready(function() {

  var hamburger = $("#hamburger");
  var nav = $(".nav-group");
  var ham1 = $('.hamburger-dash:nth-of-type(1)');
  var ham2 = $('.hamburger-dash:nth-of-type(2)');
  var ham3 = $('.hamburger-dash:nth-of-type(3)');

  var mainHeading = $(".main-heading");
  var newClick = true;

  function showHamburger() {
    ham1.toggleClass("rot1");
    ham2.toggleClass("opacity");
    ham3.toggleClass("rot2");
  }
  function hideHamburger() {
    ham1.addClass("rot1");
    ham2.addClass("opacity");
    ham3.addClass("rot2");
  }

  function elementPosition(value1, value2, unit, elem) {
    if ($(window).width() > 1024){
      var newPos = newClick ? value1+unit : value2+unit;
        elem.animate({
          paddingLeft: newPos
        }, 100, "linear");
        newClick = !newClick;
    }
  }

  hamburger.on('click', function() {
    elementPosition(35,0,"%",mainHeading);
    showHamburger();
    nav.toggleClass('move-nav');
  });

  if ($(window).width() <= 1024){
    nav.addClass("move-nav");
    showHamburger();
  }

  $(window).resize(function(){
    if ($(window).width() <= 1024){
      mainHeading.css({
        "align-self":"center",
        "paddingLeft":"0%"
      });
      // nav.addClass('move-nav');
    }
    else {
      mainHeading.css({
        "align-self":"flex-start",
      });
      if(nav.hasClass("move-nav")) {
        mainHeading.css("padding-left", "35%");
      } else {
        mainHeading.css("padding-left", "0%");
      }
      // nav.addClass('move-nav');
      // showHamburger();
    }
  });
// BACKGROUND COLOR NAVIGATION change

  $(window).on("scroll", function(){
    if($(this).scrollTop() > 300) {
      nav.css({
        "background":"rgba(64,65,66,.8)",
      });
      hamburger.css({
        "background":"rgba(64,65,66,.6)",
      });
    } else {
      nav.css({
        "background":"",
      });
      hamburger.css({
        "background":"",
      });
    }
  });

// SMOOTH LINKS SCROLLING
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
        // nav.toggleClass('move-nav');

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
// HERE Needs un improvements / not always working
          showHamburger();
          nav.toggleClass('move-nav');
          elementPosition(35,0,"%",mainHeading);
        });
      }
    }
  });

});


})(jQuery);
