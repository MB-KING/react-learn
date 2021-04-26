import React, { Component } from 'react'
import './login.css'
import { GoogleLogin } from "react-google-login"


function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    //console.log(profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log(profile.getName());
    console.log(profile.getImageUrl());
    //console.log(profile.getEmail()); // This is null if the 'email' scope is not present.
}

class Login extends Component {
    state = {}
    render() {

        
        return (
            <div className="Login">
                <div className="login-btn">

                    <GoogleLogin

                        clientId="1088057598482-fgvi82j235jmqd5ekjn9mobhnukg63ig.apps.googleusercontent.com"
                        onSuccess={onSignIn}
                    />
                </div>
                

            </div>

        );
    }
}

export default Login;
