/*
 * @lc app=leetcode id=290 lang=javascript
 *
 * [290] Word Pattern
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
  const patternList = pattern.split('');
  const strList = str.split(' ');
  if (patternList.length !== strList.length) return false;
  
  let code = 0;
  const pattObj = {};
  const strObj = {};
  
  for (let i = 0; i < patternList.length; i++) {
    if (!pattObj[patternList[i]]) {
      pattObj[patternList[i]] = code + 1;
      code += 1;
    }
  }
  
  code = 0;
  
  for (let i = 0; i < strList.length; i++) {
    if (!strObj[strList[i]]) {
      strObj[strList[i]] = code + 1;
      code += 1;
    }
  }
  
  for (let i = 0; i < patternList.length; i++) {
    patternList[i] = pattObj[patternList[i]];
  }
  
  for (let i = 0; i < strList.length; i++) {
    strList[i] = strObj[strList[i]];
  }
  
  for (let i = 0; i < patternList.length; i++) {
    if (strList[i] !== patternList[i]) return false;
  }
  
  return true;
};
// @lc code=end

