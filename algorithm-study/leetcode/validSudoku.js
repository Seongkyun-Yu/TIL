/**
 * https://leetcode.com/problems/valid-sudoku/
 * @param {character[][]} board
 * @return {boolean}
 */

 var isValidSudoku = function(board) {
    for (let i = 0; i < 9; i++) {
        const columns = new Set();
        const rows = new Set();
        const subBoxes = new Set();
        
        for (let j = 0; j < 9; j++) {
            const row = board[i][j];
            const column = board[j][i];
            const subBox = board[3 * Math.floor(i / 3) + Math.floor(j / 3)][3 * (i % 3) + (j % 3)];
            
            if (row !== "." && rows.has(row)) return false;
            if (column !== "." && columns.has(column)) return false;
            if (subBox !== "." && subBoxes.has(subBox)) return false;
            
            columns.add(column);
            rows.add(row);
            subBoxes.add(subBox);
        }
    }
    
    return true;
};