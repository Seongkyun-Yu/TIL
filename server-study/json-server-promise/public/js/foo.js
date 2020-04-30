const promiseGet = (url) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.send();

    xhr.onload = () => {
      if (xhr.status === 200) {
        // Success
        resolve(JSON.parse(xhr.response));
      } else {
        // Failed
        reject(new Error(`${xhr.status}`));
      }
    };
  });
};

promiseGet('https://jsonplaceholder.typicode.com/todosxx/1')
  .then((_todo) => {
    let todos;
    return todos = _todo;
  })
  .catch((err) => console.error(err))
  .finally(() => console.log('End'));
