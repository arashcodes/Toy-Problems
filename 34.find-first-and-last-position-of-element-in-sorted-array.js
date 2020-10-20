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
  if (!nums.length) return [-1, -1];
  
  const res = [-1, -1];
  let firstFound = false;
  
  for (let i = 0; i < nums.length; i += 1) {
    if (nums[i] === target && !firstFound) {
      firstFound = true;
      res[0] = i;
      res[1] = i;
    } else if (nums[i] === target && firstFound) res[1] = i;
  }
  
  if (!firstFound) return [-1, -1];
  
  return res;
};
// @lc code=end

