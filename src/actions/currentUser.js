import { resetLoginForm } from './loginForm.js'
import { getArticles } from './articles.js'
import { resetSignupForm } from './signupForm.js'


export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        user
    }
}


// asynchronous action that returns a fetch and uses dispatch
export const login = creds => {
    console.log("creds are", creds)
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/login", {
            creds: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(creds)
        })
        .then(res => res.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setCurrentUser(response.data))
                dispatch(getArticles())
                dispatch(resetLoginForm())
                
            }
        })
            .catch(console.log)
    }
}

export const getCurrentUser = () => {
    console.log("here is getcurrentuser")
    return dispatch => {
        return fetch("http://localhost:3001/api/v1/get_current_user", {
            creds: "include",
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })
        .then(res => res.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setCurrentUser(response.data))
                dispatch(getArticles())
            }
        })
        .catch(console.log)
    }
}


export const clearCurrentUser = () => {
    return {
        type: "CLEAR_CURRENT_USER"
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(clearCurrentUser())
        return fetch("http://localhost:3001/api/v1/logout", {
            creds: "include",
            method: "DELETE"
        })
    }
}

export const signup = creds => {
    
    return dispatch => {
        const userInfo = {
            user: creds
        }
        return fetch("http://localhost:3001/api/v1/signup", {
            creds: "include",
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        .then(res => res.json())
        .then(response => {
            if (response.error) {
                alert(response.error)
            } else {
                dispatch(setCurrentUser(response.data))
                dispatch(getArticles())
                dispatch(resetSignupForm())
                
            }
        })
            .catch(console.log)
    }
}