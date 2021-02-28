import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'


const NavBar = ({ currentUser }) => {
    return (
        <div className="NavBar">
            <NavLink to="/articles">Articles</NavLink>  
        </div>
    )
}


const mapStateToProps = ({ currentUser }) => {
  return{
    currentUser
  }
}

export default connect(mapStateToProps)(NavBar);