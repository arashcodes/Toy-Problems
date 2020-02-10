/*
 * @lc app=leetcode id=283 lang=javascript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
  let left = 0;
  let right = 1;
  while (right < nums.length) {
      if (nums[left] === 0 && nums[right] !== 0) {
          [nums[left], nums[right]] = [nums[right], nums[left]]
          left++;
          right++
      } else if (nums[left] === 0 && nums[right] === 0) {
          right++;
      } else {
        right++;
        left++;   
      }
  }
  return nums;
};
// @lc code=end

