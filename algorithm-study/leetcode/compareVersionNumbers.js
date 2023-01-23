/**
 * MEDIUM
 * https://leetcode.com/problems/compare-version-numbers/
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
var compareVersion = function (version1, version2) {
  const ver1 = version1.split('.').map((ver) => Number(ver));
  const ver2 = version2.split('.').map((ver) => Number(ver));

  const long = ver1.length > ver2.length ? ver1 : ver2;

  for (let i = 0; i < long.length; i++) {
    const num1 = ver1[i] || 0;
    const num2 = ver2[i] || 0;

    if (num1 === num2) continue;
    if (num1 < num2) return -1;
    else return 1;
  }

  return 0;
};
