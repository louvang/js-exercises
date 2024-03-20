/**
 * Title: 896. Monotonic Array
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/monotonic-array/description/
 */

var isMonotonic = function (nums) {
  var progression = [];

  for (let i = 0; i < nums.length; i++) {
    if (i > 0) {
      if (nums[i] === nums[i - 1]) {
        progression.push(0);
      } else if (nums[i] > nums[i - 1]) {
        progression.push(1);
      } else {
        progression.push(-1);
      }
    }
  }

  let increasing = progression.every((num) => {
    return num >= 0;
  });

  let decreasing = progression.every((num) => {
    return num <= 0;
  });

  if (increasing || decreasing) {
    return true;
  } else {
    return false;
  }
};

// Should return: true
console.log(isMonotonic([1, 2, 2, 3]));

// Should return: true
console.log(isMonotonic([6, 5, 4, 4]));

// Should return: false
console.log(isMonotonic([1, 3, 2]));
