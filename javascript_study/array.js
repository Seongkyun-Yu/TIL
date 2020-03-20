const arr1 = new Array(10);
console.log(arr1); // [empty × 10]

const arr2 = new Array(10,11); // 인수가 두 개면 배열 요소로 만듦
console.log(arr2); // [ 10, 11 ]

const arr3 = new Array({}); // 인수가 한 개여도 숫자가 아니면 배열 요소로 만듦
console.log(arr3);

const arr4 = Array.of(1); // 요소가 하나여도 배열의 요소로 만듦
console.log(arr4);


// 스택
const Stack = (function () {
  function Stack(array = []) {
    if (!Array.isArray(array)) {
      throw new TypeError(`${array} is not an array.`);
    }
    this.array = array;
  }

  // 스택의 가장 마지막에 데이터를 밀어 넣는다.
  Stack.prototype.push = function (value) {
    return this.array.push(value);
  };

  // 스택의 가장 마지막 데이터, 즉 가장 나중에 밀어 넣은 최신 데이터를 꺼낸다.
  Stack.prototype.pop = function () {
    return this.array.pop();
  };

  return Stack;
}());

const stack = new Stack([1, 2]);
console.log(stack); // [1, 2]