/**
 * https://leetcode.com/problems/3sum/submissions/
 * @param {number[]} nums
 * @return {number[][]}
 */
 var threeSum = function(nums) {
    if (nums.length < 3) return [];
    
    const result = [];
    
    nums.sort((a, b) => a - b);
    
    for (let i = 0; i < nums.length - 2; i++) {
        let j = i + 1;
        let k = nums.length - 1;
               
		if (nums[i] === nums[i - 1]) continue;

        while(j < k) {
            const sum = nums[i] + nums[j] + nums[k];
            if (sum > 0) k--;
            else if (sum < 0) j++;
            else {
                result.push([nums[i], nums[j], nums[k]]);
                
                while (nums[j] === nums[j + 1]) j++
				while (nums[k] === nums[k - 1]) k--

				j++
				k--
            }
        }
    }
    
    return result;
};