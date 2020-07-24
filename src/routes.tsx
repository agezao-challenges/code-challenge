import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home, SymbolMarkets } from './pages';

export const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route exact path='/currencies/:symbol/markets' component={ SymbolMarkets } />
      </Switch>
    </BrowserRouter>
  );
};
