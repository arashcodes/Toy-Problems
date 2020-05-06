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
  if (!head) return true;
  
  let slow = head;
  let fast = head;
  
  while (fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  
  let firstHead = head;
  let secondHead = reverse(slow.next);
  
  while (firstHead && secondHead) {
    if (firstHead.val !== secondHead.val) {
      return false;
    }
    firstHead = firstHead.next;
    secondHead = secondHead.next;
  }
  
  return true;
};

function reverse(head) {
  let prev = null;
  let curr = head;
  
  while (curr) {
    const temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }
  
  return prev;
}

// @lc code=end

