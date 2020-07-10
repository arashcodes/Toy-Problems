/*
 * @lc app=leetcode id=203 lang=javascript
 *
 * [203] Remove Linked List Elements
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {
  if (!head) return null;
  
  const dummy = new ListNode(-1);
  dummy.next = head;
  let temp;
  
  while (head) {
    if (head.val === val) {
      head = head.next;
    } else {
      break;
    }
  }
  
  let curr = dummy.next;
  let prev = dummy;
  
  while (curr !== null) {
    if (curr.val === val) {
      prev.next = curr.next;
      curr.next = null;
      curr = prev.next;
    } else {
      prev = curr;
      curr = curr.next;
    }
  }
  
  return dummy.next;
};
// @lc code=end

