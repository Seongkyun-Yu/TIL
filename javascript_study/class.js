// 수퍼 클래스
class Base {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    return `Hi! ${this.name}`;
  }
}

class Derived extends Base {
  sayHi() {
    // __super는 Derived의 sayHi가 바인딩된 객체의 프로토타입을 가리킨다.
    // sayHi는 Derived.prototype에 바인딩되었으므로 __super는 Base.prototype을 가리킨다.
    console.log(this)
    const __super = Object.getPrototypeOf(Derived.prototype);
    return `${__super.sayHi.call(this)} how are you doing?`;
  }
}

const a = new Derived('yu');

a.sayHi();


const base = {
  name: 'Lee',
  sayHi() {
    return `Hi! ${this.name}`;
  }
};

const derived = {
  __proto__: base,
  // ES6 사양에서 정의한 메소드이다. [[HomeObject]]를 갖는다.
  // super는 자신이 속한 객체의 상위 객체이다(프로토타입체인 상)
  sayHi () {
    return `${super.name}. how are you doing?`;
  }
};

console.log(derived.sayHi()); // Hi! Lee. how are you doing?