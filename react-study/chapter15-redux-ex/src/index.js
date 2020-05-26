import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore } from 'redux';
import rootReducer from './Modules';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
// 리덕스 개발자 도구

const store = createStore(rootReducer, composeWithDevTools());
console.log(store.getState()); // 스토어의 상태를 확인해봅시다.

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
