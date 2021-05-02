/* eslint-disable no-continue */
function solution(name) {
  const startChar = 'A'.charCodeAt(0);
  const endChar = 'Z'.charCodeAt(0);
  let answer = 0;
  let nowIndex = 0;

  for (let i = 0; i < name.length; i++) {
    if (name[i] === 'A') continue;
    const backIndexCount = nowIndex + name.length - i;
    const frontIndexCount = nowIndex < i ? i - nowIndex : nowIndex - i;

    answer += Math.min(frontIndexCount, backIndexCount);
    nowIndex = i;

    const backChar = endChar - name[i].charCodeAt(0) + 1;
    const frontChar = name[i].charCodeAt(0) - startChar;

    answer += Math.min(frontChar, backChar);
  }

  return answer;
}

console.log(solution('BBBAAAB'));
