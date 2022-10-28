//https://leetcode.com/problems/lucky-numbers-in-a-matrix/discuss/?currentPage=1&orderBy=most_relevant&query=js
var luckyNumbers  = function(matrix) {
    const output = [];

    for (let i = 0; i < matrix.length; i++) {
        const min = Math.min(...matrix[i]);
        const minIndex = matrix[i].indexOf(min);
        const maxArr = [];

        for (let j = 0; j < matrix.length; j++) {
            maxArr.push(matrix[j][minIndex]);
        }

        const max = Math.max(...maxArr);
        if (min === max) {
            output.push(max);
        }
    }

    return output;
};