/**
 * Title: Sum of Pairs
 * Link: https://www.codewars.com/kata/54d81488b981293527000c8f/train/javascript
 * Kata Level: 5 kyu
 */

const sumPairs = (ints, s) => {
  let memoizedVals = {};
  let result = [ints.length, ints.length];

  for (let i = 0; i < result[1]; i++) {
    if (!memoizedVals[ints[i]]) {
      let intReq = s - ints[i];
      let matchedIndex = ints.findIndex((int, index) => int === intReq && index !== i);
      if (matchedIndex > i) {
        result = [ints[i], ints[matchedIndex]];
        memoizedVals[ints[i]] = result;
      } else {
        memoizedVals[ints[i]] = 'undefined';
      }
    }
  }

  let arr = Object.values(memoizedVals);
  let isUndefined = arr.every((val) => val === 'undefined');
  return isUndefined ? undefined : result;
};

// Should return: [1, 7]
console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));

// Should return: [0, -6]
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6));

// Should return: undefined
console.log(sumPairs([20, -13, 40], -7));

// Should return: [1, 1]
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2));

// Should return: [3, 7]
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));

// Should return: [4, 4]
console.log(sumPairs([4, -2, 3, 3, 4], 8));

// Should return: [0, 0]
console.log(sumPairs([0, 2, 0], 0));

// Should return: [13, -3]
console.log(sumPairs([5, 9, 13, -3], 10));

// Should return: [6, 7]
console.log(
  sumPairs(
    [
      13, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      6, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 7, 1, 1, 1, 1,
      1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
      1, 1,
    ],
    13
  )
);
