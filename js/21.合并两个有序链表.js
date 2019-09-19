/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
 *
 * https://leetcode-cn.com/problems/merge-two-sorted-lists/description/
 *
 * algorithms
 * Easy (57.30%)
 * Likes:    631
 * Dislikes: 0
 * Total Accepted:    112.7K
 * Total Submissions: 196.7K
 * Testcase Example:  '[1,2,4]\n[1,3,4]'
 *
 * 将两个有序链表合并为一个新的有序链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *
 * 示例：
 *
 * 输入：1->2->4, 1->3->4
 * 输出：1->1->2->3->4->4
 *
 *
 */
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
  if (!l1 && !l2) {
    console.log("both null");
    return l1;
  }
  let r;
  let p;
  while (l1 && l2) {
    let v1 = l1.val;
    let v2 = l2.val;
    if (v1 < v2) {
      if (!r) {
        r = new ListNode(v1);
        p = r;
      } else {
        p.next = new ListNode(v1);
        p = p.next;
      }
      l1 = l1.next;
    } else {
      if (!r) {
        r = new ListNode(v2);
        p = r;
      } else {
        p.next = new ListNode(v2);
        p = p.next;
      }
      l2 = l2.next;
    }
  }
  if (l1) {
    if (!r) {
      return l1;
    }
    p.next = l1;
  }
  if (l2) {
    if (!r) {
      return l2;
    }
    p.next = l2;
  }
  return r;
};
