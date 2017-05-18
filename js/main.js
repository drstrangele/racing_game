$(document).ready(function() {

  // start button - moves pie
  $("#start").click(function(){
    let pieWidth = $('#pie').width();
    let trackWidth = $(window).width() - pieWidth;
    $("#pie").animate({left: trackWidth}, "slow");

    let pusheen = $("#pusheen");
    let pusheen2 = $("#pusheen2");
    if (pusheen.position().left + pusheen.width() >= trackWidth) {
      $(document).off('keydown');
      $("span").text(" Pusheen 1!");
    } else if (pusheen.position().left + pusheen2.width() >= trackWidth) {
      $(document).off('keydown');
      $("span").text(" Pusheen 2! ");
    };

    // reset button
    $("#reset").click(function(){
      $("img").animate({left: "0"});
    });

    // character controls
    $(document).keypress(function( event ) {
      if ( event.key == "z" ) {
        $("#pusheen").animate({left: "+=100px"},"slow");
      } else if ( event.key == "m" ) {
        $("#pusheen2").animate({left: "+=100px"},"slow");
      }
    });
  });
});
