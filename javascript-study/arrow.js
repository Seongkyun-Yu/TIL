// ()는 매개변수가 들어갈 자리, 한 줄일 경우 return 생략 가능
const arrow1 = () => console.log('화살표 함수');

// 매개변수가 있을 시 () 생략 가능
const arrow2 = x => x * x;

// 매개변수가 두 개 이상일 경우 () 생략 불가
const arrow3 = (x, y) => x * y;

// 코드가 두 줄 이상인 경우 {} 생략 불가
const arrow4 = (x, y) => {
  console.log(x);
  console.log(y);
};

class Base {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return `Hi! ${this.name}`;
  }
}

class Derived extends Base {
  // super 키워드는 ES6 메소드 내에서만 사용 가능하다.
  // 화살표 함수는 함수 자체의 super 바인딩이 없다.
  // 화살표 함수 sayHi의 상위 컨텍스트는 constructor이다.
  // 화살표 함수 sayHi의 super는 constructor의 super를 가리킨다.
  // 클래스 필드 정의 제안으로 클래스 필드에 화살표 함수를 할당한다.
  sayHi = () => `${super.sayHi()} how are you doing?`;
}

// Derived의 constructor는 Derived.prototype에 존재한다.
// 따라서 constructor의 super는 Base.prototype이 된다.
console.log(Object.getOwnPropertyNames(Derived.prototype)); // [ 'constructor' ]
