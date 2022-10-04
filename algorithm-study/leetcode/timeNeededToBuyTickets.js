/**
 * https://leetcode.com/problems/time-needed-to-buy-tickets/
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
 var timeRequiredToBuy = function(tickets, k) {
    let sum = 0
    for (let i = 0; i < tickets.length; i++) {
        if (i <= k) sum += Math.min(tickets[i], tickets[k]);
        else sum += Math.min(tickets[i], tickets[k] - 1);
    }
    
    return sum;
};