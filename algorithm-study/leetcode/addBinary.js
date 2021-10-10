/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  const aNum = '0b' + a;
  const bNum = '0b' + b;

  const result = BigInt(aNum) + BigInt(bNum);

  return result.toString(2);
};

console.log(addBinary('11', '1'));
