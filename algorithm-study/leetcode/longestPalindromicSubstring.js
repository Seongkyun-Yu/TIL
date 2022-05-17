/**
 * https://leetcode.com/problems/longest-palindromic-substring/
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(s) {
    let longest = '';
    
    const findLongestPalindrome = (str, i, j) => {
        while(i >= 0 && j < str.length && str[i] === str[j]) {
            i -= 1;
            j += 1;
        }
        
        return str.slice(i + 1, j);
    }
    
    for (let i = 0; i < s.length; i++) {
        const current1 = findLongestPalindrome(s, i, i);
        const current2 = findLongestPalindrome(s, i, i + 1);
        const longerPalindrome = 
              current1.length > current2.length ? current1 : current2;
        
        if (longerPalindrome.length > longest.length)   longest = longerPalindrome;
    }
    
    return longest;
};