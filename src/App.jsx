import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import store from './store';
import Cadastro from './features/cadastro';
import Header from './shared/components/header/Header';

import './App.css';

const App = () => (
  <Provider store={store}>
    <Header />
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/cadastro"
            component={Cadastro}
          />
          <Route
            exact
            path="/"
            component={Cadastro}
          />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
);

export default App;
