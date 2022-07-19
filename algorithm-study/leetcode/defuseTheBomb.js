/**
 * https://leetcode.com/problems/defuse-the-bomb/
 * @param {number[]} code
 * @param {number} k
 * @return {number[]}
 */
 var decrypt = function(code, k) {
    if (k === 0) return Array(code.length).fill(0);
    
    const reversedCode = [...code].reverse();
    
    const targets = k > 0 ? code : reversedCode;
    k = Math.abs(k)
    
    const len = code.length;
    const result = [];
    for(let i = 0; i < targets.length; i++) {
        let acc = 0;
        for(let j = 0, l = (i + 1) % len; j < k; j++, l = (l + 1) % len) {
            acc += targets[l];
        }
        
        result.push(acc);
    }
    
    return result;
};