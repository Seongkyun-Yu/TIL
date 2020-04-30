var arr = [1, 2].concat([3, 4]);
console.log(arr); // [1, 2, 3, 4]

const arrS = [...arr, 5, 6];
console.log(arrS);


var arr1 = [1, 2];
var arr2 = [3, 4];

arr1.push(arr2);

console.log(arr1);

// ES5
var arr4 = [1, 4];
var arr5 = [2, 3];

// apply 메소드의 2번째 인수는 배열이다. 이것은 인수 목록으로 splice 메소드에 전달된다.
// [1, 0].concat(arr2) → [1, 0, 2, 3]
// arr1.splice(1, 0, 2, 3) → arr1[1]부터 0개의 요소를 제거하고
// 그자리(arr1[1])에 새로운 요소(2, 3)를 삽입한다.
Array.prototype.splice.apply(arr4, [1, 0].concat(arr5));

console.log(arr4); // [1, 2, 3, 4]



function isRamen() {
  var args = Array.prototype.slice.apply(arguments);
  console.log(args)

  return args.some(item => item === '스프');
}

console.log(isRamen('면', '계란', '스프'));
