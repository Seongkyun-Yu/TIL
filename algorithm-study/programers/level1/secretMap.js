// 카카오 2018 블라인드 채용 : 비밀지도
// https://programmers.co.kr/learn/courses/30/lessons/17681

function solution(n, arr1, arr2) {
  const map1 = arr1.map((arr) => {
    let bin = arr.toString(2);
    const len = bin.length;
    if (bin.length < n) {
      for (let i = 0; i < n - len; i++) {
        bin = '0' + bin;
      }
    }
    return bin;
  });
  const map2 = arr2.map((arr) => {
    let bin = arr.toString(2);
    const len = bin.length;
    if (bin.length < n) {
      for (let i = 0; i < n - len; i++) {
        bin = '0' + bin;
      }
    }
    return bin;
  });

  const answer = [];
  for (let i = 0; i < n; i++) {
    let answerLine = '';
    for (let j = 0; j < n; j++) {
      if (map1[i][j] === '1' || map2[i][j] === '1') answerLine += '#';
      else answerLine += ' ';
    }
    answer.push(answerLine);
  }
  return answer;
}

console.log(solution(6, [46, 33, 33, 22, 31, 50], [27, 56, 19, 14, 14, 10]));
