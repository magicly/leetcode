/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (let i = 0, j = nums.length - 1; i < j;) {
    if (nums[i] + nums[j] === target) return [i + 1, j + 1];
    if (nums[i] + nums[j] > target) j--;
    if (nums[i] + nums[j] < target) i++
  }
  return null;
}

console.log(twoSum([0, 4, 3, 0], 0));
console.log(twoSum([2, 7, 11, 15], 9));
