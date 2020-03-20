const arr1 = new Array(10);
console.log(arr1); // [empty × 10]

const arr2 = new Array(10,11); // 인수가 두 개면 배열 요소로 만듦
console.log(arr2); // [ 10, 11 ]

const arr3 = new Array({}); // 인수가 한 개여도 숫자가 아니면 배열 요소로 만듦
console.log(arr3);

const arr4 = Array.of(1); // 요소가 하나여도 배열의 요소로 만듦
console.log(arr4);


// 스택 기능 구현
const Stack = (function() {
  const Stack = function(array) {
    if(!Array.isArray(array)) throw new Error (`${array} is not Array`);

    this.array = array;
  }

  Stack.prototype.push = function(n) {
    const len = this.array.push(n);

    console.log(`${n}을/를 배열에 넣었습니다. 현재 배열: ${this.array} 배열의 길이: ${len}`);

    return len;
  }

  Stack.prototype.pop = function() {
    const lastElement = this.array.pop();

    console.log(`마지막 배열 요소(${lastElement})을/를 제거했습니다. 현재 배열: ${this.array}`);

    return lastElement;
  }

  return Stack;
}());

const stack = new Stack([1, 2, 3, 4, 5, 6, 7, 8]);

console.log(stack); //Stack { array: [1, 2, 3, 4, 5, 6, 7, 8] }

stack.push(9); // 9을/를 배열에 넣었습니다. 현재 배열: 1,2,3,4,5,6,7,8,9 배열의 길이: 9
stack.pop(); // 마지막 배열 요소(9)을/를 제거했습니다. 현재 배열: 1,2,3,4,5,6,7,8


// 클래스로 스택 기능 구현
class ClassStack {
  constructor(array) {
    if (!Array.isArray(array)) throw new Error(`${this.array} is not Array`);

    this.array = array;
  }

  push(n) {
    const len = this.array.push(n);
    console.log(`${n}을/를 배열에 넣었습니다. 현재 배열: ${this.array} 배열의 길이: ${len}`);

    return len;
  }

  pop(n) {
    const lastElement = this.array.pop(n);
    console.log(`마지막 배열 요소(${lastElement})을/를 제거했습니다. 현재 배열: ${this.array}`);

    return lastElement;
  }
}

const classStack = new ClassStack([1, 2, 3, 4, 5, 6, 7, 8]);

console.log(classStack); // ClassStack { array: [1, 2, 3, 4, 5, 6, 7, 8] }
classStack.push(9); // 9을/를 배열에 넣었습니다. 현재 배열: 1,2,3,4,5,6,7,8,9 배열의 길이: 9
classStack.pop(); // 마지막 배열 요소(9)을/를 제거했습니다. 현재 배열: 1,2,3,4,5,6,7,8


// Arraay.from 연습 [1, 2, 3]
const arr5 = Array.from({ '0': 0, '1': 1, '2': 2, length: 3 }, 
function (v, i) { 
  console.log(v);
  return i; 
});
console.log(arr5); // [0, 1, 2, 3, 4]