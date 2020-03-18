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

  let curr = head;
  const checked = 'yes';

  while (curr !== null && curr.checked === undefined) {
    curr.checked = checked;
    curr = curr.next;
    if (curr !== null && curr.checked) {
      return true;
    }
  }
  return false;
};
// @lc code=end

