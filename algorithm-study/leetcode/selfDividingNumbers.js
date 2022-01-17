/**
 * https://leetcode.com/problems/self-dividing-numbers/
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
 var selfDividingNumbers = function(left, right) {
    const result = [];
    
    for (let i = left; i <= right; i++) {
        const nums = (i + "").split("");
        let count = 0;
        
        for (j = 0; j < nums.length; j++) {
            if(i % +nums[j] === 0) count++;
            else break;
        }
        
        if (count === nums.length) result.push(i);
    }
    
    return result;
};