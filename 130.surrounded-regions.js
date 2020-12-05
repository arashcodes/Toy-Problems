/*
 * @lc app=leetcode id=130 lang=javascript
 *
 * [130] Surrounded Regions
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solve = function(board) {
  if (!board.length) return;
  
  for (let i = 0; i < board.length; i += 1) {
    mark(i, 0);
    mark(i, board[0].length - 1);
  }
  
  for (let i = 1; i < board[0].length - 1; i += 1) {
    mark(0, i);
    mark(board.length - 1, i);
  }
  
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      if (board[i][j] === 'O') board[i][j] = 'X';
      if (board[i][j] === '#') board[i][j] = 'O';
    }
  }
  
  function mark(i ,j) {
    if (i < 0 || i > board.length - 1 || j < 0 || j > board[0].length - 1) return;
    if (board[i][j] !== 'O') return;

    board[i][j] = '#';

    mark(i - 1, j);
    mark(i + 1, j);
    mark(i, j - 1);
    mark(i, j + 1);
  }
  
  return board;
};
// @lc code=end

