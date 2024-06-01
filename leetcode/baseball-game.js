/**
 * Title: 682. Baseball Game
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/baseball-game/description/
 */

var calPoints = function (operations) {
  let newArr = [];

  for (let i = 0; i < operations.length; i++) {
    if (parseFloat(operations[i])) {
      newArr.push(parseFloat(operations[i]));
    } else if (operations[i] === '+') {
      newArr.push(newArr[newArr.length - 1] + newArr[newArr.length - 2]);
    } else if (operations[i] === 'D') {
      newArr.push(newArr[newArr.length - 1] * 2);
    } else if (operations[i] === 'C') {
      newArr.pop();
    }
  }

  return newArr.reduce((prev, curr) => {
    return prev + curr;
  }, 0);
};

// Should return: 30
console.log(calPoints(['5', '2', 'C', 'D', '+']));

// Should return: 27
console.log(calPoints(['5', '-2', '4', 'C', 'D', '9', '+', '+']));

// Should return: 0
console.log(calPoints(['1', 'C']));
