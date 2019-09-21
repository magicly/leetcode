/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 *
 * https://leetcode-cn.com/problems/binary-tree-level-order-traversal-ii/description/
 *
 * algorithms
 * Easy (62.57%)
 * Likes:    135
 * Dislikes: 0
 * Total Accepted:    25.6K
 * Total Submissions: 40.9K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，返回其节点值自底向上的层次遍历。 （即按从叶子节点所在层到根节点所在的层，逐层从左向右遍历）
 *
 * 例如：
 * 给定二叉树 [3,9,20,null,null,15,7],
 *
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 *
 *
 * 返回其自底向上的层次遍历为：
 *
 * [
 * ⁠ [15,7],
 * ⁠ [9,20],
 * ⁠ [3]
 * ]
 *
 *
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  if (!root) {
    return [];
  }
  const lr = levelOrderBottom(root.left);
  const rr = levelOrderBottom(root.right);
  const r = [[root.val]];
  for (let i = 0; i < Math.max(lr.length, rr.length); i++) {
    const leftIdx = lr.length - 1 - i;
    const rightIdx = rr.length - 1 - i;
    if (lr[leftIdx] && rr[rightIdx]) {
      r.push([...lr[leftIdx], ...rr[rightIdx]]);
    } else if (lr[leftIdx]) {
      r.push([...lr[leftIdx]]);
    } else if (rr[rightIdx]) {
      r.push([...rr[rightIdx]]);
    }
  }
  // console.log(root.val, r);
  return r.reverse();
};

var levelOrderBottom = function(root) {
  if (!root) {
    return [];
  }
  let res = [];
  const levelArray = (root, level) => {
    if (root !== null) {
      if (res[level]) {
        res[level].push(root.val);
      } else {
        res[level] = [root.val];
      }
      levelArray(root.left, level + 1);
      levelArray(root.right, level + 1);
    }
  };
  levelArray(root, 0);
  return res.reverse();
};
