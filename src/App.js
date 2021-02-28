import './App.css';
import React from 'react'
import { Route, Switch, withRouter } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import Login from './components/Login.js'
import NavBar from './components/NavBar.js'
import MainContainer from './components/MainContainer.js'
import Logout from './components/Logout.js';
import Articles from './components/Articles.js'
import Signup from './components/Signup.js'
import Home from './components/Home.js'


class App extends React.Component {


  componentDidMount(){
    this.props.getCurrentUser()
  }

  render(){
    const { loggedIn } = this.props
    return (
     
        <div className="App">
        
        <NavBar/>
        {loggedIn ? <Logout/>: null}
        <Route exact path='/login' component={Login}/>
        <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
        <Route exact path='/' render={()=> loggedIn ? <Articles /> : <Home />}/>
        <Route exact path='/articles/new' component={NewArticleForm}/>
        <MainContainer/>
      </div>
    
    );

  }
}

const mapStateToProps = state => {
  return ({
    loggedIn: !!state.currentUser
  })
}



export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
