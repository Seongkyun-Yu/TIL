function solution(people, limit) {
  people.sort((a, b) => a - b);

  let leftIndex = 0;
  let rightIndex = people.length - 1;

  let answer = 0;

  while (leftIndex <= rightIndex) {
    if (leftIndex === rightIndex) {
      answer++;
      break;
    }
    if (people[leftIndex] + people[rightIndex] <= limit) {
      leftIndex++;
      rightIndex--;
    } else {
      rightIndex--;
    }
    answer++;
  }

  return answer;
}
