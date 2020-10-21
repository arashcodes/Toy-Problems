/*
 * @lc app=leetcode id=79 lang=javascript
 *
 * [79] Word Search
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  for (let i = 0; i < board.length; i += 1) {
    for (let j = 0; j < board[0].length; j += 1) {
      if (isWordFound(board, i, j, word, 0)) return true;
    }
  }
  
  return false;
};

function isWordFound(board, x, y, word, idx) {
  if (board[x][y] !== word[idx]) return false;
  if (idx + 1 === word.length) return true;
  
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let nextX, nextY;
  
  board[x][y] = '*';
  for (let i = 0; i < dx.length; i += 1) {
    nextX = dx[i] + x;
    nextY = dy[i] + y;
    
    if (isInRange(board, nextX, nextY) 
        && 
        isWordFound(board, nextX, nextY, word, idx + 1)) return true;
  }
  board[x][y] = word[idx];
  
  return false;
};

function isInRange(board, x, y) {
  return (x >= 0 && x < board.length) && (y >= 0 && y < board[0].length);
};
// @lc code=end

