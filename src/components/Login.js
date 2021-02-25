import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from '../actions/loginForm.js'
import { login } from '../actions/currentUser.js'

const Login = ({ loginFormData, updateLoginForm, login }) => {

    const handleInputChange = event => {
        const {name, value} = event.target
        const updatedFormData ={
            ...loginFormData,
            [name]: value
        }
        updateLoginForm(updatedFormData)
    }

    const handleSubmit = event => {
        event.preventDefault()
        login(loginFormData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="username" type="text" name="username" value={loginFormData.username} onChange={handleInputChange} ></input>
            <input placeholder="password" type="text" name="password" value={loginFormData.password} onChange={handleInputChange} ></input>
            <input type="submit" value="Login"></input>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        loginFormData: state.loginForm
    }
}



export default connect(mapStateToProps, { updateLoginForm, login } )(Login)