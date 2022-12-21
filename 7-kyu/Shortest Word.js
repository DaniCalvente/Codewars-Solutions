/*
Description:

Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/

function findShort(s) {
  const stringToArray = s.split(" ");
  let shortestWord = stringToArray[0];

  for (let i = 0; i < stringToArray.length; i++) {
    if (stringToArray[i].length < shortestWord.length) {
      shortestWord = stringToArray[i];
    }
  }
  return shortestWord.length;
}
