/*
 * @lc app=leetcode id=21 lang=javascript
 *
 * [21] Merge Two Sorted Lists
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
  let dummy = new ListNode(-1);
  const head = dummy;

  while(l1 !== null && l2 !== null) {
    if (l1.val < l2.val) {
      dummy.next = l1;
      l1 = l1.next;
    } else {
      dummy.next = l2;
      l2 = l2.next;
    }
    dummy = dummy.next;
  }
  if (l1 !== null) {
    dummy.next = l1;
  } else {
    dummy.next = l2;
  }
  return head.next;
};
// @lc code=end

