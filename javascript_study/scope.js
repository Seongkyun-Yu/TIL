// 렉시컬 환경 연습

let x = 'global';

function foo() {
  let x = 'local';
  console.log(x); // ①
}

foo();

console.log(x);
