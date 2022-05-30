/**
 * https://leetcode.com/problems/longest-palindrome/
 * @param {string} s
 * @return {number}
 */
 var longestPalindrome = function(s) {
    let left = 0;
    let right = s.length - 1;
    let count = 0;
    
    while(left < right) {
        if (s[left] === s[right]) count += 2;
        else count = 0;
        left++;
        right--;
    }
    
    return count;
};