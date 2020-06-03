import React from 'react';
import './App.css';
// import PhoneContainer from "./Containers/PhoneContainer";
// import PhoneContainer from "./Containers/PhoneContainer";
import { Route } from 'react-router-dom';
import PhoneDetailPage from './Page/PhoneDetailPage';
import PhonePage from './Page/PhonePage';
import CounterContainer from './Containers/CounterContainer';

function App() {
  return (
    <div className="App">
      <CounterContainer />
      <Route exact path="/" component={PhonePage} />
      <Route path="/:id" component={PhoneDetailPage} />
    </div>
  );
}

export default App;
