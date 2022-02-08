// productOfArray([1,2,3]) // 6
// productOfArray([1,2,3,10]) // 60

function productOfArray(nums) {
    if (nums.length === 1) return nums[0];
    
    return nums.shift() * productOfArray(nums);
}