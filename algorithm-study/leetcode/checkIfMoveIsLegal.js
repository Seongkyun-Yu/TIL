/**
 * MEDIUM
 * https://leetcode.com/problems/check-if-move-is-legal/
 * @param {character[][]} board
 * @param {number} rMove
 * @param {number} cMove
 * @param {character} color
 * @return {boolean}
 */
var checkMove = function (board, rMove, cMove, color) {
  const direct = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
    [1, 1],
    [-1, -1],
    [1, -1],
    [-1, 1],
  ];
  const dfs = (r, c, count, direct) => {
    console.log({ r, c });
    if (r < 0 || c < 0) return false;
    if (r === board.length || c === board.length) return false;
    if (board[r][c] === '.') return false;
    if (count < 3 && color === board[r][c]) return false;
    if (count >= 3 && color === board[r][c]) return true;

    const [dRow, dCol] = direct;
    const [newRow, newCol] = [r + dRow, c + dCol];

    return dfs(newRow, newCol, count + 1, direct);
  };

  for (const [dRow, dCol] of direct) {
    const [newRow, newCol] = [rMove + dRow, cMove + dCol];
    if (dfs(newRow, newCol, 1 + 1, [dRow, dCol])) return true;
  }

  return false;
};
