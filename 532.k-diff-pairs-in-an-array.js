/*
 * @lc app=leetcode id=532 lang=javascript
 *
 * [532] K-diff Pairs in an Array
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  if (nums.length === 0 || k < 0) return 0;
  let counter = 0;

  const numsToCounts = new Map();

  for (let num of nums) {
    numsToCounts.set(num, (numsToCounts.get(num) + 1) || 1);
  }

  for (let [key, val] of numsToCounts) {
    if (k === 0) {
      if (val > 1) counter += 1;
    }
    else if (numsToCounts.has(key + k)) counter += 1;
  }

  return counter;
};
// @lc code=end

