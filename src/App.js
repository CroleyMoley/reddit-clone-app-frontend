import './App.css';
import React from 'react'
import Login from './components/Login.js'
import { connect } from 'react-redux'
import { getCurrentUser } from './actions/currentUser.js'


class App extends React.Component {


  componentDidMount(){
    this.props.getCurrentUser()
  }

  render(){
    return (
      "hello I'm React",
      <Login />
    );

  }
}

export default connect(null, { getCurrentUser })(App);
