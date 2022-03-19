/**
 * https://leetcode.com/problems/binary-gap/submissions/
 * @param {number} n
 * @return {number}
 */
 var binaryGap = function(n) {
    const binary = n.toString(2);
    let result = -Infinity;
    
    let slow = null;
    for(let i = 0; i < binary.length; i++) {
        if (binary[i] !== "1") continue;
        if (slow === null) {
            slow = i;
            continue;
        }
        
        const diff = i - slow;
        result = diff > result ? diff : result;
        slow = i;
    }
    
    return result === -Infinity ? 0 : result;
};