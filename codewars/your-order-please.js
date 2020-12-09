/**
 * Title: Your Order, Please
 * Link: https://www.codewars.com/kata/55c45be3b2079eccff00010f
 * Kata Level: 6 kyu
 */

function order(words) {
  let arr = words.split(' ');
  return arr.sort((a, b) => a.match(/\d/) - b.match(/\d/));
}

// Should return: Thi1s is2 3a T4est
console.log(order('is2 Thi1s T4est 3a'));

// Should return: Fo1r the2 g3ood 4of th5e pe6ople
console.log(order('4of Fo1r pe6ople g3ood th5e the2'));

// Should return: ""
console.log(order(''));
