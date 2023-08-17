/**
 * EASY
 * https://leetcode.com/problems/final-prices-with-a-special-discount-in-a-shop/
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function (prices) {
  const result = [];

  for (let i = 0; i < prices.length; i++) {
    let newPrice = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[i] >= prices[j]) {
        newPrice = prices[i] - prices[j];
        break;
      }
    }
    result.push(newPrice);
  }

  return result;
};
