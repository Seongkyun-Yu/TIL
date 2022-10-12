/**
 * https://leetcode.com/problems/divide-a-string-into-groups-of-size-k/
 * @param {string} s
 * @param {number} k
 * @param {character} fill
 * @return {string[]}
 */
 var divideString = function(s, k, fill) {    
    if (s.length < k) {
        const end = fill.repeat(k - s.length)
        return [s + end]
    }
    
    const result = [];
    let last;
    for (let i = 0; i + k -1 < s.length; i += k) {
        result.push(s.substr(i, k))
        last = i
    }
    
    if (last + k - 1 !== s.length - 1) {
        let end = s.slice(last + k);
        end += fill.repeat(k - end.length);
        result.push(end);
    }
    
    return result
};