/*
 * @lc app=leetcode id=61 lang=javascript
 *
 * [61] Rotate List
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
  if (!head) return null;
  if (k === 0) return head;
  
  let len = 1;
  let tail = head;
  
  while (tail.next !== null) {
    tail = tail.next;
    len++;
  }
  k = k % len;
  tail.next = head;
  const stepsToNewHead = len - k;
  
  for (let i = 0; i < stepsToNewHead; i++) {
    tail = tail.next;
  }
  head = tail.next;
  tail.next = null;
  
  return head;
};
// @lc code=end

