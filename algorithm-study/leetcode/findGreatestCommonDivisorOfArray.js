/**
 * EASY
 * https://leetcode.com/problems/find-greatest-common-divisor-of-array/
 * @param {number[]} nums
 * @return {number}
 */
var findGCD = function (nums) {
  const gcd = (big, small) => {
    if (small === 0) return big;
    else return gcd(small, big % small);
  };

  const big = Math.max(...nums);
  const small = Math.min(...nums);

  return gcd(big, small);
};
