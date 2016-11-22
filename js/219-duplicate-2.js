/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = {};
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    if (map[nums[i]] !== undefined) {
      if (i - map[nums[i]] <= k) return true;
    }
    map[nums[i]] = i;
  }
  return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3))
console.log(containsNearbyDuplicate([1, 2, 3, 1], 2))
console.log(containsNearbyDuplicate([-1, -1], 1))