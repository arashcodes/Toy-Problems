/*
 * @lc app=leetcode id=394 lang=javascript
 *
 * [394] Decode String
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
  const stack = [];
  let currNum = 0;
  let currStr = '';
  
  for (let c of s) {
    if (c === '[') {
      stack.push(currStr);
      stack.push(currNum);
      currStr = '';
      currNum = 0;
      
    } else if (c === ']') {
      const num = stack.pop();
      const prevStr = stack.pop();
      currStr = prevStr + currStr.repeat(num);
      
    } else if (c >= '0' && c <= '9') {
      currNum = (currNum * 10) + parseInt(c);
    } else {
      currStr += c;
    }
  }
  
  return currStr;
};
// @lc code=end

