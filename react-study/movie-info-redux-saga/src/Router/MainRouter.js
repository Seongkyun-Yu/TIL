import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Popular from '../Components/Pages/Popular';
import Upcoming from '../Components/Pages/Upcoming';
import Search from '../Components/Pages/Search';
import Detail from '../Components/Pages/Detail';
import NotFound from '../Components/Pages/NotFound';

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
