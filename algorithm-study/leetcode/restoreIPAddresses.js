/**
 * MEDIUM
 * https://leetcode.com/problems/restore-ip-addresses/
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  if (s.length < 4) return [];
  if (s.length > 12) return [];

  const result = [];

  const helper = (dotCount, ipAddress, restString) => {
    if (dotCount > 4) return;
    if (dotCount === 4 && restString.length > 3) return;
    if (dotCount === 4 && restString.length === 0) {
      result.push(ipAddress.join('.'));
      return;
    }

    let accString = '';
    const newIpAddress = [...ipAddress];
    const len = Math.min(3, restString.length);
    for (let i = 0; i < len; i++) {
      accString += restString[i];

      if (+accString > 255) break;

      newIpAddress.push(accString);
      helper(
        dotCount + 1,
        newIpAddress,
        restString.slice(i + 1, restString.length),
      );
      newIpAddress.pop();

      if (restString[0] === '0') break;
    }
  };

  helper(0, '', s);

  return result;
};
