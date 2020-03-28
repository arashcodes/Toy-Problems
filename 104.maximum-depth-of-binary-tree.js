/*
 * @lc app=leetcode id=104 lang=javascript
 *
 * [104] Maximum Depth of Binary Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;
  let result = 0;

  function checkDepth(node, depth) {
    if (node.left) checkDepth(node.left, depth + 1);
    if (node.right) checkDepth(node.right, depth + 1);
    result = Math.max(result, depth);
  }
  checkDepth(root, 1);

  return result;
};
// @lc code=end

