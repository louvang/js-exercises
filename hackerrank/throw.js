/**
 * Title: Throw
 * Link: https://www.hackerrank.com/challenges/js10-arrays/problem
 */

function isPositive(a) {
  try {
    if (a === 0) {
      throw Error('Zero Error');
    }
    if (a < 0) {
      throw Error('Negative Error');
    }
    return 'YES';
  } catch (err) {
    return err.message;
  }
}

// Should return: YES
console.log(isPositive(1));

// Should return: Negative Error
console.log(isPositive(-1));

// Should return: Zero Error
console.log(isPositive(0));
