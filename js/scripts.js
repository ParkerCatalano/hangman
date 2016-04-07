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
      $("#wordToGuess").text(splitWord);


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


  $("form#player2-input2").submit(function(event) {
    var inputtedWord = $("input#player1-word").val();
    var guessedWord = $("input#player2-word").val();
    if (inputtedWord === guessedWord) {
      alert("You guessed it!");
    } else {
      alert("Keep Guessing!");
    }
  });

    event.preventDefault();
  });
