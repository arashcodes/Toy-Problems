/*
 * @lc app=leetcode id=674 lang=javascript
 *
 * [674] Longest Continuous Increasing Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
  let res = 0;
  let anchor = 0;

  for (let i = 0; i < nums.length; i += 1) {
    if (i > 0 && nums[i - 1] >= nums[i]) anchor = i;

    res = Math.max(res, i - anchor + 1);
  }

  return res;
};
// @lc code=end

