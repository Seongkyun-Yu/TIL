// Frequency Counter - validAnagram
// Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

// Examples:

// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true
// validAnagram("rat","car") // false) // false
// validAnagram('awesome', 'awesom') // false
// validAnagram('amanaplanacanalpanama', 'acanalmanplanpamana') // false
// validAnagram('qwerty', 'qeywrt') // true

function validAnagram(str1, str2){
    if (str1.length !== str2.length) return false;
    
    const str1CountObj = {};
    const str2CountObj = {};
    
    for (const char of str1) {
        str1CountObj[char] = (str1CountObj[char] || 0) + 1;
    }
    
    for (const char of str2) {
        str2CountObj[char] = (str2CountObj[char] || 0) + 1;
    }
    
    for (const key in str1CountObj) {
        if (!(key in str2CountObj)) return false;
        if (str2CountObj[key] !== str1CountObj[key]) return false;
    }
    
    return true;
  }