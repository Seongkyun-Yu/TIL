/**
 * https://leetcode.com/problems/longest-increasing-subsequence/
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
    let min = Infinity;
    let longestLen = -Infinity;
    
    for(let i = 0; i < nums.length; i++) {
        if (min <= nums[i]) continue;
        min = nums[i];
        
        let count = 1;
        let max = nums[i];
        for(let j = i; j < nums.length; j++) {
            if (max < nums[j]) {
                count++;
                max = nums[j];
            }
            console.log(i, j, count)
        }
        
        longestLen = Math.max(count, longestLen);
    }
    
    return longestLen;
};

console.log(lengthOfLIS([0,1,0,3,2,3]));