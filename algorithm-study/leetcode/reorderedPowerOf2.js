/**
 * MEDIUM
 * https://leetcode.com/problems/reordered-power-of-2/
 * @param {number} n
 * @return {boolean}
 */
var reorderedPowerOf2 = function (n) {
  const counter = (num) => {
    const list = new Array(10).fill(0);

    while (num > 0) {
      list[num % 10]++;
      num = parseInt(num / 10);
    }

    return list.join('');
  };

  const numsCount = counter(n);

  for (let i = 0; i < 31; i++) {
    if (numsCount === counter(2 ** i)) return true;
  }

  return false;
};
