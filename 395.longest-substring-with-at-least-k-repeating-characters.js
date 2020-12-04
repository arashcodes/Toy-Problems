/*
 * @lc app=leetcode id=395 lang=javascript
 *
 * [395] Longest Substring with At Least K Repeating Characters
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function(s, k) {
  let len = 0;
  let idx = 0, curr = '';
  const charMap = new Map();
  
  for (let char of s) charMap.set(char, charMap.get(char) + 1 || 1);
  
  while (idx < s.length) {
    for (let i = idx; i < s.length; i += 1) {
      if (charMap.get(s[i]) >= k) {
        curr += s[i];
        if (isValid(curr, k)) len = Math.max(len, curr.length);
      } else break;
    }
    
    curr = '';
    idx += 1;
  }
  
  return len;
};

function isValid(s, k) {
  const charMap = new Map();
  for (let char of s) charMap.set(char, charMap.get(char) + 1 || 1);
  
  for (let [key, val] of charMap) if (val < k) return false;
  
  return true;
}
// @lc code=end

