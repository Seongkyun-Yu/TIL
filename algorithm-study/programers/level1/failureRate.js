// 실패율
// https://programmers.co.kr/learn/courses/30/lessons/42889

function solution(N, stages) {
  let member = stages.length;
  let count = 0;
  let failRatio = [];
  for (let i = 1; i < N + 1; i++) {
    for (let j = 0; j < stages.length; j++) {
      if (i === stages[j]) count++;
    }
    if (member)
      failRatio.push({ fail: count / member, stage: i, member, count });
    else failRatio.push({ fail: 0, stage: i, member, count });

    member -= count;
    count = 0;
  }
  console.log(failRatio);

  return failRatio
    .sort((a, b) =>
      b.fail > a.fail ? 1 : b.fail < a.fail ? -1 : a.stage < b.stage ? -1 : 1,
    )
    .map((fail) => fail.stage);
}

console.log(solution(8, [1, 2, 3, 4, 5, 6, 7]));
