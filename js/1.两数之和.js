/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const hash = [];
  for (let i = 0; i < nums.length; i++) {
    const remain = target - nums[i];
    if (hash[remain] !== undefined) {
      return [i, hash[remain]];
    }
    hash[nums[i]] = i;
  }
};
