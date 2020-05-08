import React, { useState } from 'react';
import LoginTitle from './atoms/LoginTitle';
import LoginForm from './molecules/LoginForm';

const AppStyle = {
  padding: 100,
  margin: 100,
  border: '1px solid #333',
};

const users = [
  {
    id: 'aaaa',
    password: '111111',
  },
  {
    id: 'bbbb',
    password: '111111',
  },
];

const menus = [
  {
    title: '오늘의 식단 지우기',
  },
];

function App() {
  const [state, setState] = useState({
    isLogin: false,
    test: 'test',
  });

  const logIn = (id, password) => {
    const canLogIn = users.find(
      (user) => user.id === id && user.password === password,
    );

    canLogIn ? setState({ ...state, isLogin: true }) : setState(state);
  };

  if (!state.isLogin)
    return (
      <div className="App" style={AppStyle}>
        <LoginTitle />
        <LoginForm logIn={logIn}></LoginForm>
      </div>
    );
  else return <h1>로그인 성공!</h1>;
}

// class App extends Component {
//   render() {
//     return (
//       <div className="App" style={AppStyle}>
//         <LoginTitle />
//         <LoginForm></LoginForm>
//       </div>
//     );
//   }
// }

export default App;
