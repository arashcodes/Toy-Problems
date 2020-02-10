/*
 * @lc app=leetcode id=189 lang=javascript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
  let last = nums[nums.length - 1]
    for (let i = 0; i < k; i++) {
        let target = nums.pop(last);
        nums.unshift(target);
    }
    return nums;
};
// @lc code=end

