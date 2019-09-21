/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 *
 * https://leetcode-cn.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (45.30%)
 * Likes:    314
 * Dislikes: 0
 * Total Accepted:    70.7K
 * Total Submissions: 155.9K
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * 给定两个有序整数数组 nums1 和 nums2，将 nums2 合并到 nums1 中，使得 num1 成为一个有序数组。
 *
 * 说明:
 *
 *
 * 初始化 nums1 和 nums2 的元素数量分别为 m 和 n。
 * 你可以假设 nums1 有足够的空间（空间大小大于或等于 m + n）来保存 nums2 中的元素。
 *
 *
 * 示例:
 *
 * 输入:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 *
 * 输出: [1,2,2,3,5,6]
 *
 */
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge2 = function(nums1, m, nums2, n) {
  nums1.splice(m, n, ...nums2);
  nums1.sort((a, b) => a - b);
};

var merge = function(nums1, m, nums2, n) {
  let p = m + n - 1;
  m -= 1;
  n -= 1;
  while (m >= 0 && n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[p] = nums1[m];
      m -= 1;
    } else {
      nums1[p] = nums2[n];
      n -= 1;
    }
    p -= 1;
  }
  while (m >= 0) {
    nums1[p] = nums1[m];
    p -= 1;
    m -= 1;
  }
  while (n >= 0) {
    nums1[p] = nums2[n];
    p -= 1;
    n -= 1;
  }
};
