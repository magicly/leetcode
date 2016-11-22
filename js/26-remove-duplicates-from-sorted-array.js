/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0;
  let j = 0;
  let n = nums.length;
  while (j < n) {
    if (nums[j] === nums[j + 1]) {
      j++;
    } else {
      nums[i] = nums[j];
      i++;
      j++;
    }
  }
  // console.log(nums);
  return i;
};

const r = removeDuplicates([1, 1, 2])
console.log(r)