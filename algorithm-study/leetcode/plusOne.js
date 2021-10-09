/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let addNum = 0;
  const result = [];

  for (let i = digits.length - 1; i >= 0; i--) {
    let cur = digits[i] + addNum;
    if (i === digits.length - 1) cur++;

    const quotient = Math.floor(cur / 10);
    const remainder = cur % 10;

    if (cur >= 10) addNum = quotient;
    else addNum = 0;

    result.unshift(remainder);
  }

  if (addNum) result.unshift(1);

  return result;
};
