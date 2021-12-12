/**
 * https://leetcode.com/problems/valid-perfect-square/
 * @param {number} num
 * @return {boolean}
 */
 var isPerfectSquare = function(num) {
    return Number.isInteger(Math.sqrt(num))
};