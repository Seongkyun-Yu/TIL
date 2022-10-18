/**
 * https://leetcode.com/problems/word-search/
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
 var exist = function(board, word) {
    let result;
    
    const check = (i, j, t, bi, bj, visited) => {
        if (t > word.length - 1) return true;
        if (i < 0 || i > board.length - 1) return false;
        if (j < 0 || j > board[0].length - 1) return false;
        if (visited[`${i}-${j}`]) return false;
        if (word[t] !== board[i][j]) return false;
        
        const newVisited = {...visited};
        newVisited[`${i}-${j}`] = true;
        
        return (check(i - 1, j, t + 1, i, j, newVisited) || check(i + 1, j, t + 1, i, j, newVisited) 
        || check(i, j - 1, t + 1, i, j, newVisited) || check(i, j + 1, t + 1, i, j, newVisited));
    }
    
    const count = {};
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            count[board[i][j]] = board[i][j] + 1 || 1;
        }
    }
    
    if (count[word[0]] < count[word[word.length - 1]]) word = [...word].reverse().join("");
    
    for(let i = 0; i < board.length; i++) {
        for(let j = 0; j < board[0].length; j++) {
            if (check(i, j, 0, -1, -1, {})) return true;
        }
    }
    
    return false;
};