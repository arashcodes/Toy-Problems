/*
 * @lc app=leetcode id=11 lang=javascript
 *
 * [11] Container With Most Water
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let max = -Infinity;
  let minHeight, distance;
  
  while (left <= right) {
    minHeight = Math.min(height[left], height[right]);
    distance = right - left;
    max = Math.max(max, (minHeight * distance));
    
    if (height[left] <= height[right]) left += 1;
    else right -= 1;
  }
  
  return max;
};
// @lc code=end

