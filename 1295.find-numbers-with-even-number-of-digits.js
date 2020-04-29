/*
 * @lc app=leetcode id=1295 lang=javascript
 *
 * [1295] Find Numbers with Even Number of Digits
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (isDigitEven(nums[i])) counter++
  }
  
  return counter;
};

function isDigitEven(num) {
  const numStr = num.toString();
  return (numStr.length % 2 === 0) ? true : false;
}

// @lc code=end

