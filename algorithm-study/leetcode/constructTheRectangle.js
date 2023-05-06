/**
 * EASY
 * https://leetcode.com/problems/construct-the-rectangle/
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    for (let i = parseInt(Math.sqrt(area)); i >= 1; i--) {
        if (area % i === 0) return [area / i, i];
    }
};