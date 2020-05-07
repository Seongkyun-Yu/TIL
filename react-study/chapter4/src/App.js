import React, { Component } from 'react';

class App extends Component {
  inputId = () => {
    console.log('사용자 아이디 입력중');
  };

  inputPass = () => {
    console.log('사용자 패스워드 입력중');
  };

  login = (e) => {
    e.preventDefault();
    console.log('로그인 시도');
  };

  render() {
    return (
      <>
        <h1 className="h1">로그인</h1>
        <form action="" name="id" method="post">
          <fieldset>
            <strong>ID:</strong>
            <br />
            <input
              type="text"
              name="id"
              placeholder="아이디"
              onKeyUp={this.inputId}
            />
            <br />
            <strong>PASS:</strong>
            <br />
            <input type="password" name="password" onKeyUp={this.inputPass} />
            <br />
            <input
              type="submit"
              value="로그인하기"
              onClick={this.login}
              className="loginBtn"
            />
          </fieldset>
        </form>
      </>
    );
  }
}

export default App;
