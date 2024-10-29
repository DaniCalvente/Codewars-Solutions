/*
Description:

Sentence Smash
Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

Example
['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
words = ['hello', 'world', 'this', 'is', 'great']
smash(words) # returns "hello world this is great"
Assumptions
You can assume that you are only given words.
You cannot assume the size of the array.
You can assume that you do get an array.
*/

//! OPtion 1:

function smash(words) {
  let smashedWords = "";
  for (let i = 0; i < words.length; i++) {
    if (i < words.length - 1) {
      smashedWords = `${smashedWords}${words[i]} `;
    } else {
      smashedWords = `${smashedWords}${words[i]}`;
    }
  }
  return smashedWords;
}

//! Option 2:

function smash(words) {
  return words.join(" ");
}
