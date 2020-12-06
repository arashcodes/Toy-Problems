/*
 * @lc app=leetcode id=268 lang=javascript
 *
 * [268] Missing Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
  const numSet = new Set(nums);
  
  for (let i = 0; i <= nums.length; i += 1) {
    if (!numSet.has(i)) return i;
  }
  
  return -1;
};
// @lc code=end

