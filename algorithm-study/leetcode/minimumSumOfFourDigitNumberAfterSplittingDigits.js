/**
 * https://leetcode.com/problems/minimum-sum-of-four-digit-number-after-splitting-digits/
 * @param {number} num
 * @return {number}
 */
 var minimumSum = function(num) {
    const numStr = String(num).split("").sort();
   
    return (Number(numStr[0] + numStr[2]) + Number(numStr[1] + numStr[3]) )
};