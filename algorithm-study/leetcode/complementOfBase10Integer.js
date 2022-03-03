/**
 * https://leetcode.com/problems/complement-of-base-10-integer/
 * @param {number} n
 * @return {number}
 */
 var bitwiseComplement = function(n) {
    return n ^ parseInt('1'.repeat(n.toString(2).length), 2);
};