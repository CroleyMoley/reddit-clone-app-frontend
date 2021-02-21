import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser.js'

const logout = ({ logout }) => {
    return (
        <form onSubmit={logout}>
            <input type="submit" value="Logout"></input>
        </form>
    )
}

export default connect(null, { logout })(Logout)