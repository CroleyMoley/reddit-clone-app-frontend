import './App.css';
import React from 'react'
import Login from './components/Login.js'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'
import Logout from './components/Logout.js'
import NavBar from './components/NavBar.js'

class App extends React.Component {


  componentDidMount(){
    this.props.getCurrentUser()
  }

  render(){
    return (
     this.props.currentUser ? <Logout /> : <Login />,
     <NavBar/>
    );

  }
}


const mapStateToProps = ({ currentUser }) => {
  return{
    currentUser
  }
}

export default connect(mapStateToProps, { getCurrentUser })(App);
