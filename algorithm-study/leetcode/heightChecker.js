/**
 * https://leetcode.com/problems/height-checker/
 * @param {number[]} heights
 * @return {number}
 */
 var heightChecker = function(heights) {
    const orderedHeights = [...heights].sort((a, b) => a - b);
    let count = 0;
    
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== orderedHeights[i]) count++;
    }
    
    return count;
};