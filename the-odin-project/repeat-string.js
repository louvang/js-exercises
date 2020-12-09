/**
 * Title: Repeat String
 * Link: https://github.com/TheOdinProject/javascript-exercises/tree/master/repeatString
 * Note: This exercise specically says to use a loop although the simpler method is to use 'String.repeat()'
 */

let solution = (str, num) => {
  let newStr = '';

  for (let i = 0; i < num; i++) {
    newStr += str;
  }

  return newStr;
};

// Should return: 'heyheyhey'
console.log(solution('hey', 3));
