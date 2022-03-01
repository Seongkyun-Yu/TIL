/**
 * https://leetcode.com/problems/permutations
 * @param {number[]} nums
 * @return {number[][]}
 */
 const makePermutation = (temp, nums, permutations) => {
    if (!nums.length) {
        permutations.push([...temp]);
        return;
    }
    
    let num = 0;
    for (let i = 0; i < nums.length; i++) {
        num = nums[i];
        temp.push(num);
        nums.splice(i, 1);
        
        makePermutation(temp, nums, permutations);
        
        temp.pop();
        nums.splice(i, 0, num);
    }
}

var permute = function(nums) {
    const permutations = [];
    const temp = [];
    
    makePermutation(temp, nums, permutations);
    
    return permutations;
};