import React from 'react';
import { Route } from 'react-router-dom';
import Popular from './Components/templates/Popular';
import Recent from './Components/templates/Recent';
import About from './Components/templates/About';

function App() {
  return (
    <div>
      <Route exact path="/" component={Popular} />
      <Route path="/Recent" component={Recent} />
      <Route path="/About" component={About} />
    </div>
  );
}

export default App;
