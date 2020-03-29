/*
 * @lc app=leetcode id=98 lang=javascript
 *
 * [98] Validate Binary Search Tree
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
 * @return {boolean}
 */
var isValidBST = function(root) {
  if (!root) return true;

  function validate(node, min, max) {
    if (!node) return true;
    if (node.val <= min || node.val >= max) return false;
    return validate(node.left, min, node.val) && validate (node.right, node.val, max);
  }

  return validate(root, min=-Infinity, max=Infinity);
};
// @lc code=end

