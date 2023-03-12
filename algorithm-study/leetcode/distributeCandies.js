/**
 * EASY
 * https://leetcode.com/problems/distribute-candies/
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  candyType.sort();

  let uniqueCandies = 1;

  for (let i = 1; i < candyType.length; i++) {
    if (candyType[i] !== candyType[i - 1]) uniqueCandies++;
    if (uniqueCandies === parseInt(candyType.length / 2)) {
      break;
    }
  }

  return Math.min(uniqueCandies, parseInt(candyType.length / 2));
};
