/*
 * @lc app=leetcode id=125 lang=javascript
 *
 * [125] Valid Palindrome
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  if (s.length === 0) return true;
  const str = s.toLowerCase().replace(/\W/g, '');
  
  let start = 0;
  let end = str.length - 1;
  
    while (end > -1 || start < str.length) {
      if (str[start] !== str[end]) {
        return false;
      }
      start++;
      end--;
    }
  return true;
};
// @lc code=end

