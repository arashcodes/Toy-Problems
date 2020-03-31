/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];

  const res = [];
  const q = [];
  q.push(root);

  while(q.length) {
    const lvl = [];
    const size = q.length;

    for (let i = 0; i < size; i++) {
      const node = q.shift();
      lvl.push(node.val);
      if (node.left) q.push(node.left);
      if (node.right) q.push(node.right);
    }
    res.push(lvl);
  }
  return res;
};
// @lc code=end

