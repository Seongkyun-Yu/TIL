const $counter = {};

// 버튼이 클릭되면 자유 변수 num을 1 증가 시킨다.
const increase = (function () {
  // 카운트 상태를 유지하기 위한 자유 변수
  let num = 0;

  return function () {
    $counter.textContent = ++num; // 상태 변경
  };
}());
increase();

console.log($counter);

var arr = [];

for (let i = 0; i < 5; i++) {
  arr[i] = function () { // ①
    return i;
  };
}

for (var j = 0; j < arr.length; j++) {
  console.log(arr[j]()); // ②
}