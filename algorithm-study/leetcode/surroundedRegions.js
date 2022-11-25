/**
 * https://leetcode.com/problems/surrounded-regions/
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
 var solve = function(board) {
    const visited = {};
    
    const dfs = (i, j) => {
        if (visited[`${i}-${j}`]) return;
        if (!board[i]) return;
        if (!board[i][j]) return;
        if (board[i][j] === "X") return;
        
        visited[`${i}-${j}`] = true;
        
        dfs(i + 1, j);
        dfs(i - 1, j);
        dfs(i, j + 1);
        dfs(i, j - 1);
    }
    
    for(let i = 0; i < board.length; i++) {
        dfs(i, 0);
    }
    for(let i = 0; i < board.length; i++) {
        dfs(i, board[0].length - 1);
    }
    for(let j = 0; j < board[0].length; j++) {
        dfs(0, j);
    }
    for(let j = 0; j < board[0].length; j++) {
        dfs(board.length - 1, j);
    }
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[i].length; j++) {
            if (visited[`${i}-${j}`]) continue;
            else board[i][j] = "X";
        }
    }
    
    return board;
};