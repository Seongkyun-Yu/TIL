let todos = [];
let navState = 'all';

const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $completedTodos = document.querySelector('.completed-todos');
const $ckCompleteAll = document.getElementById('ck-complete-all');
const $clearCompleted = document.querySelector('.clear-completed');
const $activeTodos = document.querySelector('.active-todos');
const $nav = document.querySelector('.nav');

const ajax = (() => {
  const requst = (type, url, payload) => {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();

      xhr.open(type, url);

      xhr.setRequestHeader('content-type', 'application/json');
      xhr.send(JSON.stringify(payload));

      xhr.onload = () => {
        if (xhr.status === 200 || xhr.status === 201) resolve(JSON.parse(xhr.response));
        else reject(new Error(`${xhr.status} ${xhr.response}`));
      };
    });
  };

  return {
    get(url) {
      return requst('GET', url);
    },
    post(url, payload) {
      return requst('POST', url, payload);
    },
    patch(url, payload) {
      return requst('PATCH', url, payload);
    },
    delete(url) {
      return requst('DELETE', url);
    }
  };
})();

const render = () => {
  let str = '';
  let renderTodos = navState === 'all' ? todos : navState === 'active' ? todos.filter(todo => !todo.completed) : todos.filter(todo => todo.completed);
  renderTodos = renderTodos.sort((todo1, todo2) => todo2.id - todo1.id);
  renderTodos.forEach(({ id, content, completed }) => {
    str += `<li id="${id}" class="todo-item">
              <input id="ck-${id}" class="checkbox" type="checkbox" ${completed ? 'checked' : ''}>
              <label for="ck-${id}">${content}</label>
              <i class="remove-todo far fa-times-circle"></i>
            </li>`;
  });
  $completedTodos.textContent = todos.filter(todo => todo.completed).length;
  $activeTodos.textContent = todos.filter(todo => !todo.completed).length;
  $todos.innerHTML = str;
};

const generateId = () => (todos.length ? Math.max(...todos.map((todo) => todo.id))+ 1 : 1);

const countCompleted = () => todos.filter((todo) => todo.completed).length;

const countActived = () => todos.filter((todo) => !todo.completed).length;


// Event handler
window.onload = axios.get('/todos')
    .then(({ data }) => todos = data)
    .then(render)
    .catch((err) => console.error(err));

$inputTodo.onkeydown = (e) => {
  if (e.keyCode !== 13) return;

  axios.post('/todos', { id: generateId(), content: e.target.value, completed: false })
    .then(({ data }) => todos = data)
    .then(render)
    .catch((err) => console.error(err));
};

$todos.onchange = ({ target }) => {
  const completed = todos.find((todo) => todo.id === +target.parentNode.id).completed;

  axios.patch(`/todos/${target.parentNode.id}`, { completed })
    .then(({ data }) => todos = data)
    .then(render)
    .catch((err) => console.error(err));
};

$todos.onclick = ({ target }) => {
  if (!target.matches('.remove-todo')) return;

  axios.delete(`/todos/${target.parentNode.id}`)
    .then(({ data }) => todos = data)
    .then(render)
    .catch((err) => console.error(err));
};

$ckCompleteAll.onclick = ({ target }) => {
  const payload = target.checked ? { completed: true } : { completed: false };

  axios.patch('/todos', payload)
    .then(({ data }) => todos = data)
    .then(render)
    .catch((err) => console.error(err));
};

$nav.onclick = ({ target }) => {
  if (!target.matches('.nav > li:not(.active)')) return;

  [...target.parentNode.children].forEach(child => {
    child.classList.toggle('active', child.id === target.id);
  });

  navState = target.id;
  render();
};

$clearCompleted.onclick = ({ target }) => {
  if (!target.matches('.clear-completed .btn')) return;

  axios.delete('/todos/completed')
    .then(({ data }) => todos = data)
    .then(render)
    .catch((err) => console.error(err));
};
