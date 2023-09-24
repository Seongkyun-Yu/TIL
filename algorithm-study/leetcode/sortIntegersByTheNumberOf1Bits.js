/**
 * EASY
 * @param {number[]} arr
 * @return {number[]}
 */
var sortByBits = function (arr) {
  return arr.sort((a, b) => {
    const aCount = [...a.toString(2)].reduce((acc, cur) => {
      if (cur === '0') return acc;
      return acc + 1;
    }, 0);
    const bCount = [...b.toString(2)].reduce((acc, cur) => {
      if (cur === '0') return acc;
      return acc + 1;
    }, 0);

    if (aCount === bCount) return a - b;

    return aCount - bCount;
  });
};
