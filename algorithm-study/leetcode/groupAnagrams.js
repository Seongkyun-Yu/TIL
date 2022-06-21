/**
 * https://leetcode.com/problems/group-anagrams/
 * @param {string[]} strs
 * @return {string[][]}
 */
 var groupAnagrams = function(strs) {
    const map = {}
    
    for (const str of strs) {
        const charCount = new Array(26).fill(0)
        for (const c of str) {
            charCount[c.charCodeAt(0) - 'a'.charCodeAt(0)]++
        }
        if (!map[charCount]) map[charCount] = []
        map[charCount].push(str)
    }
    
    return Object.values(map)
};