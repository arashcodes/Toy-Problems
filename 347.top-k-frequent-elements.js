/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const res = [];
  let tuples = [];
  const numsCounts = new Map();
  
  for (let i = 0; i < nums.length; i += 1) {
    if (!numsCounts.has(nums[i])) numsCounts.set(nums[i], 1);
    else numsCounts.set(nums[i], numsCounts.get(nums[i]) + 1);
  }
  
  for (let [key, val] of numsCounts) {
    tuples.push([key, val]);
  }

  tuples = tuples.sort((a, b) => b[1] - a[1]);
  
  for (let i = 0; i < k; i += 1) {
    res.push(tuples[i][0]);
  }
  
  return res;
};
// @lc code=end

