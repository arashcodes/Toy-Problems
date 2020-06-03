/*
 * @lc app=leetcode id=1299 lang=javascript
 *
 * [1299] Replace Elements with Greatest Element on Right Side
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  let curr = 0;
  let max = -Infinity;
  
  while (curr < arr.length) {
    if (curr === arr.length - 1) {
      arr[curr] = -1;
      
    } else {
      for (let i = curr + 1; i < arr.length; i++) {
        max = Math.max(max, arr[i]);
      }
      arr[curr] = max;
      max = -Infinity;
    }
    
    curr++;
  }
  
  return arr;
};
// @lc code=end

