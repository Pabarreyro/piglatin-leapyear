// Business Logic
var vowels = ["a","e","i","o","u"];

// Translates individual word into pig latin
function translateWord(word) {
  var firstLetter = word[0];
  var checkVowel;

  // Check if firstLetter is a vowel
  if (vowels.includes(firstLetter)) {
    checkVowel = true;
  } else {
    checkVowel = false;
  }

  // Run a for loop to check if input word starts with multiple consonants
  function checkConsonants(word) {
    var lettersArray = word.split("");
    var leadingConsonants = "";

    for (var i = 0; i <= lettersArray.length; i++) {
      if (vowels.includes(lettersArray[i]) === false) {
        leadingConsonants += lettersArray[i];
      } else {
        break
      }
    }
    return leadingConsonants;
  };

  // Determines what is returned to user
  if (checkVowel === false) {
    if (word[0] === "q" && word[1] === "u") {
      return word.slice(2,word.length) + "Quay";
    } else {
      var firstConsonants = checkConsonants(word);
      var firstConsonantsCaps = firstConsonants.charAt(0).toUpperCase() + firstConsonants.substr(1);
      return word.slice(firstConsonants.length,word.length) + firstConsonantsCaps + "ay";
    }
  } else {
    return word + "Way";
  }
};

function loadWords(array) {
  var translation = "";
  array.forEach(function(element){
    translation += translateWord(element) + " ";
  })
  return translation;
}


// User Logic
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = $("input").val().toLowerCase().trim();
    var wordsArray = userInput.split(" ");
    var output = loadWords(wordsArray);
    $("#outputWord").text(output);
  });
});
