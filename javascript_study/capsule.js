// 즉시 실행 함수를 활용한 캡슐화
const Person = (function () {

  let _name = '';

  function Person(name) {
    _name = name;
  }

  Person.prototype.sayHello = function () {
    console.log(_name, 'hi');
  }

  return Person;
}())

const person = new Person('Yu');

console.log(person);  // _name이 들어있지 않다

person.sayHello();


