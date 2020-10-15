import { auth, provider } from '../firebase'
import React from 'react'
import "./Login.css"

function Login() {

    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then((result)=> console.log(result))
        .catch((error) => alert(error.message))

    }
    return (
        <div className="login">
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/5/56/IMessage_logo_%28Apple_Inc.%29.png" alt=""/>

                <h2>iMessage</h2>
            </div>

            <button onClick={signIn} className= "login__button">Login</button>
        </div>
    )
}

export default Login
