import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import './styles/styles.css';

import Home from './pages/Home'
import OrderDetails from './pages/OrderDetails'
import Login from './pages/Login'
import Admin from './pages/Admin'

function App() {
  return (
    <div className="App">
      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/admin">Admin</Link>
            </li>
          </ul>
        </nav>
        <header className="App-header">

          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/admin">
              <Admin />
            </Route>
            <Route path={`/:orderId`}>
              <OrderDetails />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </header>
      </Router>
    </div>
  );
}

export default App;
