/**
 * https://leetcode.com/problems/reverse-only-letters/
 * @param {string} s
 * @return {string}
 */
 const isLetter = (c) => (c <= 90 && c >= 65) || (c <= 122 && c >= 97);
 var reverseOnlyLetters = function(s) {
     const ret = [];
   for (let left = 0, right = s.length - 1; left <= right;) {
     if (!isLetter(s.charCodeAt(left))) { 
         ret[left] = s[left]; ++left; 
         continue; 
     }
     if (!isLetter(s.charCodeAt(right))) { ret[right] = s[right]; 
         --right; 
         continue; 
     }
 
     ret[left] = s[right];
     ret[right] = s[left];
     ++left;
     --right;
   }
   return ret.join('');
 };