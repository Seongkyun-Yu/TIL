/**
 * https://leetcode.com/problems/sort-colors/
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    let low = 0;
    let high = nums.length - 1;

    for (let i = 0; i <= high; i++) {
        if (nums[i] === 0) {
            [nums[i], nums[low]] = [nums[low], nums[i]];
            low++;
        } else if (nums[i] == 2) {
            [nums[i], nums[high]] = [nums[high], nums[i]];
            high--;
            i--;
        } 
    }
};