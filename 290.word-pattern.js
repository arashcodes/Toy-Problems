/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  str = str.split(' ');
  if (pattern.length !== str.length) return false;
  
  const map = new Map();
  
  for (let i = 0; i < str.length; i++) {
    if (map.has(pattern[i])) {
      if (map.get(pattern[i]) !== str[i]) return false;
    } else {
      if (Array.from(map.values()).includes(str[i])) return false;
      map.set(pattern[i], str[i])
    }
  }
  
  return true;
};
// @lc code=end

