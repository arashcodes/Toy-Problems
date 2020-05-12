/*
 * @lc app=leetcode id=637 lang=javascript
 *
 * [637] Average of Levels in Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  const res = [];
  const q = [root];
  let node, size;
  let lvlSum, avgSum = 0;

  while (q.length) {
    size = q.length;
    lvlSum = 0;

    for (let i = 0; i < size; i++) {
      node = q.shift();
      lvlSum += node.val;
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    
    avgSum = lvlSum / size;
    res.push(avgSum);
  }

  return res;
};
// @lc code=end

