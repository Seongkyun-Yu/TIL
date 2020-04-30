// State
let todos = [];
let checkedTodos = [];
let nonCheckedTodos = [];

const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $ckCompleteAll = document.getElementById('ck-complete-all');
const $completedTodos = document.querySelector('.completed-todos');
const $activeTodos = document.querySelector('.active-todos');
const $clearCompleted = document.querySelector('.clear-completed');


const $nav = document.querySelector('.nav');


const render = () => {
  let str = '';
  let renderTodo;

  [...$nav.children].forEach(child => {
    if (![...child.classList].includes('active')) return;

    if (child.id === 'all') renderTodo = todos;
    else if (child.id === 'active') renderTodo = nonCheckedTodos;
    else renderTodo = checkedTodos;
  });
  renderTodo.forEach((todo) => {
    str += `<li id="${todo.id}" class="todo-item">
              <input id="ck-${todo.id}" class="checkbox" type="checkbox" ${todo.completed ? 'checked' : ''}>
              <label for="ck-${todo.id}">${todo.content}</label>
              <i class="remove-todo far fa-times-circle"></i>
            </li>`;
  });

  $todos.innerHTML = str;
};

const countCompleted = () => {
  const countCom = todos.filter(todo => todo.completed ).length;
  $completedTodos.innerHTML = countCom;
  $activeTodos.innerHTML = todos.length - countCom;
};

const getTodos = () => {
  todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false }
  ].sort((todo1, todo2) => todo2.id - todo1.id);

  checkedTodos = todos.filter(todo => todo.completed);
  nonCheckedTodos = todos.filter(todo => !todo.completed);
  countCompleted();

  render();
};

const toggleCompleted = ({ target }) => {
  todos = todos.map((todo) => (todo.id === +target.parentNode.id ? { ...todo, completed: !todo.completed } : todo));

  checkedTodos = todos.filter(todo => todo.completed);
  nonCheckedTodos = todos.filter(todo => !todo.completed);

  countCompleted();
  render();
};

const deleteTodo = ({ target }) => {
  if (![...target.classList].includes('remove-todo')) return;
  todos = todos.filter(todo => todo.id !== +target.parentNode.id);
  render();
};


// 이벤트 등록
window.onload = getTodos;

$todos.onchange = toggleCompleted;

$todos.onclick = deleteTodo;

$inputTodo.onkeyup = (e) => {
  if (e.keyCode !== 13) return;

  todos = [{ id: todos.length + 1, content: e.target.value, completed: false }, ...todos];

  e.target.value = '';

  render();
};

$ckCompleteAll.onchange = (e) => {
  todos = e.target.checked ? todos.map(todo => ({ ...todo, completed: true })) : todos.map(todo => ({ ...todo, completed: false }));

  checkedTodos = todos.filter(todo => !todo.completed);
  nonCheckedTodos = todos.filter(todo => todo.completed);

  countCompleted();

  render();
};

$clearCompleted.onclick = (e) => {
  if (!e.target.matches('.clear-completed > .btn')) return;

  todos = todos.filter(todo => !todo.completed);

  render();
};

$nav.onclick = (e) => {
  [...$nav.children].forEach(child => child.classList.remove('active'));
  e.target.classList.add('active');

  render();
};
