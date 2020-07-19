/*
 * @lc app=leetcode id=560 lang=javascript
 *
 * [560] Subarray Sum Equals K
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  const map = new Map([[0, 1]]);
  let sum = 0;
  let counter = 0;
  
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    
    if (map.has(sum - k)) counter += map.get(sum - k);
    if (map.has(sum)) map.set(sum, map.get(sum) + 1);
    else map.set(sum, 1);
  }
  
  return counter;
};
// @lc code=end

