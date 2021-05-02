import React, { Component } from 'react'
import './login.css'
import { GoogleLogin } from "react-google-login"


function onSignIn (googleUser) {
    var profile = googleUser.getBasicProfile();
    console.log(profile.getName());
    console.log(profile.getImageUrl());
    document.getElementById("googleusername").innerHTML = profile.getName();
    document.getElementById("googleprofilepic").src = profile.getImageUrl();

}

class Login extends Component {

    render() {

        return (
            <div className="Login">
                <div className="login-btn">

                    <GoogleLogin

                        clientId="1088057598482-fgvi82j235jmqd5ekjn9mobhnukg63ig.apps.googleusercontent.com"
                        onSuccess={onSignIn}
                    />
                </div>
                <p id="googleusername"> hi </p>
                <img id="googleprofilepic" alt=""/>
            </div>

        );
    }
}

export default Login;
