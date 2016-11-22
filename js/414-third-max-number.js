/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let max1 = nums[0];
  let max2, max3;
  for (let num of nums) {
    if (num === max1 || num === max2 || num === max3) continue;
    if (num > max1) {
      max3 = max2;
      max2 = max1;
      max1 = num;
    } else if (max2 === undefined || num > max2) {
      max3 = max2;
      max2 = num;
    } else if (max3 === undefined || num > max3) {
      max3 = num;
    }
  }
  // console.log(max1, max2, max3);
  return (max3 !== undefined) ? max3 : max1;
};

console.log(thirdMax([3, 2, 1]));
console.log(thirdMax([2, 1]));
console.log(thirdMax([2, 2, 3, 1]));
console.log(thirdMax([3,3,4,3,4,3,0,3,3]));
console.log(thirdMax([2, 1, Number.MIN_SAFE_INTEGER]));