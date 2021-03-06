let todos = [];
let navState = 'all';

const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $completedTodos = document.querySelector('.completed-todos');
const $ckCompleteAll = document.getElementById('ck-complete-all');
const $clearCompleted = document.querySelector('.clear-completed');
const $activeTodos = document.querySelector('.active-todos');
const $nav = document.querySelector('.nav');


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


// Event handler
window.onload = fetch('/todos')
  .then(res => res.json())
  .then((res) => todos = res)
  .then(render)
  .catch((err) => console.error(err));

$inputTodo.onkeydown = (e) => {
  if (e.keyCode !== 13) return;

  fetch('/todos', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ id: generateId(), content: e.target.value, completed: false })
  })
    .then(res => res.json()) // response 객체에서 body만 가져옴
    .then((res) => todos = res)
    .then(render)
    .catch((err) => console.error(err));
};

$todos.onchange = ({ target }) => {
  const { completed } = todos.find((todo) => todo.id === +target.parentNode.id);

  fetch(`/todos/${target.parentNode.id}`, { 
    method: 'PATCH',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({ completed })
  })
    .then(res => res.json())
    .then((res) => todos = res)
    .then(render)
    .catch((err) => console.error(err));
};

$todos.onclick = ({ target }) => {
  if (!target.matches('.remove-todo')) return;

  fetch(`/todos/${target.parentNode.id}`, { 
    method: 'DELETE',
    headers: { 'content-type': 'application/json' }
  })
    .then(res => res.json())
    .then((res) => todos = res)
    .then(render)
    .catch((err) => console.error(err));
};

$ckCompleteAll.onclick = ({ target }) => {
  const payload = target.checked ? { completed: true } : { completed: false };

  fetch('/todos', {
    method: 'PATCH',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(payload)
  })
    .then(res => res.json())
    .then((res) => todos = res)
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

  fetch('/todos/completed',{
    method: 'DELETE',
    headers: { 'content-type': 'application/json' }
  })
    .then((res) => res.json())
    .then((res) => todos = res)
    .then(render)
    .catch((err) => console.error(err));
};
