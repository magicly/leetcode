/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 1;
  let len = digits.length;
  for (let i = len - 1; i >= 0; i--) {
    const val = digits[i] + carry;
    if (val < 10) {
      digits[i] += 1;
      return digits;
    } else {
      digits[i] = 0;
      carry = 1;
    }
  }
  if (carry === 1) {
    digits.unshift(1);
  }
  return digits;
};


console.log(plusOne([9, 9, 9]));