/**
 * Title: Get Second Largest Number
 * Link: https://www.hackerrank.com/challenges/js10-arrays/problem
 */

function getSecondLargest(nums) {
  const max = Math.max(...nums);
  const maxRemoved = nums.filter((num) => num !== max);
  const secondLargest = Math.max(...maxRemoved);
  return secondLargest;
}

// Should return: 5
console.log(getSecondLargest([2, 3, 6, 6, 5]));

// Should return: 10
console.log(getSecondLargest([10, 9, 9, 8, 8, 11, 8, 0, 9, 1]));
