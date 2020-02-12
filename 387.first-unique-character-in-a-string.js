/*
 * @lc app=leetcode id=387 lang=javascript
 *
 * [387] First Unique Character in a String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let charObj = {};

  let res = s.length + 1;
  for (let i = 0; i < s.length; i++) {
      if (!charObj[s[i]]) {
          charObj[s[i]] = 1
      } else {
          charObj[s[i]]++
      }
  }

  for (let key in charObj) {
     if (charObj[key] > 1) {
         delete charObj[key];
     }
  }
  if (Object.keys(charObj).length === 0) {
      return -1;
  }
  for (let key in charObj) {
      res = Math.min(res, s.indexOf(key))
  }
  return res;
};
// @lc code=end

