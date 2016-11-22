/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) nums[index] *= -1;
    else result.push(index + 1);
  }
  return result;
};


console.log(findDuplicates([4, 3, 2, 7, 8, 2, 3, 1]))