/**
 * Title: Inheritance
 * Link: https://www.hackerrank.com/challenges/js10-inheritance/problem
 */

// Rectangle class
class Rectangle {
  constructor(w, h) {
    this.w = w;
    this.h = h;
  }
}

// Add area method to Rectangle class
Rectangle.prototype.area = function () {
  return this.h * this.w;
};

// Create Square class that inherits from Rectangle and implement its class constructor
class Square extends Rectangle {
  constructor(s) {
    super(s);
    this.w = s;
    this.h = s;
  }
}

// Should return: 10
let rect = new Rectangle(5, 2);
console.log(rect.area());

// Should return: 9
let square = new Square(3);
console.log(square.area());
