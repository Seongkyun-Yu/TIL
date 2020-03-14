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