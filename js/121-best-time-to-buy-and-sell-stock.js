const assert = require('assert');

/**
 * @param {number[]} prices
 * @return {number}
 */
// bruce force:  Time Limit Exceeded
var maxProfit = function (prices) {
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > max) {
        max = prices[j] - prices[i];
      }
    }
  }
  return max;
};

// some optimization
var maxProfit = function (prices) {
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    if (i + 1 < prices.length && prices[i + 1] <= prices[i]) {
      continue;
    }
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > max) {
        max = prices[j] - prices[i];
      }
    }
  }
  return max;
};

// O(n)
var maxProfit = function (prices) {
  let min = prices[0], max = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] <= min) {
      min = prices[i];
    } else {
      if (prices[i] - min > max) {
        max = prices[i] - min;
      }
    }
  }
  return max;
}

var maxProfit = function (prices) {
  let min = prices[0], max = 0;
  for (let price of prices) {
    min = Math.min(min, price);
    max = Math.max(max, price - min);
  }
  return max;
}

assert(maxProfit([7, 1, 5, 3, 6, 4]) === 5);
assert(maxProfit([7, 6, 4, 3, 1]) === 0);
