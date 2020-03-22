const Counter = (function() {
  let num = 0;

  function Counter(innerFunc) {
    num = innerFunc(num);
    return num;
  }

  return Counter;
});

function increaser(num) {
  return ++num;
}

function decreaser(num) {
  return --num;
}

const counter = new Counter();

console.log(counter(increaser)); // 1
console.log(counter(increaser)); // 2
console.log(counter(decreaser)); // 1
console.log(counter(decreaser)); // 0




class Users {
  constructor() {
    this.users = [
      { id: 1, name: 'Lee' },
      { id: 2, name: 'Kim' }
    ];
  }

  // 요소 추출
  findById(id) {
    // id가 일치하는 사용자만 반환
    return this.users.filter(user => user.id === id);
  }

  // 요소 제거
  remove(id) {
    // id가 일치하지 않는 사용자를 모두 반환
    this.users = this.users.filter(user => user.id !== id);
  }
}

// const users = new Users();

// let user = users.findById(1);
// console.log(users); // [{ id: 1, name: 'Lee' }]

// users.remove(1);

// user = users.findById(1);
// console.log(users); // []

const users = [
  { id: 1, name: 'Lee' },
  { id: 2, name: 'Kim' },
  { id: 2, name: 'Choi' },
  { id: 3, name: 'Park' }
];

function predicate(key, value) {
  // key와 value를 기억하는 클로저를 반환
  console.log(arguments);
  return item => item[key] === value;
}

// Array#findIndex는 콜백 함수를 실행하여 그 결과가 참인 첫번째 요소의 인덱스를 반환한다.
// id가 2인 요소의 인덱스를 구한다.
let index = users.findIndex(predicate('id', 2));
console.log(index); // 1

// name이 'Park'인 요소의 인덱스를 구한다.
index = users.findIndex(predicate('name', 'Park'));
console.log(index); // 3