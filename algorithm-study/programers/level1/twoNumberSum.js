// https://programmers.co.kr/learn/courses/30/lessons/68644

function solution(numbers) {
  const answer = [];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      answer.push(numbers[i] + numbers[j]);
    }
  }

  return [...new Set(answer)].sort((a, b) => a - b);
}
