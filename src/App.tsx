import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import This from './pages/This';
import That from './pages/That';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/this" exact component={This} />
        <Route path="/that" exact component={That} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
