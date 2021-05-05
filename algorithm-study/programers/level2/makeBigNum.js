/* eslint-disable operator-linebreak */
/* eslint-disable no-continue */
// const results = [];

// function makeNum(number, acc, count) {
//   if (number.length < count) return;
//   if (count === 0) {
//     results.push(+acc);
//     return;
//   }

//   for (let i = 0; i < number.length; i++) {
//     makeNum(number.slice(i + 1), acc + number[i], count - 1);
//   }
// }

// function solution(number, k) {
//   const count = number.length - k;

//   makeNum(number, '', count);

//   return `${Math.max(...results)}`;
// }

function solution(number, k) {
  const numberStack = [0];
  const needLength = number.length - k;

  for (let i = 0; i < number.length; i++) {
    // if (numberStack[0] < +number[i] && number.length - i > needLength) {
    //   numberStack = [+number[i]];
    //   continue;
    // }
    for (let j = numberStack.length - 1; j >= 0; j--) {
      if (
        numberStack[j] < +number[i] &&
        number.length - i > needLength - numberStack.length
      ) {
        numberStack.pop();
      }
    }

    numberStack.push(+number[i]);
  }

  return numberStack.join('');
}

console.log(solution('1924', 2));
