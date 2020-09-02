/*
 * @lc app=leetcode id=150 lang=javascript
 *
 * [150] Evaluate Reverse Polish Notation
 */

// @lc code=start
/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  const s = [];
  
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === '+') {
      s.push(s.pop() + s.pop());
    } else if (tokens[i] === '-') {
      s.push(-s.pop() + s.pop());
    } else if (tokens[i] === '*') {
      s.push(s.pop() * s.pop());
    } else if (tokens[i] === '/') {
      const x = s.pop();
      const y = s.pop();
      s.push(parseInt(y / x));
    } else {
      s.push(parseInt(tokens[i]))
    }
  }
  
  return s[0];
};
// @lc code=end

