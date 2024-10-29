/*
Description:

Given a number n, return the number of positive odd numbers below n, EASY!

Examples (Input -> Output)
7  -> 3 (because odd numbers below 7 are [1, 3, 5])
15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])
Expect large Inputs!
*/

//! Option 1:

function oddCount(n) {
  let totalOddNumbers = 0;
  for (let i = 1; i < n; i++) {
    if (i % 2 !== 0) {
      totalOddNumbers++;
    }
  }
  return totalOddNumbers;
}

//! Option 2:

function oddCount(n) {
  return Math.floor(n / 2);
}
