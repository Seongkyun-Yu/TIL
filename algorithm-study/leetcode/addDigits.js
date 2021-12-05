/**
 * https://leetcode.com/problems/add-digits/
 * @param {number} num
 * @return {number}
 */
 var addDigits = function(num) {
    while (num >= 10) {
        const over10 = parseInt(num / 10);
        const under10 = num % 10;
        
        num = over10 + under10;
    }
    
    return num;
};