const results = [];

function findWord(begin, target, words, count) {
  if (begin === target) {
    // console.log(begin, count);
    results.push(count + 1);
    return;
  }

  // console.log(begin, target, words, count);

  for (let i = 0; i < begin.length; i++) {
    const wordList = words.filter((word) => word[i] === begin[i]);

    for (let j = 0; j < wordList.length; j++) {
      const restWords = words.filter((word) => word !== wordList[j]);
      findWord(wordList[j], target, restWords, count + 1);
    }
  }
}

function solution(begin, target, words) {
  if (!words.includes(target)) return 0;

  findWord(begin, target, words, 1);

  return Math.min(...results);
}

console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']));
