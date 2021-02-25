import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from '../actions/signupForm.js'
import { signup } from '../actions/currentUser.js'

const Signup = ({ signupFormData, updateSignupForm, signup }) => {

    const handleInputChange = event => {
        const {name, value} = event.target
        const updatedFormData ={
            ...signupFormData,
            [name]: value
        }
        updateSignupForm(updatedFormData)
    }

    const handleSubmit = event => {
        event.preventDefault()
        signup(signupFormData)
    }

    return (
        <form onSubmit={handleSubmit}>
            <input placeholder="username" type="text" name="username" value={signupFormData.username} onChange={handleInputChange} ></input>
            <input placeholder="email" type="text" name="email" value={signupFormData.password} onChange={handleInputChange} ></input>
            <input placeholder="password" type="text" name="password" value={signupFormData.password} onChange={handleInputChange} ></input>
            <input type="submit" value="signup"></input>
        </form>
    )
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}



export default connect(mapStateToProps, { updateSignupForm, signup } )(Signup)