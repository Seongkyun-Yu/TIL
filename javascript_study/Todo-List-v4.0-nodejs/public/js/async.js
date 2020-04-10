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

const generateId = () => (todos.length ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1);


// Get data funcs
const getTodos = async () => {
  const {data} = await axios.get('/todos');
  todos = data;
  render();
};

const inputTodo = async (e) => {
  if (e.keyCode !== 13) return;
  const { data } = await axios.post('/todos', { id: generateId(), content: e.target.value, completed: false });
  todos = data;
  render();
};

const completedTodo = async (target, completed) => {
  const { data } = await axios.patch(`/todos/${target.parentNode.id}`, { completed });
  todos = data;
  render();
} 

const removeTodo = async (target) => await axios.delete(`/todos/${target.parentNode.id}`);
const completedAllTodo = async (payload) => await axios.patch('/todos', payload);
const clearCompleteTodos = async () => await axios.delete('/todos/completed');

// Event handler
window.onload = getTodos;

$inputTodo.onkeydown = inputTodo;

$todos.onchange = async ({ target }) => {
  const completed = todos.find((todo) => todo.id === +target.parentNode.id).completed;

  const { data } = await axios.patch(`/todos/${target.parentNode.id}`, { completed });
  
  todos = data;
  render();
};

$todos.onclick = async ({ target }) => {
  if (!target.matches('.remove-todo')) return;

  const { data } = await axios.delete(`/todos/${target.parentNode.id}`);
  
  todos = data;
  render();
};

$ckCompleteAll.onclick = async ({ target }) => {
  const payload = target.checked ? { completed: true } : { completed: false };

  const { data } = await axios.patch('/todos', payload);
  
  todos = data;
  render();
};

$nav.onclick = ({ target }) => {
  if (!target.matches('.nav > li:not(.active)')) return;

  [...target.parentNode.children].forEach(child => {
    child.classList.toggle('active', child.id === target.id);
  });

  navState = target.id;
  render();
};

$clearCompleted.onclick = async ({ target }) => {
  if (!target.matches('.clear-completed .btn')) return;

  const { data } = await axios.delete('/todos/completed')
  
  todos = data;
  render();
};
