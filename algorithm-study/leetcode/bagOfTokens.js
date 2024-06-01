/**
 * MEDIUM
 * https://leetcode.com/problems/bag-of-tokens/
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function (tokens, power) {
  const sortedTokens = tokens.sort((a, b) => a - b);

  let max = 0;
  let score = 0;
  let curPower = power;

  let minIdx = 0;
  let maxIdx = sortedTokens.length - 1;
  while (minIdx <= maxIdx) {
    const minToken = tokens[minIdx];
    if (minToken <= curPower) {
      score++;
      curPower -= minToken;
      minIdx++;
      max = Math.max(max, score);
    } else {
      if (score === 0) break;
      score--;
      curPower += tokens[maxIdx];
      maxIdx--;
      max = Math.max(max, score);
    }
  }

  return max;
};
