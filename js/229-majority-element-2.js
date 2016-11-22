/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  const map = {};
  let result = [];
  for (let num of nums) {
    map[num] = map[num] === undefined ? 1 : map[num] + 1;
  }
  for (let key in map) {
    // console.log('key-value: ', key, map[key])
    if (map[key] > parseInt(nums.length / 3)) {
      result.push(parseInt(key));
    }
  }
  return result;
};

var majorityElement = function (nums) {
  const map = {};
  let result = [];
  for (let num of nums) {
    map[num] = map[num] === undefined ? 1 : map[num] + 1;
    if (map[num] > parseInt(nums.length / 3)) {
      if (result[0] !== num && result[1] !== num && result[2] !== num) {
        result.push(num);
      }
    }
  }
  return result;
};


console.log(majorityElement([1]))
console.log(majorityElement([1, 2, 2, 3]))
console.log(majorityElement([1, 2, 2, 3, 3, 4]))