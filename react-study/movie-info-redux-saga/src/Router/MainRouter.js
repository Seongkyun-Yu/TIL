import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Popular from '../Pages/Popular';
import Upcoming from '../Pages/Upcoming';
import Search from '../Pages/Search';
import Detail from '../Pages/Detail';
import NotFound from '../Pages/NotFound';

const MainRouter = () => {
  return (
    <Switch>
      <Route exact path="/" component={Popular} />
      <Route path="/Upcoming" component={Upcoming} />
      <Route path="/Search" component={Search} />
      <Route path="/Detail/:idx" component={Detail} />
      <Route render={NotFound} />
    </Switch>
  );
};

export default MainRouter;
