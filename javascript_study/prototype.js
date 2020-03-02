// 함수 정의(constructor)가 평가되어 함수 객체를 생성하는 시점에 프로토타입도 더불어 생성된다.
console.log(Person.prototype); // 선언 돼었으나 할당 되지 않아서 constructor 없음
console.log(Person2.prototype); // {constructor: ƒ}

// 생성자 함수
let Person = function (name) {
  this.name = name;
}

// 생성자 함수
function Person2 (name) {
  this.name = name;
}