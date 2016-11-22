var twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
};


// one path hash
var twoSum = function (nums, target) {
  const hash = {};
  for (let i = 0; i < nums.length; i++) {
    const remain = target - nums[i];
    if (hash[remain] !== undefined) {
      return [i, hash[remain]];
    }
    hash[nums[i]] = i;
  }
}

twoSum([0, 4, 3, 0], 0)

var twoSum = function (nums, target) {
  const initState = {};
  for (let i = 0; i < nums.length; i++) {
    initState[nums[i]] = i;
  }
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    const another = binarySearch(nums, target - nums[i]);
    if (another !== -1) {
      return [initState[i], initState[another]];
    }
  }
};
function binarySearch(arr, target) {
  return binarySearchMid(arr, 0, arr.length - 1, target);
  function binarySearchMid(arr, start, end, target) {
    if (!arr || arr.length === 0 || start > end) return -1;

    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) return binarySearchMid(arr, mid + 1, end, target);
    if (arr[mid] > target) return binarySearchMid(arr, 0, mid - 1, target);
  }
}
