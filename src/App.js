import React, { Component } from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';
import  HeaderLogout from './logout';
import Signup from './signup';
import Login from './login';
import UserProfile from './useprofile';
import MaterialIcon from 'react-google-material-icons'
import Dashboard from './dashboard';
import TodoItem from './todoItem';

class App extends Component {
  render() {
    return (

      <Router>

        <Switch>

           {/* THE SIGN UP ROUTE */}
             <Route exact path='/signup' component={Signup} />
              {/* This is Dashboard ROUTE */}
             <Route exact path = '/dashboard' component = { Dashboard } />
               {/* This is LOGIN ROUTE */}
             <Route exact path='/login' component={Login} />
          </Switch>
       </Router>
    );
  }
}

export default App;
