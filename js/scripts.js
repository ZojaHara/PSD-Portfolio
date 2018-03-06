;(function($) {

  var cv = $(".cv");
  var rollUp = $('<span class="roll-up">(+)</span>');
  var click = true;

  var textContent = cv.text();
  var textFragment = textContent.slice(0,200);
  cv.text(textFragment);
  cv.append(rollUp);

  cv.on("click", rollUp, function() {
    var textNewContent = click ? textContent : textFragment;
    var opac = click ? "rgba(247,247,241,.8)" : "rgba(247,247,241,0)";

    $(this).text(textNewContent).css("background", opac);
    $(this).append(rollUp);
    click = !click;
  });

})(jQuery);
