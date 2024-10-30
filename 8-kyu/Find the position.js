/*
Description:

When provided with a letter, return its position in the alphabet.

Input :: "a"

Output :: "Position of alphabet: 1"

Note: Only lowercased English letters are tested
*/

function position(letter) {
  let positionOfAlphabet = letter.charCodeAt(0) - `a`.charCodeAt(0) + 1;
  return `Position of alphabet: ${positionOfAlphabet}`;
}