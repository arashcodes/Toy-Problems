/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let lookup = {};
    for (let i = 0; i < nums.length; i++) {
        if (!lookup[nums[i]]) {
            lookup[nums[i]] = 1;
        } else {
            lookup[nums[i]]++;
        }
    }
    
    for (let key in lookup) {
        if (lookup[key] === 1) {
            return key
        }
    }
};
// @lc code=end

