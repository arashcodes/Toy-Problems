/*
 * @lc app=leetcode id=404 lang=javascript
 *
 * [404] Sum of Left Leaves
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
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  if (!root) return 0;

  let sum = 0;

  function sumLefts(node) {
    if (node === null) return 0;

    if (node.left !== null && node.left.left === null && node.left.right === null) {
      sum += node.left.val;
    }
    sumLefts(node.left);
    sumLefts(node.right);
  }

  sumLefts(root);

  return sum;
};
// @lc code=end

