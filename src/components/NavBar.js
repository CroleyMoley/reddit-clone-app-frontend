import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Logout from './Logout'


const NavBar = ({ currentUser, loggedIn }) => {
    return (
        <div className="NavBar">
            <NavLink to="/articles">Articles</NavLink> 
            { loggedIn ? <Logout/> : null } 
        </div>
    )
}


const mapStateToProps = ({ currentUser }) => {
  return{
    currentUser,
    loggedIn: !!currentUser
  }
}

export default connect(mapStateToProps)(NavBar);