import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import store from './store';
import Register from './features/register';
import Home from './features/home';
import Header from './shared/components/header/Header';

import './App.css';

const App = () => (
  <Provider store={store}>
    <Header />
    <main>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/register"
            component={Register}
          />
          <Route
            exact
            path="/"
            component={Home}
          />
        </Switch>
      </BrowserRouter>
    </main>
  </Provider>
);

export default App;
