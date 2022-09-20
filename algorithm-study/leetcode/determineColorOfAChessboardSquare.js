/**
 * https://leetcode.com/problems/determine-color-of-a-chessboard-square/
 * @param {string} coordinates
 * @return {boolean}
 */
 var squareIsWhite = function(coordinates) {
    const [c, num] = [...coordinates];
    
    const isCharOdd = Boolean(c.charCodeAt(0) % 2);
    const isNumOdd = Boolean(num % 2);
    
    return isCharOdd !== isNumOdd;
};