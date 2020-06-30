/*
 * @lc app=leetcode id=1051 lang=javascript
 *
 * [1051] Height Checker
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  const copyArr = heights.slice();
  const targetArray = copyArr.sort((a, b) => a - b);
  let changeCounter = 0;
  
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== targetArray[i]) {
      changeCounter++;
    }  
  }

  return changeCounter;
};
// @lc code=end

