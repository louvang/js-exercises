/**
 * Title: Polygon Class
 * Link: https://www.hackerrank.com/challenges/js10-class/problem
 */

class Polygon {
  constructor(sides) {
    this.perimeter = function () {
      return sides.reduce((sum, curr) => {
        return sum + curr;
      });
    };
  }
}

// Should return: 12
let triangle = new Polygon([3, 4, 5]);
console.log(triangle.perimeter());
