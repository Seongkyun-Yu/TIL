let todos = [];

const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');

const xhrReq = (() => {
  const xhr = new XMLHttpRequest();

  const xhrSet = (type, url, callback, payload) => {
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
  const post = (url, callback, payload) => xhrSet('POST', url, callback, payload);
  const patch = (url, callback, payload) => xhrSet('PATCH', url, callback, payload);
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

const patchTodo = (url, payload) => {
  xhrReq.patch(url, (patchItem) => {
    todos = todos.map((todo) => (todo.id === patchItem.id ? patchItem : todo));
    render();
  }, payload);
};

const deleteTodo = (url, id) => {
  xhrReq.deletePayload(url, () => {
    todos = todos.filter((todo) => todo.id !== +id);
    render();
  });
};


window.onload = getTodos;

$inputTodo.onkeyup = (e) => {
  const content = e.target.value;
  if (e.keyCode !== 13 || content.trim() === '') return;

  let id = +Math.max(...todos.map((todo) => todo.id));
  id++;

  xhrReq.post('/todos', (data) => {
    todos = [data, ...todos]
    render();
  }, { id, content, completed: false });
};

$todos.onchange = ({ target }) => {
  const url = `/todos/${target.parentNode.id}`;
  const index = todos.findIndex((todo) => todo.id === +target.parentNode.id);
  const payload = { completed: !todos[index].completed };

  patchTodo(url, payload);
};

$todos.onclick = ({ target }) => {
  if (!target.matches('button')) return;

  const url = `/todos/${target.parentNode.id}`;

  deleteTodo(url, target.parentNode.id);
};
