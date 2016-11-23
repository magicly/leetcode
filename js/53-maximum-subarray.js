const assert = require('assert');
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = Number.NEGATIVE_INFINITY, max2 = 0;
  let min = Number.NEGATIVE_INFINITY;
  let hasPositive = false;
  for (let num of nums) {
    if (num < 0) {
      min = Math.max(min, num);
    } else {
      hasPositive = true;
    }
    if (max2 + num > 0) {
      max2 += num;
    } else {
      max2 = 0;
    }
    max = Math.max(max, max2);
  }
  if (max === 0 && !hasPositive) max = min;
  return max;
};

var maxSubArray = function (nums) {
  let max = Number.NEGATIVE_INFINITY, max2 = 0;
  for (let num of nums) {
    max2 += num;
    if (max2 > max) {
      max = max2
    }
    if (max2< 0) {
      max2 = 0;
    }
  }
  return max;
};

var maxSubArray2 = function (nums) {
  let maxSoFar = Number.NEGATIVE_INFINITY, maxEndingHere = 0;
  for (let num of nums) {
    maxEndingHere = Math.max(maxEndingHere + num, num);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return max;
};


console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
assert(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6);
console.log(maxSubArray([-1, -1]));
assert(maxSubArray([-1, -1]) === -1);
assert(maxSubArray([-2, -1]) === -1);
assert(maxSubArray([0]) === 0);
assert(maxSubArray([-1, 0]) === 0);