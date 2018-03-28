// Business Logic
var vowels = ["a","e","i","o","u"];

// Translates individual word into pig latin
function translateWord(word) {
  var firstLetter = word[0];
  var checkVowel;

  // Check if firstLetter is a vowel
  if (word.match(/^[aeiou]/)) {
    checkVowel = true;
    console.log(word.match(/^[aeiou]/));
  } else {
    checkVowel = false;
  }

  // Run a for loop to check if input word starts with multiple consonants
  function checkConsonants(word) {
    var lettersArray = word.split("");
    var leadingConsonants = "";

    for (var i = 0; i <= lettersArray.length; i++) {
      if (leadingConsonants.length < lettersArray.length && vowels.includes(lettersArray[i]) === false) {
        leadingConsonants += lettersArray[i];
      } else {
        break
      }
    }
    // console.log(leadingConsonants);
    if (leadingConsonants.charAt(leadingConsonants.length-1) === "q" && word[leadingConsonants.length] === "u") {
      leadingConsonants += "u";
      return leadingConsonants;
    } else if (leadingConsonants.charAt(leadingConsonants.length-1) === "y") {
      leadingConsonants = leadingConsonants.slice(0,leadingConsonants.length-1);
      return leadingConsonants;
    } else {
      return leadingConsonants;
    }
  };

  // Determines what is returned to user
  if (checkVowel === false) {
    var firstConsonants = checkConsonants(word);
    var firstConsonantsCaps = firstConsonants.charAt(0).toUpperCase() + firstConsonants.substr(1);
    return word.slice(firstConsonants.length,word.length) + firstConsonantsCaps + "ay";
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
