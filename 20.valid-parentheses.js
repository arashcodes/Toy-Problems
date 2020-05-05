/*
 * @lc app=leetcode id=20 lang=javascript
 *
 * [20] Valid Parentheses
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  let map = {
    ")" : "(",
    "]": "[",
    "}": "{"
  }
  
  let arr = [];
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      arr.push(s[i])
    } else {
      if (map[s[i]] === arr[arr.length - 1]) {
        arr.pop();
      } else {
        return false;
      }
    }
  }
  
  return arr.length > 0 ? false : true;
};
// @lc code=end

