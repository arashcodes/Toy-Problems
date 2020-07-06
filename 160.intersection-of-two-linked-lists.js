/*
 * @lc app=leetcode id=160 lang=javascript
 *
 * [160] Intersection of Two Linked Lists
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;
  if (headA === headB) return headA;
  
  const lenA = getLength(headA);
  const lenB = getLength(headB);
  const dif = Math.abs(lenA - lenB);
  
  if (lenA > lenB) {
    for (let i = 0; i < dif; i++) {
      headA = headA.next;
    }
  } else {
    for (let i = 0; i < dif; i++) {
      headB = headB.next;
    }
  }
  let currA = headA;
  let currB = headB;
  
  if (currA === currB) return currA;
  
  while (currA !== currB) {
    currA = currA.next;
    currB = currB.next;
    
    if (currA === currB) return currA;
  }
  
  return null;
};

function getLength(head) {
  let len = 0;
  let curr = head;
  
  while (curr.next !== null) {
    curr = curr.next;
    len += 1;
  }
  
  return len;
};
// @lc code=end

