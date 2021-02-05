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
  const ref = JSON.parse(JSON.stringify(board));
  for (let i = 0; i < ref.length; i += 1) {
    for (let j = 0; j < ref[0].length; j += 1) {
      applyRules(i, j);
    }
  }
  
  function applyRules(x, y) {
    let nextX, nextY, countOnes = 0;
    const dx = [0, 1, 1, 1, 0, -1, -1, -1];
    const dy = [1, 1, 0, -1, -1, -1, 0, 1];
    
    for (let i = 0; i < dx.length; i += 1) {
      nextX = dx[i] + x;
      nextY = dy[i] + y;
      
      if (isInRange(nextX, nextY) && ref[nextX][nextY] === 1) countOnes += 1;
    }
    // console.log([x, y], countOnes)
    
    if (ref[x][y] === 1 && countOnes < 2) board[x][y] = 0;
    if (ref[x][y] === 1 && countOnes > 3) board[x][y] = 0;
    if (ref[x][y] === 0 && countOnes === 3) board[x][y] = 1;
  }
  
  function isInRange(x, y) {
    return (x >= 0 && x < board.length) && (y >= 0 && y < board[0].length);
  }
  
  return board;
};
// @lc code=end

