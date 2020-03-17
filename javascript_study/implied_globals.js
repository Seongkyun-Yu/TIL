var x = 10; // 전역 변수

function foo () {
  // 선언하지 않은 변수
  y = 20;
  console.log(x + y);
}

foo(); // 30

console.log(global.x); // 10
console.log(global.y); // 20

delete x; // 전역 변수는 삭제되지 않는다. 프로퍼티 어트리뷰트 [[Configurable]] = false
delete y; // 프로퍼티는 삭제된다.

console.log(global.x); // 10
console.log(global.y); // undefined