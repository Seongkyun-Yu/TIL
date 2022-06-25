/**
 * https://leetcode.com/problems/longest-consecutive-sequence/
 * @param {number[]} nums
 * @return {number}
 */
 var longestConsecutive = function(nums) {
    const numsSet = new Set(nums);
    
    let maxLength = 0;
    for(const num of numsSet) {
        if (numsSet.has(num - 1) === false) {
            let length = 1;
            while(numsSet.has(num + length)) length++;
            maxLength = Math.max(maxLength, length);
        }
    }
    
    return maxLength;
};