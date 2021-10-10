/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let result = 1;
  while (true) {
    if (result * result > x) return result - 1;
    result++;
  }
};
