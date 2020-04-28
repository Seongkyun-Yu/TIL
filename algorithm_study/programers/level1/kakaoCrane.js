// 크레인 인형뽑기 게임
// https://programmers.co.kr/learn/courses/30/lessons/64061

function solution(board, moves) {
  const depth = board.length;
  const stack = [];
  var answer = 0;

  for (let i = 0; i < moves.length; i++) {
    for (let j = 0; j < depth; j++) {
      if (board[j][moves[i] - 1] === 0) continue;

      stack.push(board[j][moves[i] - 1]);
      board[j][moves[i] - 1] = 0;

      if (stack.length < 2) break;

      if (stack[stack.length - 1] === stack[stack.length - 2]) {
        stack.pop();
        stack.pop();
        answer += 2;
      }

      break;
    }
  }
  return answer;
}

console.log(solution([[0,0,0,0,0],[0,0,1,0,3],[0,2,5,0,1],[4,2,4,4,2],[3,5,1,3,1]], [1,5,3,5,1,2,1,4]));
