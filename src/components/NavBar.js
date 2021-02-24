import React from 'react'
import Login from './Login.js'
import { connect } from 'react-redux'
import Logout from './Logout.js'

const NavBar = ({ currentUser }) => {
    return (
        <div className="NavBar">
            { currentUser ? <strong>Welcome, {currentUser.attributes.username}</strong> : "" }
            <button>Log In</button>
            OR
            <button>Sign Up</button>
            
        </div>
    )
}


const mapStateToProps = ({ currentUser }) => {
  return{
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar);