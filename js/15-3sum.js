/**
 * @param {number[]} nums
 * @return {number[][]}
 */
// bruce force
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  console.log(nums);
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[i] + nums[j] + nums[k] === 0)
          result.push([nums[i], nums[j], nums[k]]);
      }
    }
  }
  const finalR = [];
  const s = new Set();
  for (let r of result) {
    const key = r.join();
    if (!s.has(key)) {
      s.add(key);
      finalR.push(r);
    }
  }
  return finalR;
};


var threeSum = function (nums) {
  const twoSum = function (nums, target) {
    const result = [];
    for (let i = 0, j = nums.length - 1; i < j;) {
      if (nums[i] + nums[j] > target) j--;
      else if (nums[i] + nums[j] < target) i++;
      else {
        result.push([nums[i], nums[j]]);
        j--;
        i++;
        while (j < nums.length - 1 && nums[j] === nums[j + 1]) j--;
        while (i > 0 && nums[i] === nums[i - 1]) i++;
      }
    }
    return result;
  }

  nums.sort((a, b) => a - b);
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    const rs = twoSum(nums.slice(i + 1), -nums[i]);
    for (let r of rs) {
      result.push(r.concat(nums[i]));
    }
  }
  return result;
}


// console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// console.log(threeSum([0, 0]));
// console.log(threeSum([-4,-2,-2,-2,0,1,2, -15, 2,2,1, 3,3,4, 14,4,6,6]));
// console.log(threeSum([-13,5,13,12,-2,-11,-1,12,-3,0,-3,-7,-7,-5,-3,-15,-2,14,14,13,6,-11,-11,5,-15,-14,5,-5,-2,0,3,-8,-10,-7,11,-5,-10,-5,-7,-6,2,5,3,2,7,7,3,-10,-2,2,-12,-11,-1,14,10,-9,-15,-8,-7,-9,7,3,-2,5,11,-13,-15,8,-3,-7,-12,7,5,-2,-6,-3,-10,4,2,-5,14,-3,-1,-10,-3,-14,-4,-3,-7,-4,3,8,14,9,-2,10,11,-10,-4,-15,-9,-1,-1,3,4,1,8,1]));

console.log(threeSum([7, -1, 14, -12, -8, 7, 2, -15, 8, 8, -8, -14, -4, -5, 7, 9, 11, -4, -15, -6, 1, -14, 4, 3, 10, -5, 2, 1, 6, 11, 2, -2, -5, -7, -6, 2, -15, 11, -6, 8, -4, 2, 1, -1, 4, -6, -15, 1, 5, -15, 10, 14, 9, -8, -6, 4, -6, 11, 12, -15, 7, -1, -9, 9, -1, 0, -4, -1, -12, -2, 14, -9, 7, 0, -3, -4, 1, -2, 12, 14, -10, 0, 5, 14, -1, 14, 3, 8, 10, -8, 8, -5, -2, 6, -11, 12, 13, -7, -12, 8, 6, -13, 14, -2, -5, -11, 1, 3, -6]));