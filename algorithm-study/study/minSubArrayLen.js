function minSubArrayLen(nums, target){
    const orderedNums = nums.sort((a, b) => b - a);
    
    let sum = 0;
    let i = 0;
    for (; i < orderedNums.length; i++) {
        sum += nums[i];
        
        if (sum >= target) return i + 1;
    }
    
    return 0;
}