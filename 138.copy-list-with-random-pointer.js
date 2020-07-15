/*
 * @lc app=leetcode id=138 lang=javascript
 *
 * [138] Copy List with Random Pointer
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
  if (!head) return null;
  let curr = head;
  const clones = new Map();
  
  while (curr !== null) {
    clones.set(curr, new Node(curr.val))
    curr = curr.next;
  }
  curr = head;
  
  while (curr !== null) {
    clones.get(curr).next = clones.get(curr.next) || null;
    clones.get(curr).random = clones.get(curr.random) || null;
    curr = curr.next;
  }
  
  return clones.get(head);
};
// @lc code=end

