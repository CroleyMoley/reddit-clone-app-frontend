import './App.css';
import React from 'react'
import { Route, Switch, withRouter, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import Login from './components/Login.js'
import MainContainer from './components/MainContainer.js'
import Logout from './components/Logout.js';
import Articles from './components/Articles.js'
import Signup from './components/Signup.js'
import Home from './components/Home.js'
import NewArticleForm from './components/NewArticleForm.js'
import NavbarContainer from './components/NavbarContainer';


class App extends React.Component {


  componentDidMount(){
    this.props.getCurrentUser()
  }

  render(){
    const { loggedIn } = this.props
    return (
     
        <div className="App">
          { loggedIn ? <NavbarContainer location={this.props.location}/> : <Home/> }
          <Switch>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
            <Route exact path='/articles' component={Articles}/>
            <Route exact path='/articles/new' component={NewArticleForm}/>
            
          </Switch>
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
