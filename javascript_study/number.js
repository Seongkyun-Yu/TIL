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


// Number Method
// Number.isFinite 인수를 변환하지 않고 유한수인지 검사한다.
console.log(Number.isFinite('2')); // false
console.log(isFinite('2')); // true

// Number.isInteger 인수를 숫자로 변환하지 않고 정수인지 검사한다.
console.log(Number.isInteger('12')); // false

// Number.isNaN 인수가 NaN인지 검사한다.
console.log(Number.isNaN(NaN)); // true

// Number.isSafeInteger() 안전한 정수인지 검사한다.
console.log(Number.isSafeInteger(1000000000000000));
console.log(Number.isSafeInteger(10000000000000001));


// Number.prototype.toExponential 지수표기법으로 변환
const num = 77.1234;
console.log(num.toExponential()); // 7.71234e+1
console.log(num.toExponential(2)); // 7.71e+1

// Number.prototype.toFixed 매개변수로 지정된 소숫점자리를 반올림하여 문자열로 반환한다.
console.log(num.toFixed()); // 