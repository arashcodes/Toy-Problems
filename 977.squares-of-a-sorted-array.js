/*
 * @lc app=leetcode id=977 lang=javascript
 *
 * [977] Squares of a Sorted Array
 */

// @lc code=start
/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  for (let i = 0; i < A.length; i++) {
    A[i] = A[i] * A[i];
  }
  
  let notSorted = true;
  
  while (notSorted) {
    notSorted = false;
    
    for (let i = 0; i < A.length; i++) {
      if (A[i] > A[i + 1]) {
        [A[i], A[i + 1]] = [A[i + 1], A[i]];
        notSorted = true;
      }
    }
  }
  
  return A;
};
// @lc code=end

