/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (!root) return [];
  
  const res = [];
  
  function findPath(root, str) {
    if (!root.left && !root.right) res.push(str + root.val);
    if (root.left) findPath(root.left, str + root.val + '->');
    if (root.right) findPath(root.right, str + root.val + '->');
  }
  
  findPath(root, '');
  
  return res;
};
// @lc code=end

