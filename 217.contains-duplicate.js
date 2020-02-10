/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let lookup = {};
    for (let i = 0; i < nums.length; i++) {
        if (!lookup[nums[i]]) {
            lookup[nums[i]] = 1;
        } else {
            return true;
        }
    }
    return false;
};
// @lc code=end

