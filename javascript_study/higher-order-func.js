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

const company = ['google', 'apple', 'microsoft', '삼성', '엘지'];
company.sort(); // 오름차순 정렬
console.log(company); // [ 'apple', 'google', 'microsoft', '삼성', '엘지' ]


const points = [120, 110, 1, 5, 2, 25, 10];

points.sort(function(a, b) {
  console.log(a, b);
  return a - b;
});

console.log(points);


const member = [
  { name: 'Yu', age: 32, address: 'incheon', sign: 2008, content: 'JavaScript' },
  { name: 'Jeon', age: 30, address: 'incheon', sign: 2009, content: 'HTML' },
  { name: 'Park', age: 20, address: 'seoul', sign: 2015, content: 'CSS' }
];

function compare(key) {
  return function(a, b) {
    return a[key] > b[key] ? 1 : -1;
  };
}

member.sort(compare('content'));
console.log(member);

const numbers = [1, 2, 3, 4, 5];

// 짝수만을 필터링한다 (0은 false로 평가된다)
const evens = numbers.filter(item => !(item % 2));

console.log(evens); // [0, 2, 4]

const member1 = [
  { name: 'Lee', address: 'Seoul' },
  { name: 'Kim', address: 'Incheon'},
  { name: 'Choi', address: 'Incheon' },
  { name: 'Park', address: 'Seoul' }
];

// address가 Seoul인 요소를 반환한다.
const result = member1.findIndex(item => item.address === 'Seoul');

// Array#find는 배열이 아니라 요소를 반환한다.
console.log(result); // { name: 'Lee', address: 'Seoul' }