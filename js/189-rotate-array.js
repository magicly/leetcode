/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const rotateByOne = nums => {
    const tmp = nums[nums.length - 1];
    for (let i = nums.length - 1; i > 0; i--) {
      nums[i] = nums[i - 1];
    }
    nums[0] = tmp;
  }
  k %= nums.length;
  for (let i = 0; i < k; i++) {
    rotateByOne(nums, 1);
  }
  return nums;
};

var rotate = function (nums, k) {
  const len = nums.length;
  const tmp = nums.slice(len - k).concat(nums.slice(0, len - k))
  for (let i = 0; i < len; i++) {
    nums[i] = tmp[i];
  }
}

var rotate = function (nums, k) {
  k = k % nums.length;
  const reverse = (nums, start, end) => {
    while (start < end) {
      const tmp = nums[start];
      nums[start] = nums[end];
      nums[end] = tmp;
      start++;
      end--;
    }
    return nums;
  }
  // console.log(reverse([1, 5, 3, 4], 0, 3))

  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
}

var rotate = (nums, k) => {
  k = k % nums.length;
  let count = 0;
  for (let i = 0; count < nums.length; i++) {
    let pos = i;
    let pre = nums[i];
    do {
      pos = (pos + k) % nums.length;
      const tmp = nums[pos];
      nums[pos] = pre;
      pre = tmp;
      count++;
    } while (pos != i);
  }
}
const nums = [1, 2, 3, 4, 5, 6, 7];
// const nums = [-1];
rotate(nums, 2)
console.log(nums);