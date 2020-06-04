// 기능개발
// https://programmers.co.kr/learn/courses/30/lessons/42586

function solution(progresses, speeds) {
  const answer = [];
  let count = 1;
  const needDays = progresses.map((prog, i) =>
    Math.ceil((100 - prog) / speeds[i]),
  );

  for (let i = 0; i < needDays.length; i++) {
    for (let j = i + 1; j <= needDays.length; j++) {
      if (needDays[i] >= needDays[j]) {
        count++;
      } else {
        answer.push(count);
        i = j - 1;
        count = 1;
        break;
      }
    }
  }
  return answer;
}

console.log(solution([99, 99, 99, 99, 99], [3, 3, 3, 3, 3]));
