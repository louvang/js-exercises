/**
 * Title: 1275. Find Winner on a Tic Tac Toe Game
 * Difficulty: Easy
 * Link: https://leetcode.com/problems/find-winner-on-a-tic-tac-toe-game/description/
 */

/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
  let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ];

  let winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  let aSpots = [];
  let bSpots = [];

  for (let i = 0; i < moves.length; i++) {
    if (i === 0 || i % 2 === 0) {
      board[moves[i][0]][moves[i][1]] = 'A';
    } else {
      board[moves[i][0]][moves[i][1]] = 'B';
    }
  }

  let flatBoard = board.flat();
  flatBoard.forEach((spot, index) => {
    if (spot === 'A') {
      aSpots.push(index);
    } else if (spot === 'B') {
      bSpots.push(index);
    }
  });

  let aWon = winningCombos.some((combo) => {
    return (
      aSpots.includes(combo[0]) &&
      aSpots.includes(combo[1]) &&
      aSpots.includes(combo[2])
    );
  });

  let bWon = winningCombos.some((combo) => {
    return (
      bSpots.includes(combo[0]) &&
      bSpots.includes(combo[1]) &&
      bSpots.includes(combo[2])
    );
  });

  if (aWon) return 'A';
  if (bWon) return 'B';

  if (flatBoard.indexOf('') >= 0) {
    return 'Pending';
  } else {
    return 'Draw';
  }
};

// Should return: "A"
console.log(
  tictactoe([
    [0, 0],
    [2, 0],
    [1, 1],
    [2, 1],
    [2, 2],
  ])
);

// Should return: "B"
console.log(
  tictactoe([
    [0, 0],
    [1, 1],
    [0, 1],
    [0, 2],
    [1, 0],
    [2, 0],
  ])
);

// Should return: "Draw"
console.log(
  tictactoe([
    [0, 0],
    [1, 1],
    [2, 0],
    [1, 0],
    [1, 2],
    [2, 1],
    [0, 1],
    [0, 2],
    [2, 2],
  ])
);

// Should return: "Pending"
console.log(tictactoe([[1, 1]]));
