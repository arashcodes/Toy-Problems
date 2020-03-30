/*
 * @lc app=leetcode id=101 lang=javascript
 *
 * [101] Symmetric Tree
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
var isSymmetric = function(root) {
  if (!root) return true;
  
  function isMirror(leftNode, rightNode) {
    if (leftNode === null && rightNode === null) return true;
    
    if (leftNode === null || rightNode === null || leftNode.val !== rightNode.val) return false;
    
    return isMirror(leftNode.left, rightNode.right) && isMirror(leftNode.right, rightNode.left);
  }
  
  return isMirror(root.left, root.right);
};
// @lc code=end

