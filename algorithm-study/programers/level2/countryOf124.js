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

    numStr = num + numStr;
  }
  numStr = n + numStr;

  let answer = '';
  for (let i = 0; i < numStr.length; i++) {
    if (+numStr[i] === 0) answer += 0;
    else if (+numStr[i] === 1) answer += 1;
    else if (+numStr[i] === 2) answer += 2;
    else answer += 4;
  }

  return +answer + '';
}

console.log(solution(10));
