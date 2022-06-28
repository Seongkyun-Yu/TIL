/**
 * https://leetcode.com/problems/sort-array-by-increasing-frequency/
 * @param {number[]} nums
 * @return {number[]}
 */
 var frequencySort = function(nums) {
    const map = new Map();

    for (i = 0; i < nums.length; i++) {
        map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    }

    nums.sort((a, b) => (map.get(a) - map.get(b)) || (b - a));

    return nums;
};