import React from 'react';
import './App.css';
import PhoneListPage from './Page/PhoneListPage';
import PhoneDetailPage from './Page/PhoneDetailPage';
import { Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={PhoneListPage} />
      <Route path="/:id" component={PhoneDetailPage} />
    </div>
  );
}

export default App;
