var longestCommonPrefix = function (strs) {
  const orderedStrs = strs.sort((a, b) => a.length - b.length);

  let answer = '';
  for (let i = 0; i < orderedStrs[0].length; i++) {
    for (let j = 0; j < strs.length - 1; j++) {
      if (orderedStrs[j][i] !== orderedStrs[j + 1][i]) return answer;
    }

    answer += orderedStrs[0][i];
  }

  return answer;
};

console.log(longestCommonPrefix(['flow', 'flight']));
