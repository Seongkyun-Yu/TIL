/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const numList = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let number = 0;

  for (let i = 0; i < s.length - 1; i++) {
    if (numList[s[i]] < numList[s[i + 1]]) number -= numList[s[i]];
    else number += numList[s[i]];
  }
  number += numList[s[s.length - 1]];

  return number;
};
