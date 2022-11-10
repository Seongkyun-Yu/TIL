/**
 * https://leetcode.com/problems/keep-multiplying-found-values-by-two/
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
 var findFinalValue = function(nums, original) {
    nums.sort((a, b) => a - b);
    let target = original;
    let startIndex = 0;
    while(startIndex < nums.length) {
        for(let i = startIndex; i < nums.length; i++) {
            startIndex = i + 1;
            
            if (nums[i] !== target) continue;
            
            target = nums[i] * 2;
            break;
        }
    }
    
    return target;
};