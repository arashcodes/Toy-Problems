/*
 * @lc app=leetcode id=148 lang=javascript
 *
 * [148] Sort List
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
  if (!head) return head;
  
  const vals = [];
  
  let curr = head;
  
  while (curr !== null) {
    vals.push(curr.val);
    curr = curr.next;
  }
  
  vals.sort((a, b) => a - b);
  
  const dummy = new ListNode(-1);
  curr = dummy;
  
  for (let val of vals) {
    curr.next = new ListNode(val);
    curr = curr.next;
  }
    
  return dummy.next;
};
// @lc code=end

