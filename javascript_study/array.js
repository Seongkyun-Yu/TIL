const arr1 = new Array(10);
console.log(arr1); // [empty × 10]

const arr2 = new Array(10,11); // 인수가 두 개면 배열 요소로 만듦
console.log(arr2); // [ 10, 11 ]

const arr3 = new Array({}); // 인수가 한 개여도 숫자가 아니면 배열 요소로 만듦
console.log(arr3);

const arr4 = Array.of(1); // 요소가 하나여도 배열의 요소로 만듦
console.log(arr4);