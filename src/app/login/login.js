import React from 'react'
import './login.css'
import { GoogleLogin } from "react-google-login"

const responseGoogle = response => {
    console.log(response.profileObj.name);

};

function Login() {
    return (
        <div className="Login">
            <div className="login">

                <GoogleLogin

                    clientId="1088057598482-fgvi82j235jmqd5ekjn9mobhnukg63ig.apps.googleusercontent.com"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                    profileObj={responseGoogle}
                />
            </div>
        </div>
    );
}

export default Login;
