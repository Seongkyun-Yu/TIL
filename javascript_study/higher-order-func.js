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