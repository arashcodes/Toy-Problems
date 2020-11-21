/*
 * @lc app=leetcode id=34 lang=javascript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  let first = -1;
  let second = -1;
  
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === target) {
      first = i;
      break;
    }
  }
  
  if (first === -1) return [first, second];
  
  for (let i = nums.length; i >= 0; i -= 1) {
    if (nums[i] === target) {
      second = i;
      break;
    }
  }
  
  return [first, second]
};
// @lc code=end

