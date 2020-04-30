let todos = [];
let navState = 'all';

const $todos = document.querySelector('.todos');
const $inputTodo = document.querySelector('.input-todo');
const $completedTodos = document.querySelector('.completed-todos');
const $ckCompleteAll = document.getElementById('ck-complete-all');
const $clearCompleted = document.querySelector('.clear-completed');
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
  $todos.innerHTML = str;
};

const generateId = () => (todos.length ? Math.max(...todos.map((todo) => todo.id) + 1) : 1);

const countCompleted = () => todos.filter((todo) => todo.completed).length;


// Event handler
window.onload = ajax.get('/todos')
  .then((res) => {
    todos = res;
    $completedTodos.innerText = countCompleted();
    render();
  })
  .catch((err) => console.error(err));

$inputTodo.onkeydown = (e) => {
  if (e.keyCode !== 13) return;

  const payload = { id: generateId(), content: e.target.value, completed: false };

  ajax.post('/todos', payload)
    .then((res) => {
      todos = [...todos, res];
      $completedTodos.innerText = countCompleted();
      render();
    })
    .catch((err) => console.error(err));
};

$todos.onchange = ({ target }) => {
  const index = todos.findIndex((todo) => todo.id === +target.parentNode.id);
  const payload = { completed: !todos[index].completed };

  ajax.patch(`/todos/${target.parentNode.id}`, payload)
    .then((res) => {
      todos[index] = res;
      $completedTodos.innerText = countCompleted();
      render();
    })
    .catch((err) => console.error(err));
};

$todos.onclick = ({ target }) => {
  if (!target.matches('.remove-todo')) return;

  ajax.delete(`/todos/${target.parentNode.id}`)
    .then(() => {
      todos = todos.filter((todo) => todo.id !== +target.parentNode.id);

      $completedTodos.innerText = countCompleted();
      render();
    })
    .catch((err) => console.error(err));
};

$ckCompleteAll.onclick = ({ target }) => {
  const payload = target.checked ? { completed: true } : { completed: false };

  todos.forEach((todo, index) => {
    ajax.patch(`/todos/${todo.id}`, payload)
      .then((res) => {
        todos[index] = res;

        $completedTodos.innerText = countCompleted();
        render();
      })
      .catch((err) => console.error(err));
  });


  // ajax.patch(`/todos/${todos[0].id}`, payload)
  //   .then((res) => {
  //     console.log(res);
  //     todos[0] = res;
  //     return todos[0];
  //   })
  //   .then(() => {
  //     return ajax.patch(`/todos/${todos[1].id}`, payload);
  //   })
  //   .then((res) => {
  //     console.log(res);
  //     todos[1] = res;
  //     return todos[1];
  //   })
  //   .then(() => {
  //     return ajax.patch(`/todos/${todos[2].id}`, payload);
  //   })
  //   .then((res) => {
  //     console.log(res);
  //     todos[2] = res;
  //     return todos[2];
  //   })
  //   .catch((err) => console.error(err))
  //   .finally(() => {
  //     $completedTodos.innerText = countCompleted();
  //     console.log(todos);
  //     render();
  //   });


  // Promise.all(todos.map((todo, index) => {
  //   return setTimeout(ajax.patch(`/todos/${todo.id}`, payload)
  //     .then((res) => {
  //       todos[index] = res;
  //     }), index * 1000);
  // })).then(render);
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

  const removeTodos = todos.filter((todo) => todo.completed);

  // const reqRemove = (index, callback) => {

  // };

  removeTodos.forEach((todo, index) => {
    ajax.delete(`/todos/${todo.id}`)
      .then(() => {
        todos = todos.filter((todo) => todo.id !== todos[index].id);

        $completedTodos.innerText = countCompleted();
        render();
      })
      .catch((err) => console.error(err));
  });
};
