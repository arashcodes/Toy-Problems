/*
 * @lc app=leetcode id=430 lang=javascript
 *
 * [430] Flatten a Multilevel Doubly Linked List
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  if (head === null) return null;
  
  const dummy = new Node(-1, null, head, null);
  const stack = [head];
  let curr;
  let prev = null;
  
  while (stack.length > 0) {
    curr = stack.pop();
    
    if (prev !== null) {
      curr.prev = prev;
      prev.next = curr;
    }
    
    if (curr.next) stack.push(curr.next);
    
    if (curr.child) {
      stack.push(curr.child);
      curr.child = null;
    }
    
    prev = curr;
  }
  
  return dummy.next;
};
// @lc code=end

