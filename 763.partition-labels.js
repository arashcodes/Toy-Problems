/*
 * @lc app=leetcode id=763 lang=javascript
 *
 * [763] Partition Labels
 */

// @lc code=start
/**
 * @param {string} S
 * @return {number[]}
 */
var partitionLabels = function(s) {
  const res = [];
  const last = new Map();
  let j, anchor;
  
  for (let i = 0; i < s.length; i += 1) {
    last.set(s[i], i);
  }
  
  anchor = 0;
  j = 0;
  
  for (let i = 0; i < s.length; i += 1) {
    j = Math.max(j, last.get(s[i]));
    
    if (i === j) {
      res.push((i - anchor) + 1);
      anchor = i + 1;
    }
  }
  
  return res;
};
// @lc code=end

