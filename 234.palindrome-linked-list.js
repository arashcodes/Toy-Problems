/*
 * @lc app=leetcode id=234 lang=javascript
 *
 * [234] Palindrome Linked List
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
var isPalindrome = function(head) {
  if (!head) return null;

  let first = prev = head;

  while(first.next !== null) {
    first = first.next;
    first.prev = prev;
    prev = prev.next;
  }

  let second = head;

  while(second.next !== null && first.prev !== null) {
    if (first.val !== second.val) return false;
    second = second.next;
    first = first.prev;
  }

  return true;
};
// @lc code=end

