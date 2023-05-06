/**
 * EASY
 * https://leetcode.com/problems/row-with-maximum-ones/
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function(mat) {
    const res = [0,0];
    let count = 0;
    for(let i = 0; i < mat.length; i++){
        for(const num of mat[i]){
            if(num === 1) count++;
        }
        if(count > res[1]){
            res[0] = i;
            res[1] = count;
        }
        count = 0;
    }
    return res;
};