/*
 * @lc app=leetcode id=3 lang=javascript
 *
 * [3] Longest Substring Without Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  const set = new Set();
  let max = 0, i = 0, j = 0;

  while (i < s.length && j < s.length) {
    if (!set.has(s[j])) {
      set.add(s[j]);
      j += 1;

      max = Math.max(max, set.size);
    } else {
      set.delete(s[i]);
      i += 1;
    }
  }

  return max;
};
// @lc code=end

