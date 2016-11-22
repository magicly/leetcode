/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let result = 0;
  const len = nums.length;
  for (let i = 0; i < len - result; i++) {
    if (nums[i] === val) {
      nums[i] = nums[len - result - 1]
      result++;
      i -= 1;// 重新比较当前数（原数组最后一个）
    }
  }
  console.log(nums.length, result, nums);
  return nums.length - result
};

removeElement([3, 2, 2, 3], 3)