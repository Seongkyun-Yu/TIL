function solution(price, money, count) {
  const fee = new Array(count).fill().reduce((accPrice, _, i) => {
    return accPrice + price * (i + 1);
  }, 0);

  return fee - money > 0 ? fee - money : 0;
}

solution(3, 20, 4);
