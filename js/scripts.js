// Business Logic
var vowels = ["a","e","i","o","u"];

function pigLatin(word) {
  var firstLetter = word[0];
  var checkVowel;

  // Check if firstLetter is a vowel
  if (vowels.includes(firstLetter)) {
    checkVowel = true;
  } else {
    checkVowel = false;
  }
  console.log(checkVowel);

  // Run a for loop to check if input word starts with multiple consonants
  function checkConsonants(word) {
    var wordArray = word.split("");
    var leadingConsonants = "";

    for (var i = 0; i <= wordArray.length; i++) {
      if (vowels.includes(wordArray[i]) === false) {
        leadingConsonants += wordArray[i];
      } else {
        break
      }
    }
    return leadingConsonants;
  };


  // Determines what is returned to user
  if (checkVowel === false) {
    if (word[0] === "q" && word[1] === "u") {
      return word.slice(2,word.length) + word.slice(0,2) + "ay";
    } else {
      var firstConsonants = checkConsonants(word);
      return word.slice(firstConsonants.length,word.length) + firstConsonants + "ay";
    }
  } else {
    return word + "way";
  }
};


// User Logic
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = $("input").val().trim();
    var translation = pigLatin(userInput);

    $("#outputWord").text(translation);
  });
});
