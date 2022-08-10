/**
 * https://leetcode.com/problems/rank-transform-of-an-array/
 * @param {number[]} arr
 * @return {number[]}
 */
 var arrayRankTransform = function(arr) {
    const sortedArr = [...(new Set(arr))].sort((a, b) => a - b);
    
    return arr.map((x) => sortedArr.indexOf(x) + 1);
};