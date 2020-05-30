// 탑
// https://programmers.co.kr/learn/courses/30/lessons/42588

function solution(heights) {
  const answer = [0];
  for (let i = 0; i < heights.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (heights[i] < heights[j]) {
        console.log(i, j, heights[i], heights[j]);

        answer.push(j + 1);
        break;
      } else if (j <= 0) answer.push(0);
    }
  }

  return answer;
}
console.log(solution([6, 9, 5, 7, 4]));
