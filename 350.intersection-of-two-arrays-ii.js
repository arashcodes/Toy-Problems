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
    const res = [];
    const map1 = new Map();

    for (let num of nums1) {
        map1.set(num, map1.get(num) + 1 || 1);
    }

    for (let num of nums2) {
        if (map1.get(num)) {
        res.push(num);
        map1.set(num, map1.get(num) - 1);
        }
    }

    return res;
};
// @lc code=end

