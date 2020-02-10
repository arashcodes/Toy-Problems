/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  let plus = 1;
  for (let i = digits.length - 1; i >= 0; i--) {
    const sum = digits[i] + plus;
    digits[i] = sum % 10;
    plus = sum >= 10 ? 1 : 0;
  }
  if (plus) {digits.unshift(1)}
  return digits;
};
// @lc code=end

