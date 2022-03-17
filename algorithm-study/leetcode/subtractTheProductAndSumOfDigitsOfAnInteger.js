/**
 * https://leetcode.com/problems/subtract-the-product-and-sum-of-digits-of-an-integer/
 * @param {number} n
 * @return {number}
 */
 var subtractProductAndSum = function(n) {
    const multi = [...String(n)].reduce((acc, cur) => acc * +(cur), 1)
    const sum = [...String(n)].reduce((acc, cur) => acc + +(cur), 0)
    
    return multi - sum
};

