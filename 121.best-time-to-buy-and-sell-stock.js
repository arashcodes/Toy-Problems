/*
 * @lc app=leetcode id=121 lang=javascript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */

 // Naive solution
// var maxProfit = function(prices) {
//   let maxDelta = 0;
//   for (let i = 0; i < prices.length; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       if (prices[i] - prices[j] < 0) {
//         let delta = prices[i] - prices[j];
//         maxDelta = Math.min(maxDelta, delta);
//       }
//     }
//   }
//   return -maxDelta;
// };

// Optimized solution
var maxProfit = function(prices) {
  let min = prices[0];
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }
  return max;
};

// @lc code=end

