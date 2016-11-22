/**
 * Definition for singly-linked list.
 * 
 */
  function ListNode(val) {
      this.val = val;
      this.next = null;
  }
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let result = new ListNode(0);
  let tail = result;
  let carry = 0;
  while (l1 != null && l2 != null) {
    const val = l1.val + l2.val + carry;
    carry = parseInt(val / 10);
    tail = tail.next = new ListNode(val % 10)
    l1 = l1.next;
    l2 = l2.next;
  }
  while (l1 != null) {
    const val = l1.val + carry;
    carry = parseInt(val / 10);
    tail = tail.next = new ListNode(val % 10)
    l1 = l1.next;
  }
  while (l2 != null) {
    const val = l2.val + carry;
    carry = parseInt(val / 10);
    tail = tail.next = new ListNode(val % 10)
    l2 = l2.next;
  }
  if (carry != 0) {
    tail.next = new ListNode(carry);
  }

  return result.next;
};

const l1 = new ListNode(9);
l1.next = new ListNode(8);
// l1.next.next = new ListNode(3);
const l2 = new ListNode(1);
// l2.next = new ListNode(6);
// l2.next.next = new ListNode(4);

const result = addTwoNumbers(l1, l2);
console.log(result);