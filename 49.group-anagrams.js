/*
 * @lc app=leetcode id=49 lang=javascript
 *
 * [49] Group Anagrams
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  const res = [];
  const strToList = new Map();
  let key, val;
  
  for (let i = 0; i < strs.length; i += 1) {
    key = strs[i].split('').sort().join('');
    
    if (!strToList.has(key)) strToList.set(key, []);
    
    val = strToList.get(key);
    val.push(strs[i]);
    strToList.set(key, val);
  }
  
  for (let [key, val] of strToList) {
    res.push(val);
  }
  
  return res; 
};
// @lc code=end

