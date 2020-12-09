/**
 * Title: Mexican Wave
 * Link: https://www.codewars.com/kata/58f5c63f1e26ecda7e000029
 * Kata Level: 6 kyu
 */

function wave(str) {
  let arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/i)) {
      arr.push(str.slice(0, i) + str[i].toUpperCase() + str.slice(i + 1));
    }
  }
  return arr;
}

// Should return: ["Hello", "hEllo", "heLlo", "helLo", "hellO"]
console.log(wave('hello'));

// Should return: [" Gap ", " gAp ", " gaP "]
console.log(wave(' gap '));

// Should return: ["Two words", "tWo words", "twO words", "two Words", "two wOrds", "two woRds", "two worDs", "two wordS"];
console.log(wave('two words'));
