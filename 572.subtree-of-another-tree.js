/*
 * @lc app=leetcode id=572 lang=javascript
 *
 * [572] Subtree of Another Tree
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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  if (t === null) return true;
  if (s === null) return false;
  if (isIdentical(s, t)) return true;

  return isSubtree(s.left, t) || isSubtree(s.right, t);
};

function isIdentical(p, q) {
  if (p === null && q === null) return true;
  
  if (p !== null && q !== null) {
    if (p.val === q.val && isIdentical(p.left, q.left) && isIdentical(p.right, q.right)) {
      return true;
    }
  }

  return false;
};

// @lc code=end

