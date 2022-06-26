/**
 * https://leetcode.com/problems/trapping-rain-water/
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(height) {
    let waterHeight = 0;
    
    for(let i = 0; i < height.length;) {
        if (height[i] === 0) continue;
        
        let acc = 0;
        let closed = false;
        for(let j = i + 1; j < height.length; j++) {
            if (height[i] > height[j]) {
                acc += height[i] - height[j];
                continue;
            }
            
            i = j;
            closed = true;
            waterHeight += acc;
            break;
        }
        
        if (closed === false) i++;
        acc = 0;
    }
    
    return waterHeight;
};