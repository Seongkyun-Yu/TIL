// 프린터
// https://programmers.co.kr/learn/courses/30/lessons/42587

function solution(priorities, location) {
  let count = 0;
  const checkArray = priorities.map((prior, i) => ({
    value: prior,
    check: i === location,
  }));
  while (true) {
    const checkObj = checkArray.shift();
    if (checkArray.find((obj) => obj.value > checkObj.value))
      checkArray.push(checkObj);
    else if (checkObj.check) return ++count;
    else count++;
  }
}
