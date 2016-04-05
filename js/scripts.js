var Word = function(inputtedWord) {
  this.inputtedWord = inputtedWord;
}

Word.prototype.inputtedArray = function() {
  var splitWord = this.inputtedWord;
  return splitWord.split('a').join("_ ").split('b').join("_ ").split('c').join("_ ").split('d').join("_ ").split('e').join("_ ").split('f').join("_ ").split('g').join("_ ").split('h').join("_ ").split('i').join("_ ").split('j').join("_ ").split('k').join("_ ").split('l').join("_ ").split('m').join("_ ").split('n').join("_ ").split('o').join("_ ").split('p').join("_ ").split('q').join("_ ").split('r').join("_ ").split('s').join("_ ").split('t').join("_ ").split('u').join("_ ").split('v').join("_ ").split('w').join("_ ").split('x').join("_ ").split('y').join("_ ").split('z').join("_ ").split('A').join("_ ").split('B').join("_ ").split('C').join("_ ").split('D').join("_ ").split('E').join("_ ").split('F').join("_ ").split('G').join("_ ").split('H').join("_ ").split('I').join("_ ").split('J').join("_ ").split('K').join("_ ").split('L').join("_ ").split('M').join("_ ").split('N').join("_ ").split('O').join("_ ").split('P').join("_ ").split('Q').join("_ ").split('R').join("_ ").split('S').join("_ ").split('T').join("_ ").split('U').join("_ ").split('V').join("_ ").split('W').join("_ ").split('X').join("_ ").split('Y').join("_ ").split('Z').join("_ ");
}



$(document).ready(function() {
  $("form#player1-input").submit(function(event) {
    var inputtedWord = $("input#player1-word").val();
    var splitWord = inputtedWord.split("");
    var emptyArray = [];
    for (var i = 0; i < splitWord.length; i++) {
      splitWord[i].push("_")
      $("#wordToGuess").text(splitWord[i]);
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
