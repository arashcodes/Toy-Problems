/*
 * @lc app=leetcode id=206 lang=javascript
 *
 * [206] Reverse Linked List
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
 * @return {ListNode}
 */
var reverseList = function(head) {
  // Iteratively
  // let prev = null;
  // let curr = head;
  // while(curr) {
  //   const temp = curr.next;
  //   curr.next = prev;
  //   prev = curr;
  //   curr = temp;
  // }
  // return prev;

  // Recursively
  if (head === null || head.next === null) return head;

  const newHead = reverseList(head.next);
  head.next.next = head;
  head.next = null;

  return newHead;
};
// @lc code=end

