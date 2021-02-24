import './App.css';
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import Login from './components/Login.js'
import NavBar from './components/NavBar.js'
import MainContainer from './components/MainContainer.js'
import Logout from './components/Logout.js';
import Articles from './components/Articles.js'

class App extends React.Component {


  componentDidMount(){
    this.props.getCurrentUser()
  }

  render(){
    return (
      <Router>
        <div className="App">
      <Logout/>
      <NavBar/>
        
        <Route exact path='/login' component={Login}/>
        <Route exact path='/articles' component={Articles}/>
      </div>
     </Router>
    );

  }
}




export default connect(null, { getCurrentUser })(App);
