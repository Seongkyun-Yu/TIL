const results = [];

function findWord(begin, target, words, visitedList, count) {
  if (begin === target) {
    results.push(count);
    console.log('결과들', results);
    return;
  }

  for (let i = 0; i < begin.length; i++) {
    for (let j = 0; j < words[i].length; j++) {
      // eslint-disable-next-line no-continue
      if (words[i][j] !== begin[j] || visitedList[i] === 1) continue;

      visitedList[i] = 1;
      console.log(words[i], visitedList);
      findWord(words[i], target, words, visitedList, count + 1);
    }
  }
}

function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  const visitedList = Array(words.length).fill(0);
  console.log(visitedList);

  findWord(begin, target, words, visitedList, 1);

  return Math.min(...results);
}

console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']));
