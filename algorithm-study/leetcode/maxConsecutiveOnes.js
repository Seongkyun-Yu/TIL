/**
 * https://leetcode.com/problems/max-consecutive-ones/submissions/
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let sum = 0;
    
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] === 1) sum++;
        else {
            if (max < sum) max = sum;
            sum = 0;
        }
    }
    
    return max < sum ? sum: max;
};