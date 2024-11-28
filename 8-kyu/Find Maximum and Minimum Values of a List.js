/*
Description:

Your task is to make two functions ( max and min, or maximum and minimum, etc., depending on the language ) that receive a list of integers as input, and return the largest and lowest number in that list, respectively. Each function returns one number.

*/

var min = function (list) {
  let minValue = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] < minValue) {
      minValue = list[i];
    }
  }

  return minValue;
};

var max = function (list) {
  let maxValue = list[0];
  for (let i = 1; i < list.length; i++) {
    if (list[i] > maxValue) {
      maxValue = list[i];
    }
  }

  return maxValue;
};
