const promise = (boolean) => {
  return new Promise((resolve, reject) => {
    boolean ? resolve(1) : reject(2);
  });
};
promise(false)
  .then((item) => item, (item) => console.log(item))
  .then((item2) => console.log(item2));

console.log(promise().then((item) => item, (item)=> 2));
