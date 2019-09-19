/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 *
 * https://leetcode-cn.com/problems/add-binary/description/
 *
 * algorithms
 * Easy (50.60%)
 * Likes:    245
 * Dislikes: 0
 * Total Accepted:    39.6K
 * Total Submissions: 78.3K
 * Testcase Example:  '"11"\n"1"'
 *
 * 给定两个二进制字符串，返回他们的和（用二进制表示）。
 *
 * 输入为非空字符串且只包含数字 1 和 0。
 *
 * 示例 1:
 *
 * 输入: a = "11", b = "1"
 * 输出: "100"
 *
 * 示例 2:
 *
 * 输入: a = "1010", b = "1011"
 * 输出: "10101"
 *
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;
  let s = "";
  let carry = 0;
  for (; i >= 0 || j >= 0; i -= 1, j -= 1) {
    const an = parseInt(a[i] ? a[i] : "0", 10);
    const bn = parseInt(b[j] ? b[j] : "0", 10);
    const cn = an + bn + carry;
    s += cn % 2;
    carry = cn >= 2 ? 1 : 0;
  }
  s += carry === 1 ? "1" : "";
  return s
    .split("")
    .reverse()
    .join("");
};
