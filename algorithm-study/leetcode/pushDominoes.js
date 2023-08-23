/**
 * MEDIUM
 * https://leetcode.com/problems/push-dominoes/
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  let res = dominoes.split('');
  while (true) {
    let temp = res.slice();
    let changed = false;
    for (let i = 0; i < res.length; i++) {
      if (res[i + 1] === 'L' && res[i - 1] === 'R' && res[i] === '.') {
        continue;
      } else if (res[i + 1] === 'L' && res[i] === '.') {
        temp[i] = 'L';
        changed = true;
      } else if (res[i - 1] === 'R' && res[i] === '.') {
        temp[i] = 'R';
        changed = true;
      }
    }
    res = temp;
    if (!changed) break;
  }

  return res.join('');
};
