/*
 * @lc app=leetcode id=217 lang=javascript
 *
 * [217] Contains Duplicate
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
  let arr = nums.sort();
    let left = 0;
    let right = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[left] === arr[right]) {
            return true;
        } else {
            left++;
            right++;
        }
    }
    return false;
    
};
// @lc code=end

