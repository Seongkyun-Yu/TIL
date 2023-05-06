/**
 * EASY
 * https://leetcode.com/problems/license-key-formatting/
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function(s, k) {
    const compressS = s.replaceAll('-', '').toUpperCase().split('');
    
    for(let i = compressS.length - k; i > 0; i -= k) {
        compressS[i] = `-${compressS[i]}`
    }
    
    return compressS.join('');
};