/*
 * @lc app=leetcode id=26 lang=javascript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length < 2) return nums;
  
  let left = 0;
  let right = 1;
  
  while (right < nums.length) {
    if (nums[left] === nums[right]) {
      nums.splice(right, 1);
    } else {
      left++;
      right++;
    }
  }
  
  return nums.length;
};
// @lc code=end

