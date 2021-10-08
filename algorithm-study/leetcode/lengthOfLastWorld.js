/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  const str = s.trim();
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] === ' ') result = '';
    else result += str[i];
  }

  return result.length;
};
