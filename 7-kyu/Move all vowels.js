/*
Description:

Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

Vowels are (in this kata): a, e, i, o, u

Note: all provided input strings are lowercase.

Examples
"day"    ==>  "dya"
"apple"  ==>  "pplae"
*/

function moveVowel(input) {
  let stringWithoutVowles = [];
  let vowelsString = [];

  for (let i = 0; i < input.length; i++) {
    if (
      input[i] === "a" ||
      input[i] === "e" ||
      input[i] === "i" ||
      input[i] === "o" ||
      input[i] === "u"
    ) {
      vowelsString.push(input[i]);
    } else {
      stringWithoutVowles.push(input[i]);
    }
  }
  return stringWithoutVowles.join("") + vowelsString.join("");
}
