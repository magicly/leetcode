/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 *
 * https://leetcode-cn.com/problems/valid-perfect-square/description/
 *
 * algorithms
 * Easy (41.98%)
 * Likes:    67
 * Dislikes: 0
 * Total Accepted:    14.9K
 * Total Submissions: 35.5K
 * Testcase Example:  '16'
 *
 * 给定一个正整数 num，编写一个函数，如果 num 是一个完全平方数，则返回 True，否则返回 False。
 *
 * 说明：不要使用任何内置的库函数，如  sqrt。
 *
 * 示例 1：
 *
 * 输入：16
 * 输出：True
 *
 * 示例 2：
 *
 * 输入：14
 * 输出：False
 *
 *
 */
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare0 = function(num) {
  if (num === 1) {
    return true;
  }
  for (let i = 1; i <= num / 2 && i * i <= num; i += 1) {
    if (i * i === num) {
      return true;
    }
  }
  return false;
};

var isPerfectSquare = function(num) {
  if (num === 1) {
    return true;
  }
  for (let low = 1, high = num / 2; low <= high; ) {
    const mid = Math.floor((low + high) / 2);
    const r = mid * mid;
    if (r === num) {
      return true;
    } else if (r > num) {
      high = mid - 1;
    } else if (r < num) {
      low = mid + 1;
    }
  }
  return false;
};
