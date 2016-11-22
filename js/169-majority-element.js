/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const map = {};
  let maxNum = 0;
  let maxCount = 0;
  for (let num of nums) {
    map[num] = map[num] === undefined ? 1 : map[num] + 1;
    if (map[num] > maxCount) {
      maxCount = map[num];
      maxNum = num;
    }
  }
  return maxNum;
};

var majorityElement = function (nums) {
  let maxNum;
  let maxCount = 0;
  for (let num of nums) {
    if (maxCount === 0) {
      maxNum = num;
    }
    if (num === maxNum) {
      maxCount++;
    } else {
      maxCount--;
    }
  }
  return maxNum;
};

console.log(majorityElement([1]));
console.log(majorityElement([1, 2, 3, 2]));
console.log(majorityElement([3, 3, 4]));