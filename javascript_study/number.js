// Number 생성자 함수
const x = new Number('123');
const y = new Number('Hello');

console.log(x); // 123
console.log(y); // NaN


// Number.EPSILON 자바스크립트에서 표현할 수 있는 가장 작은 수
function isEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(0.1 + 0.2 == 0.3);  // false
console.log(isEqual(0.1 + 0.2, 0.3)); // true


// Number.MAX_VALUE 자바스크립트에서 사용 가능한 가장 큰 숫자
console.log(Number.MAX_VALUE);  // 1.7976931348623157e+308
