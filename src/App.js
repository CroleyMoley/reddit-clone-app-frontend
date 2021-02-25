import './App.css';
import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import Login from './components/Login.js'
import NavBar from './components/NavBar.js'
import MainContainer from './components/MainContainer.js'
import Logout from './components/Logout.js';
import Articles from './components/Articles.js'
import Signup from './components/Signup.js'

class App extends React.Component {


  componentDidMount(){
    this.props.getCurrentUser()
  }

  render(){
    return (
     
        <div className="App">
        
        <NavBar/>
        <Logout/>
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' component={Signup}/>
        <MainContainer/>
      </div>
    
    );

  }
}




export default connect(null, { getCurrentUser })(App);
