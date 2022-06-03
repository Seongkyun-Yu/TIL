/**
 * https://leetcode.com/problems/counting-bits/
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
    const result = [];
    
    let num = 0;
    for(let i = 0; i <= n; i++) {
        num = i.toString(2);
        result.push([...num].reduce((acc, cur) => acc + +cur, 0));
    }
    
    return result;
};