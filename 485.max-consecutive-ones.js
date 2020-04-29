/*
 * @lc app=leetcode id=485 lang=javascript
 *
 * [485] Max Consecutive Ones
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
  let max = 0;
  let oneCounts = 0;
  
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      oneCounts++;
      max = Math.max(oneCounts, max);
    } else {
      oneCounts = 0;
    }
  }
  
  return max;
};
// @lc code=end

