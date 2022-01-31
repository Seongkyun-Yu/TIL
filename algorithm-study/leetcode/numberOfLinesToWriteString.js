/**
 * https://leetcode.com/problems/number-of-lines-to-write-string/
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
 var numberOfLines = function(widths, s) {
    const chars = [...s];
    let row = 1;
    let accPix = 0;
        
    for (let i = 0; i < chars.length; i++) {
        const pixel = widths[chars[i].charCodeAt(0) - 97];
        
        if (pixel + accPix > 100) {
            row++;
            accPix = pixel;
        } else {
            accPix += pixel;
        }
    }
    
    return [row, accPix];
};