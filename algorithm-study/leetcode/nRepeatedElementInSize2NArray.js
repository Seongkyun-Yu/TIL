/**
 * https://leetcode.com/problems/n-repeated-element-in-size-2n-array/
 * @param {number[]} nums
 * @return {number}
 */
 var repeatedNTimes = function(nums) {
    const counts = {};
    const needCount = nums.length / 2;
    
    for(const num of nums) {
        if (counts[num] === needCount - 1) return num;
        counts[num] = counts[num] ? counts[num] + 1 : 1;
    }
};