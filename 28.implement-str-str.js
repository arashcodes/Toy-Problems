/*
 * @lc app=leetcode id=28 lang=javascript
 *
 * [28] Implement strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  if (needle.length > haystack.length) return -1;
  if (needle.length === 0 || needle === haystack) return 0;
  let start = 0;
  let end = needle.length;
  while (start < haystack.length - 1) {
    if (haystack.substring(start, end) === needle) {
      return start;
    } else {
      start++;
      end++
    }
  }
  return -1;
};
// @lc code=end

