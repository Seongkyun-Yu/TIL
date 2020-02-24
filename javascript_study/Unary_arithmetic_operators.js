var x = 5, result;

// 선할당 후증가 (Postfix increment operator)
result = x++;
console.log(result, x); // 5 6

// 선증가 후할당 (Prefix increment operator)
result = ++x;
console.log(result, x); // 7 7

// 선할당 후감소 (Postfix decrement operator)
result = x--;
console.log(result, x); // 7 6

// 선감소 후할당 (Prefix decrement operator)
result = --x;
console.log(result, x); // 5 5