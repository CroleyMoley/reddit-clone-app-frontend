import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'


const Login = ({ username, password, updateLoginForm }) => {
    return (
        <form onSubmit={undefined}>
            <input placeholder="username" type="text" name="username" value={username} onChange={updateLoginForm} ></input>
            <input placeholder="password" type="text" name="password" value={password} onChange={updateLoginForm} ></input>
            <input type="submit" value="Login"></input>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        username: state.loginForm.username,
        password: state.loginForm.password
    }
}

//const mapDispatchToProps



export default connect(mapStateToProps, { updateLoginForm } )(Login)