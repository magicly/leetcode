
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  const len = nums.length;
  let j = 0;
  for (let i = 0; i < len; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      if (i !== j) {
        nums[i] = 0;
      }
      j++;
    }
  }
};

//const arr = [0, 1, 0, 3, 12];
const arr = [1];
console.log(moveZeroes(arr));
console.log(arr);