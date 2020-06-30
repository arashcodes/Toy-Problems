/*
 * @lc app=leetcode id=414 lang=javascript
 *
 * [414] Third Maximum Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  nums = Array.from(new Set(nums));
  const len = nums.length;
  
  if (len <= 2) return Math.max(...nums);

  if (len === 3) return Math.min(...nums);

  nums = nums.sort((a, b) => b - a);

  return nums[2];
};
// @lc code=end

