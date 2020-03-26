// Number 생성자 함수
const x = new Number('123');
const y = new Number('Hello');

console.log(x); // 123
console.log(y); // NaN


// Number.EPSILON 임의의 수와 그 수보다 큰 수 중 가장 작은 수와의 차이(최소 오차)
function isEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}

console.log(0.1 + 0.2 == 0.3);  // false
console.log(isEqual(0.1 + 0.2, 0.3)); // true


// Number.MAX_VALUE 자바스크립트에서 사용 가능한 가장 큰 숫자
console.log(Number.MAX_VALUE);  // 1.7976931348623157e+308


// Number.MIN_VALUE 자바스크립트에서 사용 가능한 가장 작은 숫자
console.log(Number.MIN_VALUE);  // 5e-324


// Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY
console.log(Number.POSITIVE_INFINITY);  // Infinity
console.log(Number.NEGATIVE_INFINITY);  // -Infinity