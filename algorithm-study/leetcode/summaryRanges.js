/**
 * https://leetcode.com/problems/summary-ranges/
 * @param {number[]} nums
 * @return {string[]}
 */
 var summaryRanges = function(nums) {
    const result = [];
    for(let i = 0; i < nums.length;i++){
        const arr = [nums[i]];

        while(nums[i+1] === nums[i]+1) i++; 

        if(arr[0] !== nums[i]) arr[1] = nums[i];

        result.push(arr);
    }

    return result.map(arr => arr.join("->"));
};