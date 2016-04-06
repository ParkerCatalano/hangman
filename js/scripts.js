var Word = function(inputtedWord) {
  this.inputtedWord = inputtedWord;
}

Word.prototype.inputtedArray = function() {
  var splitWord = this.inputtedWord;
  return splitWord.replace(/[a-z]/gi,"_ ");
}


$(document).ready(function() {

  $("form#player1-input").submit(function(event) {
    var inputtedWord = $("input#player1-word").val();
    var newWord = new Word(inputtedWord)
    var splitWord = newWord.inputtedArray();
    //var splitWord = inputtedWord.split("");
    //var emptyArray = [];
    //for (var i = 0; i < splitWord.length; i++) {
      //splitWord[i].push("_")
      $("#wordToGuess").text(splitWord);
      debugger;
    }

    $("#player1-input").hide();
    $("#gallows").show();
    $("#player2-forms").show();

event.preventDefault();
  });

  $("form#player2-input").submit(function(event) {
    var guessedLetter = $("input#player2-letter").val();
    $("#guessed").append(guessedLetter + "     ");
    $("input#player2-letter").val("");
    $("input#player2-word").val("");

    event.preventDefault();
  });


});
