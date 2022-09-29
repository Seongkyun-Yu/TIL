/**
 * https://leetcode.com/problems/two-out-of-three/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
 var twoOutOfThree = function(nums1, nums2, nums3) {
    const map = {};
    
    const nums1Set = new Set(nums1);
    for(const num of nums1Set) {
        map[num] = map[num] + 1 || 1;
    }
    
    const nums2Set = new Set(nums2);
    for(const num of nums2Set) {
        map[num] = map[num] + 1 || 1;
    }
    
    const nums3Set = new Set(nums3);
    for(const num of nums3Set) {
        map[num] = map[num] + 1 || 1;
    }
    
    const result = [];
    for(const num in map) {
        if (map[num] > 1) result.push(+num);
    }
    
    return result;
};