import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Popular from '../Components/Pages/Popular';
import Recent from '../Components/Pages/Recent';
import Search from '../Components/Pages/Search';
import About from '../Components/Pages/About';
import Detail from '../Components/Pages/Detail';

function MainRouter() {
  return (
    <Switch>
      <Route exact path="/" component={Popular} />
      <Route path="/Recent" component={Recent} />
      <Route path="/Search" component={Search} />
      <Route path="/About" component={About} />
      <Route path="/Detail" component={Detail} />
      <Route path="/:idx" component={Detail} />
      <Route render={() => <h1>없는 페이지입니다</h1>} />
    </Switch>
  );
}

export default MainRouter;
