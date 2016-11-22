/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
  const map = new Map();
  for (let num of nums) {
    map.set(num, true);
  }
  const result = [];
  for (let i = 1; i <= nums.length; i++) {
    if (!map.has(i)) result.push(i);
  }
  return result;
};

var findDisappearedNumbers = function(nums) {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const index = Math.abs(nums[i]) - 1;
    if (nums[index] > 0) nums[index] = -nums[index];
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      result.push(i + 1);
    }
  }
  return result;
};


console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]))