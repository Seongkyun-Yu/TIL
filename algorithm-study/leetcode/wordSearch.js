/**
 * https://leetcode.com/problems/word-search/submissions/
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    const check = (i, j, t, visited) => {
        if (t === word.length) return true;
        if (i < 0 || i > board.length - 1) return false;
        if (j < 0 || j > board[0].length - 1) return false;
        if (visited[`${i}-${j}`]) return false;
        if (word[t] !== board[i][j]) return false;
        
        visited[`${i}-${j}`] = true;
        
        const result = (check(i - 1, j, t + 1, visited) || check(i + 1, j, t + 1, visited) 
        || check(i, j - 1, t + 1, visited) || check(i, j + 1, t + 1, visited));
        
        visited[`${i}-${j}`] = false;
        
        return result;
    }
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if (check(i, j, 0, {})) return true;
        }
    }
    
    return false;
};