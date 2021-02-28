import React from 'react'
import { connect } from 'react-redux'
import { logout } from '../actions/currentUser.js'

const Logout = ({ logout }) => {

    const handleSubmit = event => {
        event.preventDefault()
        logout()
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="submit" value="Logout"></input>
        </form>
    )
}

export default connect(null, { logout })(Logout)