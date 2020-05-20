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
      <Route exact path="/Recent" component={Recent} />
      <Route exact path="/Search" component={Search} />
      <Route exact path="/About" component={About} />
      <Route exact path="/Detail" component={Detail} />
      <Route path="/:movie_type/:movie_index" component={Detail} />
      {/* <Route path="/Recent/:movie_type/:movie_index" component={Detail} /> */}
      {/* <Route path="/Search/:movie_type/:movie_index" component={Detail} /> */}
      <Route render={() => <h1>없는 페이지입니다</h1>} />
    </Switch>
  );
}

export default MainRouter;
