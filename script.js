/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */


$(document).ready(function(){
    
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  
  $("#cipher").click(function(){
    let word = $("#word").val();
    let shift = parseInt($("#shift").val());
    let newWord = getCipherWord(word,shift)
    $("#result").text(newWord);
  });
  
   $("#deCipher").click(function(){
    let cipherWord = $("#word").val();
    let cipherShift = parseInt($("#shift").val());
    let newWord = getUnCipherWord(cipherWord,cipherShift)
    $("#result").text(newWord);
  });

  function getCipherLetter(letter,shift){
    var i = alphabet.indexOf(letter);
      i = (i+shift) % alphabet.length;
      return alphabet[i];
  }
  
  function getUnCipherLetter(letter,shift){
    var i = alphabet.indexOf(letter);
      i = (i-shift) % alphabet.length;
      if (Math.sign(i) === -1) {
        i = Math.abs(i);
      }
      return alphabet[i];
  }
  
  function getCipherWord(word, shift){
    var ciphWord = [];
    var wordList = word.split("");
    wordList.forEach(function(letter){
     var ciphLetter = getCipherLetter(letter, shift);  
     ciphWord.push(ciphLetter);
    });
    ciphWord = ciphWord.join("");
    return ciphWord.toUpperCase();
  }
  
  function getUnCipherWord(word, shift){
    var unCiphWord = [];
    var ciphWordList = word.toLowerCase();
    ciphWordList = ciphWordList.split("");
    ciphWordList.forEach(function(letter){
      var unCiphLetter = getUnCipherLetter(letter, shift);
      unCiphWord.push(unCiphLetter);
    });  
    unCiphWord = unCiphWord.join("");
    return unCiphWord
  }
});