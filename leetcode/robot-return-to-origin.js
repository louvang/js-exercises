/**
 * Title: 657. Robot Return to Origin
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/robot-return-to-origin/description/
 */

/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let position = [0, 0];
  let movesArr = moves.split('');

  movesArr.forEach((move) => {
    switch (move) {
      case 'U':
        position[1] += 1;
        break;
      case 'D':
        position[1] -= 1;
        break;
      case 'L':
        position[0] -= 1;
        break;
      case 'R':
        position[0] += 1;
        break;
    }
  });

  return position[0] === 0 && position[1] === 0;
};

// Should return: true
console.log(judgeCircle('UD'));

// Should return: false
console.log(judgeCircle('LL'));
