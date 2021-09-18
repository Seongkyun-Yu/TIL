/**
 * @param {number} x
 * @return {number}
 */

var reverse = function (x) {
  const answer = parseInt([...Math.abs(x).toString()].reverse().join(''));

  if (answer < Math.pow(2, 31) * -1 || answer > Math.pow(2, 31) - 1) return 0;

  return x > 0 ? answer : -answer;
};

// var reverse = function (x) {
//   const stringX = Math.abs(x).toString();
//   let newString = '';
//   for (let i = stringX.length - 1; i >= 0; i--) {
//     newString += stringX[i];
//   }
//   const answer = parseInt(newString);

//   if (answer < Math.pow(2, 31) * -1 || answer > Math.pow(2, 31) - 1) return 0;

//   return x > 0 ? answer : -answer;
// };

console.log(reverse(1534236469));
