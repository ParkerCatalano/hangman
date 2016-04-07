var Word = function(inputtedWord) {
  this.inputtedWord = inputtedWord;
}

Word.prototype.inputtedArray = function() {
  var splitWord = this.inputtedWord;
  return splitWord.replace(/[a-z]/gi,"_ ");
}

Word.prototype.correctArray = function() {
  newArray = [];
  newArray.push(this.inputtedWord);
  return newArray;
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
  $("input#player2-letter").val("");
  var inputtedWord = $("input#player1-word").val();
  var guessedLetter = $("input#player2-letter").val();
  var newArray = newWord.correctArray();
  $("#guessed").append(guessedLetter + "     ");
debugger;
    for (var i = 0; i < newArray.length; i++) {
      debugger;
     if (newArray[i] === inputtedWord) {
     } return splitWord }
    console.log("hi");



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
      $("input#player2-word").val("");
    }
  });

    event.preventDefault();
  });
