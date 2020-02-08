/*
 * @lc app=leetcode id=242 lang=javascript
 *
 * [242] Valid Anagram
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
  if (s.length !== t.length) {return false;} 
  let lookup = {};
   for (let i = 0; i < s.length; i++) {
       if (!lookup[s[i]]) {
           lookup[[s[i]]] = 1;
       } else {
           lookup[s[i]]++;
       }
   }
   for (let i = 0; i < t.length; i++) {
       if (!lookup[t[i]]) {return false;}
       lookup[t[i]]--;
   }
   return true;
};
// @lc code=end

