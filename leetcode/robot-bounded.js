/**
 * Title: 283. Robot Bounded In Circle
 * Difficulty: Medium
 * Link: https://leetcode.com/problems/robot-bounded-in-circle/description/
 */

var isRobotBounded = function (instructions) {
  let pos = [0, 0];
  let directions = ['north', 'east', 'south', 'west'];
  let facing = 0;

  for (const step of instructions) {
    if (step === 'G') {
      switch (directions[facing]) {
        case 'north':
          pos[0] += 1;
          break;
        case 'south':
          pos[0] -= 1;
          break;
        case 'east':
          pos[1] += 1;
          break;
        case 'west':
          pos[1] -= 1;
          break;
      }
    } else if (step === 'L') {
      if (facing === 0) {
        facing = 3;
      } else {
        facing -= 1;
      }
    } else if (step === 'R') {
      if (facing === 3) {
        facing = 0;
      } else {
        facing += 1;
      }
    }
  }

  return (pos[0] === 0 && pos[1] === 0) || facing !== 0;
};

// Shoulder return: true
console.log(isRobotBounded('GGLLGG'));

// Shoulder return: false
console.log(isRobotBounded('GG'));

// Shoulder return: true
console.log(isRobotBounded('GL'));
