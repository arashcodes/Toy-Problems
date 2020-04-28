/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let index = nums1.length - 1;
  m--; n--;
  
  while (index >= 0) {
    if (m < 0) {
      nums1[index] = nums2[n];
      n--;
    } else if (n < 0) {
      nums1[index] = nums1[m];
      m--;
    } else {
      if (nums1[m] < nums2[n]) {
        nums1[index] = nums2[n];
        n--;
      } else {
        nums1[index] = nums1[m];
        m--
      }
    }
    
    index--;
  }
  
  return nums1;
};
// @lc code=end

