let todos = [];

const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');

const xhrReq = (() => {
  const xhrSet = (type, url, callback, payload) => {
    const xhr = new XMLHttpRequest();

    xhr.open(type, url);

    xhr.setRequestHeader('content-type', 'application/json');

    xhr.send(JSON.stringify(payload));

    xhr.onload = () => {
      if (xhr.status === 200 || xhr.status === 201) {
        callback(JSON.parse(xhr.response));
      } else {
        console.error(`${xhr.status} ${xhr.statusText}`);
      }
    };
  };

  const get = (url, callback) => xhrSet('GET', url, callback);
  const post = (url, payload, callback) => xhrSet('POST', url, callback, payload);
  const patch = (url, payload, callback) => xhrSet('PATCH', url, callback, payload);
  const deletePayload = (url, callback) => xhrSet('DELETE', url, callback);

  return { get, post, patch, deletePayload };
})();


const render = () => {
  let html = '';
  todos.forEach(({ id, content, completed }) => {
    html += `<li id="${id}">
              <input type="checkbox" ${completed ? 'checked' : ''}>
              <span>${content}</span>
              <button>X</button>
            </li>`;
  });
  $todos.innerHTML = html;
};

const getTodos = () => {
  xhrReq.get('/todos', (data) => {
    todos = data;
    todos.sort((todo1, todo2) => todo2.id - todo1.id);
    render();
  });
};

const generateId = () => (todos.length ? Math.max(...todos.map(todo => todo.id) + 1) : 1);


window.onload = getTodos;

$inputTodo.onkeyup = (e) => {
  const content = e.target.value;
  if (e.keyCode !== 13 || content.trim() === '') return;

  let id = generateId();
  id++;

  xhrReq.post('/todos', { id, content, completed: false }, (data) => {
    todos = [data, ...todos]
    render();
  });
};

$todos.onchange = ({ target }) => {
  const url = `/todos/${target.parentNode.id}`;
  // const index = todos.findIndex((todo) => todo.id === +target.parentNode.id);
  const payload = { completed: !todos.find((todo) => todo.id === +target.parentNode.id).completed };

  xhrReq.patch(url, payload, (patchItem) => {
    todos = todos.map((todo) => (todo.id === patchItem.id ? patchItem : todo));
    render();
  });
};

$todos.onclick = ({ target }) => {
  if (!target.matches('button')) return;

  const url = `/todos/${target.parentNode.id}`;
  xhrReq.deletePayload(url, () => {
    todos = todos.filter((todo) => todo.id !== +target.parentNode.id);
    render();
  });
};
