/*
 * @lc app=leetcode id=48 lang=javascript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  matrix = matrix.reverse();
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix[0].length; j += 1) {
        [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
      }
  }
  return matrix;
};
// @lc code=end

