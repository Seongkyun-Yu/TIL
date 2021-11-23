/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    const dataObj = {};
    let maxNum = 0;
    let max;
    
    for (let i = 0; i < nums.length; i++) {
        if (dataObj[nums[i]]) dataObj[nums[i]] = dataObj[nums[i]] + 1;
        else dataObj[nums[i]] = 1;
        
        if (dataObj[nums[i]] > maxNum) {
            max = nums[i];
            maxNum = dataObj[nums[i]];
        }
    }
    
    return max;
};

console.log(majorityElement([3,3,4]))