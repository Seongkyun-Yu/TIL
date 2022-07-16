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
        let max = 0;
        for(let j = i + 1; j < nums.length; j++) {
            if (nums[j - 1] < nums[j]) count++;
            console.log(i,j, count)
            
        }
        
        longestLen = Math.max(count, longestLen);
    }
    
    return longestLen;
};

console.log(lengthOfLIS([4,10,4,3,8,9]));