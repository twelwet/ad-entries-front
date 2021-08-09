import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import SearchPage from '../pages/search-page';
import {AppRoute} from '../../constants';

function App() {
  return (
    <Switch>
      <Route path={AppRoute.SEARCH} exact>
        <SearchPage />
      </Route>
      <Route>
        <Redirect to={AppRoute.SEARCH}/>
      </Route>
    </Switch>
  );
}

export default App;
