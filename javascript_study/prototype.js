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


const animal = { type: 'dog' };

// animal 객체는 __proto__ 프로퍼티를 소유하지 않는다.
console.log(animal.hasOwnProperty('__proto__')); // false

// __proto__ 프로퍼티는 모든 객체의 프로토타입 객체인 Object.prototype의 접근자 프로퍼티이다.
console.log(Object.getOwnPropertyDescriptor(Object.prototype, '__proto__'));
// {get: ƒ, set: ƒ, enumerable: false, configurable: true}

// 모든 객체는 Object.prototype의 접근자 프로퍼티 __proto__를 상속받아 사용할 수 있다.
console.log({}.__proto__ === Object.prototype); // true