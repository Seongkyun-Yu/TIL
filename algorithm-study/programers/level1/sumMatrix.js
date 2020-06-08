// 행렬의 덧셈
// https://programmers.co.kr/learn/courses/30/lessons/12950

function solution(arr1, arr2) {
  const answer = [];
  for (let i = 0; i < arr1.length; i++) {
    const tempArr = [];
    for (let j = 0; j < arr1[i].length; j++) {
      tempArr.push(arr1[i][j] + arr2[i][j]);
    }
    answer.push(tempArr);
  }
  return answer;
}
