/*
 * @lc app=leetcode id=448 lang=javascript
 *
 * [448] Find All Numbers Disappeared in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const res = [];
  
  for (let i = 1; i <= nums.length; i++) {
    res.push(i)
  }
  
  for (let i = 0; i < nums.length; i++) {
    res[(nums[i] - 1)] = -1
  }
  
  return res.filter(i => i > 0);
};
// @lc code=end

