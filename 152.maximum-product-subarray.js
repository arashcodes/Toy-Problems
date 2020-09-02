/*
 * @lc app=leetcode id=152 lang=javascript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
  let prevMax = nums[0];
  let prevMin = nums[0];
  let currMin;
  let currMax;
  let num;
  let res = nums[0];
  
  for (let i = 1; i < nums.length; i++) {
    num = nums[i];
    currMax = Math.max(prevMax * num, prevMin * num, num);
    currMin = Math.min(prevMax * num, prevMin * num, num);
    
    prevMax = Math.max(currMax, currMin);
    prevMin = Math.min(currMax, currMin);
    
    res = Math.max(res, prevMax);
  }
  
  return res;
};
// @lc code=end

