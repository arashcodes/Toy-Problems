/*
 * @lc app=leetcode id=328 lang=javascript
 *
 * [328] Odd Even Linked List
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
var oddEvenList = function(head) {
  if (!head) return null;
  if (head && head.next === null) return head;
  
  const firstH = head;
  const secondH = head.next;
  let curr1 = firstH;
  let curr2 = secondH;
  
  while (curr1 !== null && curr1.next !== null && curr2 !== null && curr2.next !== null) {
    curr1.next = curr1.next.next;
    curr2.next = curr2.next.next;
    curr1 = curr1.next;
    curr2 = curr2.next;
  }
  
  curr1.next = secondH;
  
  return firstH;
};
// @lc code=end

