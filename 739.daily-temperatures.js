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
  const stack = [];
  const res = new Array(T.length);
  
  for (let i = T.length - 1; i >= 0; i -= 1) {
    while (stack.length && T[i] >= T[stack[stack.length - 1]]) stack.pop();
    res[i] = !stack.length ? 0 : stack[stack.length - 1] - i;
    stack.push(i);
  }
  
  return res;
};
// @lc code=end

