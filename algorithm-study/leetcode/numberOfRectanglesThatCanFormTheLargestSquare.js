/**
 * https://leetcode.com/problems/number-of-rectangles-that-can-form-the-largest-square/
 * @param {number[][]} rectangles
 * @return {number}
 */
 var countGoodRectangles = function(rectangles) {
    const map = {};
    let max = -Infinity;
    for(let i = 0; i < rectangles.length; i++) {
        const key = Math.min(...rectangles[i]);
        map[key] = map[key] + 1 || 1;
        max = Math.max(max, key);
    }
    
    return map[max];
};