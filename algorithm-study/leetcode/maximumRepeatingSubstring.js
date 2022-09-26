/**
 * https://leetcode.com/problems/maximum-repeating-substring/
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */
 var maxRepeating = function(sequence, word) {
    let count = 0;
    let target = "";
    while(sequence.search(target += word) !== -1){
        count++;
    }
    
    return count;
};