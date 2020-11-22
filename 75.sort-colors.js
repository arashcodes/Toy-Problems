/*
 * @lc app=leetcode id=75 lang=javascript
 *
 * [75] Sort Colors
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
  let two = 0;
  let one = 0
  let zero = 0;
  let curr;
  
  while (nums.length) {
    curr = nums.pop();
    if (curr === 2) two += 1;
    if (curr === 1) one += 1;
    if (curr === 0) zero += 1;
  }
  
  while (zero > 0) {
    nums.push(0);
    zero -= 1;
  }
  
  while (one > 0) {
    nums.push(1);
    one -= 1;
  }
  
  while (two > 0) {
    nums.push(2);
    two -= 1;
  }
  
  return nums;
};
// @lc code=end

