/**
 * https://leetcode.com/problems/minimum-absolute-difference/
 * @param {number[]} arr
 * @return {number[][]}
 */
 var minimumAbsDifference = function(arr) {
    const sortedArr = arr.sort((a, b) => a - b);
    let min = Infinity;
    const map = {};
    
    for(let i = 0; i < sortedArr.length - 1; i++) {
        const diff = Math.abs(sortedArr[i] - sortedArr[i + 1]);
        
        if (min > diff) min = diff;
        
        if (map[diff]) map[diff].push([sortedArr[i], sortedArr[i + 1]]);
        else map[diff] = [[sortedArr[i], sortedArr[i + 1]]];
    }
    
    return map[min];
};