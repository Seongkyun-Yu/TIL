let musics = [];
let playlist = [];
let lenderList = [];
let navState = 'all';
let loginUser;

const $musics = document.querySelector('.musics');

const render = (data) => {
  // let str = '';
  // let renderTodos = navState === 'all' ? todos : navState === 'active' ? todos.filter(todo => !todo.completed) : todos.filter(todo => todo.completed);
  // renderTodos = renderTodos.sort((todo1, todo2) => todo2.id - todo1.id);
  // renderTodos.forEach(({ id, content, completed }) => {
  //   str += `<li id="${id}" class="todo-item">
  //             <input id="ck-${id}" class="checkbox" type="checkbox" ${completed ? 'checked' : ''}>
  //             <label for="ck-${id}">${content}</label>
  //             <i class="remove-todo far fa-times-circle"></i>
  //           </li>`;
  // });
  // $completedTodos.textContent = todos.filter(todo => todo.completed).length;
  // $activeTodos.textContent = todos.filter(todo => !todo.completed).length;
  $musics.innerHTML = JSON.stringify(data)
  console.log(typeof data);
  
};

const generateId = () => (todos.length ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1);


// login funcs
const login = async (e, id, password) => {
  const {data} = await axios.post('/login', { id, password });
  loginUser = data;
  render(loginUser);
};
login('testEvent', 'ysungkoon', '111')

// Get data funcs
const getMusics = async (e) => {
  const {data} = await axios.get('/musics');
  musics = data;
  render(musics);
};

const getTop10Musics = async (e) => {
  const {data} = await axios.get('/top10');
  musics = data;
  render(musics);
};

const getPlaylist = async (e, id) => {
  const {data} = await axios.post('/playlist', { id });
  playlist = data;
  render(playlist);
};

const getFavorite = async (e, id) => {
  const {data} = await axios.post('/favorite', { id });
  playlist = data;
  render(playlist);
};

const getTypeList = async (e, type) => {
  const {data} = await axios.post('/typelist', { type });
  lenderList = data;
  render(lenderList);
};
// getTypeList('testEvent','hiphop');

const addPlaylist = async (e, id, title) => {
  const {data} = await axios.post('/addplaylist', { id, title });
  playlist = data;
  render(playlist);
};
// addPlaylist('testEvent','ysungkoon', 'Nightingale');

const addFavorite = async (e, id, title) => {
  const {data} = await axios.post('/addFavorite', { id, title });
  playlist = data;
  render(playlist);
};
// addFavorite('testEvent','ysungkoon', 'Nightingale');

const deletePlaylist = async (e, id, deleteIndex) => {
  const {data} = await axios.patch('/deletePlaylist', { id, deleteIndex });
  playlist = data;
  render(playlist);
};
// deletePlaylist('testEvent','ysungkoon', 0);

const deleteFavorite = async (e, id, deleteIndex) => {
  const {data} = await axios.patch('/deletefavorite', { id, deleteIndex });
  playlist = data;
  render(playlist);
};
// deleteFavorite('testEvent','ysungkoon', 0);