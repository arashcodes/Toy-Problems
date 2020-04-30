/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(arr) {
  let start = 0;
  let end = arr.length - 1;
  let res = new Array(arr.length);
  
  for (let i = arr.length -1; i >= 0; i--) {
    const sq1 = arr[start] ** 2;
    const sq2 = arr[end] ** 2;
    
    if (sq1 > sq2) {
      res[i] = sq1;
      start++;
    } else {
      res[i] = sq2;
      end--;
    }
  }
  
  return res;
};
// @lc code=end

