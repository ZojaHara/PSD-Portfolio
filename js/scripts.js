;(function($) {

  var cv = $(".cv");
  var rollUp = $(".roll-up");
  var click = true;

  rollUp.on("click", function() {
    var val1 = click ? "50%" : "40%";
    var val2 = click ? "120%" : "20%";
    cv.animate( {
      width:val1,
      height:val2
    }, 2000);

    click=!click;
  });

})(jQuery);
