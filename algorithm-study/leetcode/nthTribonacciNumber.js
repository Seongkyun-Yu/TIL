/**
 * https://leetcode.com/problems/n-th-tribonacci-number/
 * @param {number} n
 * @return {number}
 */
 const sums = {}
 var tribonacci = function(n) {
     if (n === 0) return 0;
     if (n === 1) return 1;
     if (n === 2) return 1;
     if (sums[n]) return sums[n];
     
     sums[n] = tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
     
     return sums[n];
 };