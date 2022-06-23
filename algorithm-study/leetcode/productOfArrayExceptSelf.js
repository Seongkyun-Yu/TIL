/**
 * https://leetcode.com/problems/product-of-array-except-self/
 * @param {number[]} nums
 * @return {number[]}
 */
 var productExceptSelf = function(nums) {
    let acc = 1;
    let zeroCount = 0;
    
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) zeroCount++;
        else acc *= nums[i];
    }
    
    if (zeroCount >= 2) return new Array(nums.length).fill(0);
    
    const result = [];
    for(let i = 0; i < nums.length; i++) {
        if (nums[i] === 0) result.push(acc);
        else if (zeroCount > 0) result.push(0);
        else result.push(acc / nums[i]);
    }
    
    return result;
};