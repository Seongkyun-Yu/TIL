/**
 * https://leetcode.com/problems/sort-array-by-parity/
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParity = function(nums) {
    const even = nums.filter((num) => num % 2 === 0);
    const odd = nums.filter((num) => num % 2 !== 0);
    
    return [...even, ...odd];
};