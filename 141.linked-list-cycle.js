/*
 * @lc app=leetcode id=141 lang=javascript
 *
 * [141] Linked List Cycle
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
  if (!head || !head.next) return false;
  
  let slow = fast = head;
  while (slow && fast) {
    slow = slow.next;
    if (!fast.next || !fast.next.next) return false;
    fast = fast.next.next;
    if (slow && fast && slow.val === fast.val) return true
  }
  return false;
};
// @lc code=end

