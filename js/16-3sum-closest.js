/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  var twoSum = function (nums, target) {
    let min = Number.POSITIVE_INFINITY;
    let sum = 0;
    for (let i = 0, j = nums.length - 1; i < j;) {
      const diff = nums[i] + nums[j] - target;
      if (diff === 0) return [0, target];
      if (Math.abs(diff) < min) {
        min = Math.abs(diff);
        sum = nums[i] + nums[j];
      }
      if (diff < 0) i++;
      if (diff > 0) j--;
    }
    return [min, sum];
  }

  nums.sort((a, b) => a - b);
  let min = Number.POSITIVE_INFINITY;
  let sum;
  for (let i = 0; i < nums.length; i++) {
    const r = twoSum(nums.slice(i + 1), target - nums[i]);
    if (r[0] < min) {
      min = r[0];
      sum = r[1] + nums[i];
    }
  }
  return sum;
};

console.log(threeSumClosest([0, 1, 2], 3)); // 3
console.log(threeSumClosest([-1, 2, 1, 4], 1)); // 2
console.log(threeSumClosest([1, 1, 1, 0], 100)); // 3