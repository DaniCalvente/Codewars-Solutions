/*
Description:

Complete the function that accepts a valid string and returns an integer.

Wait, that would be too easy! Every character of the string should be converted to the hex value of its ascii code, then the result should be the sum of the numbers in the hex strings (ignore letters).

Examples
"Yo" ==> "59 6f" ==> 5 + 9 + 6 = 20
"Hello, World!"  ==> 91
"Forty4Three"    ==> 113
MATHEMATICS - SECURITY - FUNDAMENTALS
*/

function hexHash(code) {
  let hexString = "";
  let result = 0;

  for (let i = 0; i < code.length; i++) {
    hexString += code.charCodeAt(i).toString(16);
  }
  //console.log('hexString: ',hexString)

  for (let everyPosition of hexString) {
    if (+everyPosition < 10) {
      result += +everyPosition;
    }
  }
  return result;
}
