// Business Logic
var vowels = ["a","e","i","o","u"];

function pigLatin(word) {
var firstLetter = word[0];
console.log(firstLetter);
var checkVowel;

if (vowels.includes(firstLetter)) {
  checkVowel = true;
} else {
  checkVowel = false;
}
console.log(checkVowel);

  if (checkVowel === false) {
    console.log("this isn't a vowel");
  } else {
  return word + "way";
  }
};


// User Logic
$(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var userInput = $("input").val();
    var translation = pigLatin(userInput);

    $("#outputWord").text(translation);
  });
});
