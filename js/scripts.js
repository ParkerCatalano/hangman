var Game = function(word) {
  var board = [];

  for (var i = 0; i < word.length; i++) {
	  var space = {
      letter: word[i],
      found: false
    };
    board.push(space)
  }

  this.board = board;
  this.word = word;
  this.guesses = [];
}
//right, that stores em
Game.prototype.drawBoard = function () {
  // loop over this.board
  var board = this.board;
  var results = [];

  for (var i = 0; i < board.length; i++) {
    var space = board[i];
    if (space.found === false) {
      results.push('_')
      // in this case, add a '_' to results array
    } else {
      results.push(space.letter)
      // otherwise, add space.letter to results
    }
  }

  return results;
}

Game.prototype.guessLetter = function(letter) {
  var word = this.word;
  var board = this.board;
  var guesses = this.guesses;
  var found = false; // if you find the letter, set found = true

  for (var i = 0; i < word.length; i++) {
    if (word[i] === letter) {
      found = true;
      board[i].found = true;
    }
  }

	if (!found) {
    guesses.push(letter);
  }
}

Game.prototype.isComplete = function() {
  var current = this.drawBoard().join('');
  // current is something like 'foo' or '-oo' or 'f--'
  return current === this.word; // if they are the same, the game is over and this returns true
}

Game.prototype.guessWord = function(word) {

}

$(document).ready(function() {
  // do all the things

  var game;

  $("form#initialWord").submit(function(event) {
    var inputtedWord = $("input#inputtedWord").val();
    game = new Game(inputtedWord);

    $("#initialWord").hide();
    $("#gallows").show();
    $("#player2-forms").show();

   event.preventDefault();
  });

  $("form#player2-input").submit(function(event) {

    var letter = $("input#player1-letter").val();
    $("input#player2-letter").val("");
    //this clears the form right? ok nice, way better
    // yeah, but you can still access the value from letter
    // so you still need to draw the word on the board
    game.guessLetter(letter);

    var complete = game.isComplete()
    var board =  game.drawBoard().join(' ');
    $('#wordToGuess').text(board);


    //if (complete) {
    //  alert('You guessed it!');
    //} else {
    //  alert('Keep guessing!');
    //  $('#guessed').text(game.guesses.join(' '));
  //  }

    event.preventDefault();
  });
});
