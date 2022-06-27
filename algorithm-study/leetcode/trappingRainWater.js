/**
 * https://leetcode.com/problems/trapping-rain-water
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    const leftMaxHeight = [];
    const rightMaxHeight = [];
    let waterHeight = 0;
    
    for(let i = 0; i < height.length; i++) {
        if (height[i - 1] === undefined) {
            leftMaxHeight[i] = 0;
            continue;
        }
        leftMaxHeight[i] = Math.max(leftMaxHeight[i - 1], height[i - 1]);
    }
    
    for(let i = height.length - 1; i >= 0; i--) {
        if (height[i + 1] === undefined) {
            rightMaxHeight[i] = 0;
            continue;
        }
        rightMaxHeight[i] = Math.max(rightMaxHeight[i + 1], height[i + 1]);
    }
    
    for(let i = 0; i < height.length; i++) {
        const h = Math.min(leftMaxHeight[i], rightMaxHeight[i]) - height[i];
        waterHeight += h > 0 ? h : 0;
    }
    
    return waterHeight;
};