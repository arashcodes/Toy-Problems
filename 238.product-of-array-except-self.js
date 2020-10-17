/*
 * @lc app=leetcode id=238 lang=javascript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
  const output = [];
  let leftMult = 1;
  let rightMult = 1;
  
  for (let i=nums.length - 1; i >= 0; i--) {
      output[i] = rightMult;
      rightMult *= nums[i];
  }

  for (let j=0; j < nums.length; j++) {
      output[j] *= leftMult;
      leftMult *= nums[j];
  }

  return output;
};
// @lc code=end

