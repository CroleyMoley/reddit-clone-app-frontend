import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import Logout from './Logout'


const NavBar = ({ currentUser, loggedIn }) => {
    return (
        <div className="NavBar">
            <NavLink exact activeClassName="active" to="/articles">Articles  | </NavLink> 
            <NavLink exact activeClassName="active" to="/articles/new">New Article | </NavLink>
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