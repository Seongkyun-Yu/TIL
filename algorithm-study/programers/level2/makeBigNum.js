const results = [];

function makeNum(number, acc, count) {
  if (number.length < count) return;
  if (count === 0) {
    results.push(+acc);
    return;
  }

  for (let i = 0; i < number.length; i++) {
    makeNum(number.slice(i + 1), acc + number[i], count - 1);
  }
}

function solution(number, k) {
  const count = number.length - k;

  makeNum(number, '', count);

  return `${Math.max(...results)}`;
}

console.log(solution('1924', 2));
