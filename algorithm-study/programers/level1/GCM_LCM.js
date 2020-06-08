// 최대공약수와 최소공배수
// https://programmers.co.kr/learn/courses/30/lessons/12940

function solution(n, m) {
  let max = m;
  let min = n;

  while (min > 0) {
    const temp = min;
    min = max % min;
    max = temp;
  }
  return [max, (n * m) / max];
}
