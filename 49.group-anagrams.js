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
  const map = new Map();
  map.set(strs[0], []);
  const keys = [strs[0]];
  let isFound;
  
  for (let i = 1; i < strs.length; i += 1) {
    isFound = false;
    for (let j = 0; j < keys.length; j += 1) {
      if (isAnagram(strs[i], keys[j])) {
        isFound = true;
        const arr = map.get(keys[j]).slice();
        arr.push(strs[i]);
        map.set(keys[j], arr);
      }
    }
    if (!isFound) {
      keys.push(strs[i]);
      map.set(strs[i], []);
    }
  }
  
  for (let [key, val] of map) {
    const arr = [key]
    if (val.length) val.forEach(str => arr.push(str));
    res.push(arr);
  }
  
  return res;  
};

function isAnagram(s1, s2) {
  if (s1.length !== s2.length) return false;
  const s1Map = new Map();
  const s2Map = new Map();
  
  for (let i = 0; i < s1.length; i += 1) {
    if (!s1Map.has(s1[i])) s1Map.set(s1[i], 1);
    else s1Map.set(s1[i], s1Map.get(s1[i]) + 1);
  }
  
  for (let i = 0; i < s2.length; i += 1) {
    if (!s2Map.has(s2[i])) s2Map.set(s2[i], 1);
    else s2Map.set(s2[i], s2Map.get(s2[i]) + 1);
  }
  
  for (let i = 0; i < s1.length; i += 1) {
    if (s1Map.get(s1[i]) !== s2Map.get(s1[i])) return false;
  }
  
  return true;
}
// @lc code=end

