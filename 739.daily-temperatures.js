/*
 * @lc app=leetcode id=739 lang=javascript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function(T) {
  const res = [];
  let counter, isFound;
  
  for (let i = 0; i < T.length; i += 1) {
    counter = 0;
    isFound = false;
    for (let j = i + 1; j < T.length; j += 1) {
      if (T[j] > T[i]) {
        counter += 1;
        isFound = true;
        break;
      } else if (j !== T.length - 1) {
        counter +=1;
      }
      
      if (j === T.length - 1 && !isFound) counter = 0;
    }
    res.push(counter);
  }
  
  return res;
};
// @lc code=end

