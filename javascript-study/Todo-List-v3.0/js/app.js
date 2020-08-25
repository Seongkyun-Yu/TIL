// State
let todos = [];
let navState = 'all';

const $todos = document.querySelector('.todos');
const $completeAll = document.getElementById('ck-complete-all');
const $completedTodos = document.querySelector('.completed-todos');
const $clearCompleted = document.querySelector('.clear-completed');
const $nav = document.querySelector('.nav');

const render = () => {
  let str = '';
  let renderTodos =
    navState === 'all'
      ? todos
      : navState === 'active'
      ? todos.filter((todo) => !todo.completed)
      : todos.filter((todo) => todo.completed);
  renderTodos = renderTodos.sort((todo1, todo2) => todo2.id - todo1.id);
  renderTodos.forEach(({ id, content, completed }) => {
    str += `<li id="${id}" class="todo-item">
              <input id="ck-${id}" class="checkbox" type="checkbox" ${
      completed ? 'checked' : ''
    }>
              <label for="ck-${id}">${content}</label>
              <i class="remove-todo far fa-times-circle"></i>
            </li>`;
  });
  $todos.innerHTML = str;
};

const countCompleted = () => todos.filter((todo) => todo.completed).length;

const getData = () => {
  todos = [
    { id: 1, content: 'HTML', completed: false },
    { id: 2, content: 'CSS', completed: true },
    { id: 3, content: 'Javascript', completed: false },
  ].sort((todo1, todo2) => todo2.id - todo1.id);

  $completedTodos.innerText = countCompleted();
  render();
};

// Event handler
window.onload = getData;

$todos.onclick = ({ target }) => {
  if (!target.matches('.remove-todo')) return;

  todos = todos.filter((todo) => todo.id !== +target.parentNode.id);

  $completedTodos.innerText = countCompleted();
  render();
};

$todos.onchange = ({ target }) => {
  todos = todos.map((todo) =>
    todo.id === +target.parentNode.id
      ? { ...todo, completed: !todo.completed }
      : todo,
  );

  $completedTodos.innerText = countCompleted();
  render();
};

$completeAll.onchange = ({ target }) => {
  todos = target.checked
    ? todos.map((todo) => ({ ...todo, completed: true }))
    : todos.map((todo) => ({ ...todo, completed: false }));

  $completedTodos.innerText = countCompleted();
  render();
};

$clearCompleted.onclick = ({ target }) => {
  if (!target.matches('.clear-completed .btn')) return;
  todos = todos.filter((todo) => !todo.completed);

  $completedTodos.innerText = countCompleted();
  render();
};

$nav.onclick = ({ target }) => {
  if (!target.matches('.nav > li:not(.active)')) return;

  [...target.parentNode.children].forEach((child) => {
    child.classList.toggle('active', child.id === target.id);
  });

  navState = target.id;
  render();
};
