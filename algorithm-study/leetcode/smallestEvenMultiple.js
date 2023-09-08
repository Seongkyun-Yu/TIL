/**
 * EASY
 * https://leetcode.com/problems/smallest-even-multiple/
 * @param {number} n
 * @return {number}
 */
var smallestEvenMultiple = function (n) {
  const getGcd = (big, small) => {
    if (big % small === 0) return small;

    return getGcd(small, big % small);
  };

  let gcd = 0;
  if (n > 2) gcd = getGcd(n, 2);
  else gcd = getGcd(2, n);

  return (n * 2) / gcd;
};
