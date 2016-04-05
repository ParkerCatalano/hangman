



$(document).ready(function() {
  $("form#player1-input").submit(function(event) {
    var inputtedWord = $("input#player1-word").val();
    $("#player1-input").hide();
    $("#gallows").show();
    $("#player2-forms").show();

event.preventDefault();
  });


});
