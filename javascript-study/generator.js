function* infiniteAddGenerator() {
  let result = 0;
  while (true) {
    console.log(result);
    result += yield result;
  }
}

const add = infiniteAddGenerator();

add.next();

console.log(add.next(10));
console.log(add.next(10));
