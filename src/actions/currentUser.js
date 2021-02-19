export const setCurrentUser = user => {
    return {
        type: "SET_CURRENT_USER",
        payload: user
    }
}


// asynchronous action that returns a fetch and uses dispatch
export const login = creds => {
    console.log("creds are", creds)
    return dispatch => {
        return fetch("http://localhost:3000/api/v1/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({username: "user", password: "password"})
        })
    }
}