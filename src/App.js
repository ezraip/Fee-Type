import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from '../src/pages/login';
import Register from './pages/Register';
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" render={() => <Register />} exact />
        <Route
          path="/home"
          render={() => <Home />} />
           <Route
          path="/login"
          render={() => <Login />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;