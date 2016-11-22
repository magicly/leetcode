/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
var containsNearbyAlmostDuplicate = function (nums, k, t) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j <= i + k && j < nums.length; j++) {
      if (Math.abs(nums[i] - nums[j]) <= t) {
        return true;
      }
    }
  }
  return false;
};

var containsNearbyAlmostDuplicate = function (nums, k, t) {
  const map = {};
  const bucketSize = t === 0 ? 1 : t;
  for (let i = 0; i < nums.length; i++) {
    const key = Math.floor(nums[i] / bucketSize);
    if (map[key] !== undefined && Math.abs(nums[map[key]] - nums[i]) <= t && i - map[key] <= k) return true;
    if (map[key - 1] !== undefined && Math.abs(nums[map[key - 1]] - nums[i]) <= t && i - map[key - 1] <= k) return true;
    if (map[key + 1] !== undefined && Math.abs(nums[map[key + 1]] - nums[i]) <= t && i - map[key + 1] <= k) return true;

    map[key] =  i;
  }
  return false;
};

var containsNearbyAlmostDuplicate = function (nums, k, t) {
  const map = []; 
  const bucketSize = t === 0 ? 1 : t;
  for (let i = 0; i < nums.length; i++) {
    const key = Math.floor(nums[i] / bucketSize);
    if (map[key] !== undefined && Math.abs(nums[map[key]] - nums[i]) <= t && i - map[key] <= k) return true;
    if (map[key - 1] !== undefined && Math.abs(nums[map[key - 1]] - nums[i]) <= t && i - map[key - 1] <= k) return true;
    if (map[key + 1] !== undefined && Math.abs(nums[map[key + 1]] - nums[i]) <= t && i - map[key + 1] <= k) return true;

    map[key] =  i;
  }
  return false;
};

console.log(containsNearbyAlmostDuplicate([], 0, 0))
console.log(containsNearbyAlmostDuplicate([2, 2], 3, 0))
console.log(containsNearbyAlmostDuplicate([7, 1, 3], 2, 3))