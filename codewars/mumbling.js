/**
 * Title: Mumbling
 * Link: https://www.codewars.com/kata/5667e8f4e3f572a8f2000039
 * Kata Level: 7 kyu
 */

function accum(s) {
  let arr = s.toLowerCase().split('');

  return arr
    .map((letter, index) => {
      return letter.toUpperCase() + letter.repeat(index);
    })
    .join('-');
}

// Should return: "A-Bb-Ccc-Dddd"
console.log(accum('abcd'));

// Should return: "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
console.log(accum('RqaEzty'));

// Should return: "C-Ww-Aaa-Tttt"
console.log(accum('cwAt'));
