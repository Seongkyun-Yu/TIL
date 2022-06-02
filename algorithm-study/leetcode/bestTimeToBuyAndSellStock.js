/**
 * https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
 * @param {number[]} prices
 * @return {number}
 */
 var maxProfit = function(prices) {
    if (prices.length < 2) return 0;
    
    let buyPrice = Infinity;
    let result = 0;
    
    for (let i = 0; i < prices.length; i++) {
        if (buyPrice <= prices[i]) continue;
        for (let j = i + 1; j < prices.length; j++) {
            buyPrice = prices[i];
            
            const profit = prices[j] - buyPrice;
            
            if (profit > result) result = profit;
        }
    }
    
    return result;
};