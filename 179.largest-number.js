/*
 * @lc app=leetcode id=179 lang=javascript
 *
 * [179] Largest Number
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function(nums) {
  nums = nums.map(num => num.toString());
  nums.sort((a, b) => `${b}${a}` - `${a}${b}`);
  
  if (nums[0] === '0') return '0';
  
  let res = '';
  
  for (let i = 0; i < nums.length; i += 1) {
    res += nums[i];
  }
  
  return res;
};
// @lc code=end

