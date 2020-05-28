import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './Modules';
import myLogger from './Middlewares/myLogger';
import ReduxThunk from 'redux-thunk';
import myLogger2 from './Middlewares/myLogger2';
import { composeWithDevTools } from 'redux-devtools-extension';
import { BrowserRouter } from 'react-router-dom';
// import myLogger3 from './Middlewares/myLogger3';

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(ReduxThunk, myLogger, myLogger2)),
);

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
