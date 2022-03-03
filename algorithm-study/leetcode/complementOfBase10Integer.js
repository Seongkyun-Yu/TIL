/**
 * https://leetcode.com/problems/complement-of-base-10-integer/
 * @param {number} n
 * @return {number}
 */
 var bitwiseComplement = function(n) {
     console.log('1'.repeat(n.toString(2).length))
    console.log(parseInt('1'.repeat(n.toString(2).length), 2))
    console.log(n ^ parseInt('1'.repeat(n.toString(2).length), 2))
    console.log(3 ^ 3)
    return n ^ parseInt('1'.repeat(n.toString(2).length), 2);
};

bitwiseComplement(4)