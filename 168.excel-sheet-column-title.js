/*
 * @lc app=leetcode id=168 lang=javascript
 *
 * [168] Excel Sheet Column Title
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var convertToTitle = function(n) {
  if (n < 27) return String.fromCharCode(n + 64);
  let s = '';
  
  while (n > 0) {
      let temp = n % 26;
      temp = temp == 0 ? 26 : temp;
      s = String.fromCharCode(temp + 64) + s;
      n -= temp;
      n /= 26;
  }
  return s;
};
// @lc code=end

