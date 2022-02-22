/**
 * https://leetcode.com/problems/flipping-an-image/
 * @param {number[][]} image
 * @return {number[][]}
 */
 var flipAndInvertImage = function(image) {
    return image.map((item) => item.reverse().map((item2) => 
        item2 === 1 ? 0 : 1));
};