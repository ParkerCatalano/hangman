var Word = function(inputtedWord) {
  this.inputtedWord = inputtedWord;
}

Word.prototype.inputtedArray = function() {
  var splitWord = this.inputtedWord;
  return splitWord.split("");
  for(var i = 0; i < splitWord.length; i++) {
     splitWord[i].push("_");
   }
}

/*Word.prototype.guessLetter = function(letter) {
  var submittedLetter = letter;
  var arrayCorrectWords = [];
  var arrayWrongWords = [];
  for(var i = 0; i < splitWord.length; i++) {
    if(splitWord[i] === letter) {
      arrayCorrectWords.push(submittedLetter);
    } else {
      arrayWrongWords.push(submittedLetter);
    }
  } console.log(arrayCorrectWords);
}*/
