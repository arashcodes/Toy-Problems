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
  nums.sort((a, b) => a - b);
  
  for (let i = 0; i <= nums.length; i += 1) {
    if (i !== nums[i]) return i;
  }
};
// @lc code=end

