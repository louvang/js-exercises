/**
 * Title: Convert Celsius to Fahrenheit
 * Link: https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/basic-algorithm-scripting/convert-celsius-to-fahrenheit
 */

function convertToF(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

// Should return: -22
console.log(convertToF(-30));

// Should return: 14
console.log(convertToF(-10));

// Should return: 32
console.log(convertToF(0));

// Should return: 68
console.log(convertToF(20));

// Should return: 86
console.log(convertToF(30));
