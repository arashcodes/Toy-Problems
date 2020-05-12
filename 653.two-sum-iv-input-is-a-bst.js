/*
 * @lc app=leetcode id=653 lang=javascript
 *
 * [653] Two Sum IV - Input is a BST
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  const q = [root];
  const obj = {};
  let node, another;

  while (q.length) {
    node = q.shift();
    another = k - node.val;

    if (obj[another]) {
      return true;
    } else {
      obj[node.val] = true;
    }

    if (node.left) q.push(node.left);
    if (node.right) q.push(node.right);
  }

  return false;
};
// @lc code=end

