/*
 * @lc app=leetcode id=289 lang=javascript
 *
 * [289] Game of Life
 */

// @lc code=start
/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      applyRules(i, j);
    }
  }
  
  function applyRules(x, y) {
    let nextX, nextY, liveCounter = 0;
    const dx = [0, 1, 1, 1, 0, -1, -1, -1];
    const dy = [1, 1, 0, -1, -1, -1, 0, 1];
    
    for (let i = 0; i < dx.length; i += 1) {
      nextX = dx[i] + x;
      nextY = dy[i] + y;
      
      if (isInRange(nextX, nextY) && Math.abs(board[nextX][nextY]) === 1) liveCounter += 1;
    }
    
    if (board[x][y] === 1 && liveCounter < 2) board[x][y] = -1;
    if (board[x][y] === 1 && liveCounter > 3) board[x][y] = -1;
    if (board[x][y] === 0 && liveCounter === 3) board[x][y] = 2;
  }
  
  function isInRange(x, y) {
    return (x >= 0 && x < board.length) && (y >= 0 && y < board[0].length);
  }
  
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      if (board[i][j] < 0) board[i][j] = 0;
      if (board[i][j] > 0) board[i][j] = 1;
    }
  }
  
  return board;
};
// @lc code=end

