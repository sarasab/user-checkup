import React, {createContext} from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom'
import './App.css';
import Login from './component/Login'
import UserList from './component/UserList'
import UserProfile from './component/UseProfile'
import PageNotFound from './component/PageNotFound'
import UserContext from './UserContexte'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
    }
  }

  setUser = user=>this.setState({user})

  render() {
    return (

      <UserContext.Provider value={null}>
      <BrowserRouter>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <ul className="navbar-nav">
            <li className="nav-item"><Link className="nav-link" to="/">Login</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/UserList">UserList</Link></li>            
            <li className="nav-item"><Link className="nav-link" to="/UserProfile">UserProfile</Link></li>                   
            <li className="nav-item"><Link className="nav-link" to="/PageNotFound">PageNotFound</Link></li>
            <li className="text-white">connecter avec blabla</li>


          </ul>
        </nav>
        
        <Switch>
          <Route exact path="/" component={props => <Login setUser={this.setUser}{...props} />} />
          <Route path="/UserList" component={UserList} />
          <Route path="/UserProfile" component={UserProfile} />
          <Route path="/PageNotFound" component={PageNotFound} />
          </Switch>
        </BrowserRouter>
          </UserContext.Provider>
    )
  }
}
export default App;
