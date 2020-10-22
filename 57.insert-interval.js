/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
  const res = [];
  
  intervals.push(newInterval);
  intervals.sort((a, b) => a[0] - b[0] ? a[0] - b[0] : a[1] - b[1]);
  
  let last, curr;
  res.push(intervals[0]);
  curr = 1;

  while (curr < intervals.length) {
    last = res[res.length - 1];
    
    if (last[1] < intervals[curr][0]) {
      res.push(intervals[curr]);
      last = intervals[curr];
    } else {
      last[1] = Math.max(last[1], intervals[curr][1]);
    }
    
    curr += 1;
  }
  
  return res
};
// @lc code=end

