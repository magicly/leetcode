const assert = require('assert');
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let profit = 0;
  let min = prices[0];
  let len = prices.length;
  for (let i = 0; i < len - 1; i++) {
    if (prices[i + 1] < prices[i]) {// 只要第二天比第一天便宜就卖了然后第二天, 买只要第二天比第一天贵就不卖
      profit += prices[i] - min;
      min = prices[i + 1];
    } 
  }
  // 卖掉最后一天的
  if (prices[len - 1] > min) {
    profit += prices[len - 1] - min;
  }
  return profit;
};


var maxProfit = function(prices) {
  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i + 1] > prices[i]) {// 只要第二天比第一天便宜就卖了然后第二天, 买只要第二天比第一天贵就不卖
      profit += prices[i + 1] - prices[i];
    } 
  }
  return profit;
};

assert(maxProfit([7, 1, 5, 3, 6, 4]) === 7);
assert(maxProfit([7, 6, 4, 3, 1]) === 0);
assert(maxProfit([1, 2]) === 1);