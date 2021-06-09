/**
 * Title: Tagged Template Literals
 * Link: https://www.hackerrank.com/challenges/js10-template-literals/problem
 */

function sides(literals, ...expressions) {
  let a = expressions[0];
  let p = expressions[1];

  let s1 = (p + Math.sqrt(Math.pow(p, 2) - 16 * a)) / 4;
  let s2 = (p - Math.sqrt(Math.pow(p, 2) - 16 * a)) / 4;

  let arr = [s1, s2];

  return arr.sort();
}

// Should return: [ 10, 14 ]
let area = 140;
let perimeter = 48;
console.log(sides`The area is ${area}.\nThe perimeter is: ${perimeter}.`);
