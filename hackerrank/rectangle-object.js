/**
 * Title: Create a Rectangle Object
 * Link: https://www.hackerrank.com/challenges/js10-objects/problem
 */

function Rectangle(a, b) {
  return {
    length: a,
    width: b,
    perimeter: a * 2 + b * 2,
    area: a * b,
  };
}

// Should return: { length: 4, width: 5, perimeter: 18, area: 20 }
console.log(Rectangle(4, 5));
