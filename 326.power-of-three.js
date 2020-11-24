/*
 * @lc app=leetcode id=326 lang=javascript
 *
 * [326] Power of Three
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function(n) {
  if (n < 0) return false;
  let num = 0;
  
  while ((3 ** num) <= n) {
    if ((3 ** num) === n) return true;
    
    num += 1;
  }
  
  return false;
};
// @lc code=end

