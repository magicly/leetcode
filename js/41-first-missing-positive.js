/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  nums.sort((a, b) => a - b)
  let min = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === min + 1) {
      min++;
    } else if (nums[i] > 0 && nums[i] !== min) {
      break;
    }
  }
  return min + 1;
};

var firstMissingPositive = nums => {
  if (nums === undefined || nums.length === 0) return 1;
  const len = nums.length;
  let countLessThanZero = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] <= 0) {
      nums[i] = len;
      countLessThanZero++;
    }
  }
  // console.log(nums);
  for (let i = 0; i < len; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (index >= 0 && index < len && nums[index] > 0) {
      nums[index] *= -1;
    }
  }
  // console.log(nums)
  for (let i = 0; i < len; i++) {
    if (nums[i] > 0) {
      return i + 1;
    }
  }
  return len + 1 - countLessThanZero;
}

console.log(firstMissingPositive([]))
console.log(firstMissingPositive([1]))
console.log(firstMissingPositive([2]))
console.log(firstMissingPositive([3]))
console.log(firstMissingPositive([1, 2, 0]))
console.log(firstMissingPositive([3, 4, -1, 1]))
console.log(firstMissingPositive([0, 2, 2, 1, 1]))