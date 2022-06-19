import React from 'react';
import "./App.css"
import {
  BrowserRouter as Router,
  Switch,
  Route, Redirect
  // Link
} from "react-router-dom";
import Home from './components/home/Home';
import Register from './components/register/Register';
import ForgetPass from './components/forgetpass/ForgetPass';

// Redux
import { useSelector } from 'react-redux'

const App = () => {
  const userState = useSelector((state) => { return state.user });
  console.log(userState.currentUser);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {userState.currentUser ? <Home /> : <Register />}
        </Route>
        <Route path="/register">
          {userState.currentUser ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/forgetPassword">
          <ForgetPass />
        </Route>
      </Switch>
    </Router>
  )
}

export default App