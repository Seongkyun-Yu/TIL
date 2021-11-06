/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
    if (nums.length === 1) return nums[0];
    
    const list = new Map();
    
    for (let i = 0; i < nums.length; i++) {
        const data = list.get(nums[i]);
        
        if (data) list.set(nums[i], data + 1);
        else list.set(nums[i], 1);
    }
    
    for (const [key, value] of list) {
        if (value === 1) return key;
    }
};

console.log(singleNumber([2,2,1]))