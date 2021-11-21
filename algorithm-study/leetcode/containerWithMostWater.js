/**
 * https://leetcode.com/problems/container-with-most-water/
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
    let result = 0;
    let i = 0;
    let j = height.length - 1;
    let rectSize = 0;
    
    while (i < j) {
        rectSize = height[i] < height[j] ? height[i] * (j - i) : height[j] * (j - i);
        
        if (result < rectSize) result = rectSize;
              
        if (height[i] < height[j]) i++
        else j--;
    }
    
    return result;
};