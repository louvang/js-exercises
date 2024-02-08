/**
 * Title: 1502. Can Make Arithmetic Progression From Sequence
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/can-make-arithmetic-progression-from-sequence/description/
 */
var canMakeArithmeticProgression = function (arr) {
  let sorted = arr.sort((a, b) => a - b);

  let differences = sorted.map((num, i) => {
    return sorted[i + 1] - num;
  });

  differences.pop();

  return differences.every((num) => num === differences[0]);
};

// Should return: true
console.log(canMakeArithmeticProgression([3, 5, 1]));

// Should return: false
console.log(canMakeArithmeticProgression([1, 2, 4]));

// Should return: true
console.log(canMakeArithmeticProgression([8, 8, 8]));

// Should return: true
console.log(canMakeArithmeticProgression([9, 3, 12, 6]));

// Should return: true
console.log(canMakeArithmeticProgression([0, 0, 0, 0]));

// Should return: false
console.log(canMakeArithmeticProgression([-15, -1, -3, 5, -12, -14]));

// Should return: true
console.log(canMakeArithmeticProgression([-68, -96, -12, -40, 16]));
