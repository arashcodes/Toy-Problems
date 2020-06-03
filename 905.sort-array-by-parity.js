/*
 * @lc app=leetcode id=905 lang=javascript
 *
 * [905] Sort Array By Parity
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParity = function(arr) {
  let start = findFirstOddIdx(arr);
  let curr = start;
  
  for (let i = start + 1; i < arr.length; i++) {
    if (arr[curr] % 2 === 1 && arr[i] % 2 === 0) {
      [arr[curr], arr[i]] = [arr[i], arr[curr]];
      curr++;
    }
  }
  
  return arr;
};

findFirstOddIdx = (arr) => {
  let res;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 1) {
      res = i;
      break;
    }
  }
  
  return res;
};

// @lc code=end

