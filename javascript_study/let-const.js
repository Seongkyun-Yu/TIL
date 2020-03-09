// var 문제점
// 1. 중복 선언 허용
var x = 1;
var x = 2;
console.log(x); // 2

// 2. 함수 레벨 스코프만 인정
var y = 1;

if (true) {
  var y = 3;
}
console.log(y); // 3

// 3. 변수 호이스팅
console.log(lala); // undefined

lala = 123;

console.log(lala); // 123

var lala;


// let const는 중복 선언 금지
let foo = 124;
let foo = 345; // syntaxError


// 블록 레벨 스코프
let kuku = 1; // 전역 변수

{
  let kuku = 2; // 지역변수
  let haha = 3;
}

console.log(kuku); // 1
console.log(haha); // ReferenceError

// 변수 호이스팅 발생하지 않는 것처럼 동작함
console.log(wow); // ReerenceError
let wow;
