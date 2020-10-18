/*
 * @lc app=leetcode id=287 lang=javascript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  const numSet = new Set();
  
  for (let num of nums) {
    if (numSet.has(num)) return num;
    else numSet.add(num);
  }
};
// @lc code=end

