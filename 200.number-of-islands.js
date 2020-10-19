/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 */

// @lc code=start
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  let islandCounter = 0;
  
  for (let i = 0; i < grid.length; i += 1) {
    for (let j = 0; j < grid[0].length; j += 1) {
      if (grid[i][j] === '1') {
        islandCounter += 1;
        grid = visitIslands(grid, i, j);
      }
    }
  }
  
  return islandCounter;
};

function visitIslands(grid, x, y) {
  const q = [];
  q.push([x, y]);
  grid[x][y] = 'V';

  let nextX, nextY, currPos;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  while (q.length) {
    currPos = q.shift();

    for (let i = 0; i < dx.length; i += 1) {
      nextX = dx[i] + currPos[0];
      nextY = dy[i] + currPos[1];

      if (isInRange(grid, nextX, nextY) && grid[nextX][nextY] === '1') {
        grid[nextX][nextY] = 'V';
        q.push([nextX, nextY]);
      }
    }
  }
  
  return grid;
};


function isInRange(grid, x, y) {
  return (x >= 0 && x < grid.length) && (y >= 0 && y < grid[0].length);
};
// @lc code=end

