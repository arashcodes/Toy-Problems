/*
 * @lc app=leetcode id=350 lang=javascript
 *
 * [350] Intersection of Two Arrays II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  let res = [];
    let small;
    let big;
    if (nums1.length <= nums2.length) {
        small = nums1;
        big = nums2;
    } else {
        small = nums2;
        big = nums1;
    }
    
    for (let i = 0; i < small.length; i++) {
        if (big.includes(small[i])) {
            const idx = big.indexOf(small[i]);
            big.splice(idx, 1);
            res.push(small[i])
        }
    }
    return res;
};
// @lc code=end

