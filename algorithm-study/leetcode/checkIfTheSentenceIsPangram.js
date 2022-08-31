/**
 * https://leetcode.com/problems/check-if-the-sentence-is-pangram/
 * @param {string} sentence
 * @return {boolean}
 */
 var checkIfPangram = function(sentence) {
    const s = new Set([...sentence]);
    const map = {};
    for(const c of s) {
        map[c] = map[c] + 1 || 1
    };
    
    const checkS = "abcdefghijklmnopqrstuvwxyz";
    for(const a of checkS) {
        if(!map[a]) return false;
    }
    
    return true;
};