/*
 * @lc app=leetcode id=581 lang=javascript
 *
 * [581] Shortest Unsorted Continuous Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
  if (nums.length <= 1) return 0;
  let start = 0;
  let end = 0;
  const sorted = nums.slice().sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 1; i += 1) {
    if (nums[i] !== sorted[i]) {
      start = i;
      break;
    }
  }
  
  for (let i = nums.length - 1; i >= 0; i-= 1) {
    if (nums[i] !== sorted[i]) {
      end = i + 1;
      break;
    }
  }
  
  return end - start;
};
// @lc code=end

