import React from 'react'
import { connect } from 'react-redux'
import { updateSignupForm } from '../actions/signupForm.js'
import { signup } from '../actions/currentUser.js'

class Signup extends React.Component  {

    constructor() {
        super()
        this.state = {
            username: "",
            email: "",
            password: ""
        }
    }

     handleUserInfoInputChange = event => {
        this.setState({ 
            [event.target.name]: event.target.value
        }) 
      }
     
    

     handleSubmit = event => {
        event.preventDefault()
        this.props.signup(this.state)
        
    }

    render(){
    return (
        <form onSubmit={this.handleSubmit}>
            <input placeholder="username" type="text" name="username" value={this.state.username} onChange={this.handleUserInfoInputChange} ></input>
            <input placeholder="email" type="text" name="email" value={this.state.email} onChange={this.handleUserInfoInputChange} ></input>
            <input placeholder="password" type="text" name="password" value={this.state.password} onChange={this.handleUserInfoInputChange} ></input>
            <input type="submit" value="signup"></input>
        </form>
    )
}
}

const mapStateToProps = state => {
    return {
        signupFormData: state.signupForm
    }
}



export default connect(mapStateToProps, { updateSignupForm, signup } )(Signup)