/**
 * https://leetcode.com/problems/sort-array-by-parity-ii/
 * @param {number[]} nums
 * @return {number[]}
 */
 var sortArrayByParityII = function(nums) {    
    const queue = [...nums];
    const result = [];
    
    let num = 0;
    let needEven = true;
    while(queue.length) {
        num = queue.shift();
        
        if (needEven && num % 2 === 0) {
            result.push(num);
            needEven = false;
        } else if (!needEven && num % 2 === 1) {
            result.push(num);
            needEven = true;
        } else {
            queue.push(num);
        }
        
    }
    
    return result;
};