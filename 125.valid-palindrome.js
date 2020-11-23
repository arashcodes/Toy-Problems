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
  s = trimStr(s.toLowerCase());
  let start = 0, end = s.length - 1;
  
  while (start <= end) {
    if (s[start] !== s[end]) return false;
    
    start += 1;
    end -= 1;
  }
  
  return true;
};

function trimStr(str) {
  console.log(str)
  res = '';
  
  for (let i = 0; i < str.length; i += 1) {
    if ((str[i] >= 'a' && str[i] <= 'z')
        || 
        str[i] >= '0' && str[i] <= '9') {
      res += str[i];
    }
  }
  
  return res;
}
// @lc code=end

