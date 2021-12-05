/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) {
    let result = Infinity;
    
    for (let i = 0; i < nums.length; i++) {
        let j = i + 1;
        let k = nums.length - 1;
        
        if (nums[i] === nums[i - 1]) continue;
        
        while (j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            const close = Math.abs(target - sum);
            const resultClose =  Math.abs(target - result);
          
            if (close < resultClose) {
                result = sum;
                k--;
            }
            else if (close > resultClose) j++;
            else{
                while(nums[j] === nums[j + 1]) j++;
                while(nums[k] === nums[k - 1]) k--;
                j++;
                k--;
            }
        }
    }
    
    return result;
};

console.log(threeSumClosest([-1,2,1,-4], 1))