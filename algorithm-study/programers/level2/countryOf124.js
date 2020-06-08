// 124 나라의 숫자
// https://programmers.co.kr/learn/courses/30/lessons/12899

function solution(n) {
  let numStr = '';
  while (n > 2) {
    let num = n % 3;
    if (num === 0) {
      num = n - (Math.floor(n / 3) - 1) * 3;
      n = Math.floor(n / 3) - 1;
    } else n = Math.floor(n / 3);

    if (+num === 1) numStr = 1 + numStr;
    else if (+num === 2) numStr = 2 + numStr;
    else numStr = 4 + numStr;
  }
  if (n) numStr = n === 3 ? 4 + numStr : n + numStr;

  return numStr;
}

console.log(solution(10));
