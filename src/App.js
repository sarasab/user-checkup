import React from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import './App.css';
import Login from './component/Login'
import UserList from './component/UserList'
import UserProfile from './component/UseProfile'
import PageNotFound from './component/PageNotFound'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/Login">Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/UserList">UserList</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/UserProfile">UserProfile</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/PageNotFound">PageNotFound</Link></li>
           
         
          </ul>
        </nav>
        <Switch>
          <Route exact path="/" component={Login}/>
          <Route path="/UserList" component={UserList}/>
          <Route path="/UserProfile" component={UserProfile}/>
          <Route path="/PageNotFound" component={PageNotFound}/>
        
        </Switch>
      </BrowserRouter>
    )
  }
}
export default App;
