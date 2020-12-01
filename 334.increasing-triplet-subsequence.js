/*
 * @lc app=leetcode id=334 lang=javascript
 *
 * [334] Increasing Triplet Subsequence
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function(nums) {
  let small = Infinity, big = Infinity;
  
  for (let num of nums) {
    if (num <= small) small = num;
    else if (num <= big) big = num;
    else return true;
  }

  return false;
};
// @lc code=end

