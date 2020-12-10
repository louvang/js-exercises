/**
 * Title: Where Do I Belong?
 * Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong
 */

function getIndexToIns(arr, num) {
  arr.sort((a, b) => a - b);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return arr.length;
}

// Should return: 3
console.log(getIndexToIns([10, 20, 30, 40, 50], 35));

// Should return: 2
console.log(getIndexToIns([10, 20, 30, 40, 50], 30));

// Should return: 1
console.log(getIndexToIns([40, 60], 50));

// Should return: 0
console.log(getIndexToIns([3, 10, 5], 3));

// Should return: 2
console.log(getIndexToIns([5, 3, 20, 3], 5));

// Should return: 2
console.log(getIndexToIns([2, 20, 10], 19));

// Should return: 3
console.log(getIndexToIns([2, 5, 10], 15));

//Should return: 0
console.log(getIndexToIns([], 1));
