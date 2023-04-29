// level4
// 사칙연산
// https://school.programmers.co.kr/learn/courses/30/lessons/1843

function solution(arr) {
  const operationCount = Math.ceil(arr.length / 2);

  const maxDp = {};
  const minDp = {};

  for (let count = 0; count < operationCount; count++) {
    for (let i = 0; i < operationCount - count; i++) {
      const j = i + count;

      if (i === j) {
        maxDp[`${i}-${j}`] = Number(arr[i * 2]);
        minDp[`${i}-${j}`] = Number(arr[i * 2]);
        continue;
      }

      for (let k = i; k < j; k++) {
        if (arr[k * 2 + 1] === '+') {
          maxDp[`${i}-${j}`] = Math.max(
            maxDp[`${i}-${j}`] || -Infinity,
            maxDp[`${i}-${k}`] + maxDp[`${k + 1}-${j}`],
          );
          minDp[`${i}-${j}`] = Math.min(
            minDp[`${i}-${j}`] || Infinity,
            minDp[`${i}-${k}`] + minDp[`${k + 1}-${j}`],
          );
        } else {
          maxDp[`${i}-${j}`] = Math.max(
            maxDp[`${i}-${j}`] || -Infinity,
            maxDp[`${i}-${k}`] - minDp[`${k + 1}-${j}`],
          );
          minDp[`${i}-${j}`] = Math.min(
            minDp[`${i}-${j}`] || Infinity,
            minDp[`${i}-${k}`] - maxDp[`${k + 1}-${j}`],
          );
        }
      }
    }
  }

  return maxDp[`${0}-${operationCount - 1}`];
}

console.log(solution(['5', '-', '3', '+', '1', '+', '2', '-', '4']));
