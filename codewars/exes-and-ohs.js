/**
 * Title: Exes and Ohs
 * Link: https://www.codewars.com/kata/55908aad6620c066bc00002a
 * Kata Level: 7 kyu
 */

function XO(str) {
  let o = str.match(/o/gi);
  let x = str.match(/x/gi);
  return (o && o.length) === (x && x.length);
}

// Should return: true
console.log(XO('ooxx'));

// Should return: false
console.log(XO('xooxx'));

// Should return: true
console.log(XO('ooxXm'));

// Should return: true
console.log(XO('zpzpzpp'));

// Should return: false
console.log(XO('zzoo'));
