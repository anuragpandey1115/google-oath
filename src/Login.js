import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import Home from './Home';

const clientId = "372713831874-r1jcu51s6vlg4ddtmp2hpfkcksdp3ibk.apps.googleusercontent.com";

function Login() {

    const [showloginButton, setShowloginButton] = useState(true);
    const onLoginSuccess = (res) => {
        console.log('Login Success:', res.profileObj);
        setShowloginButton(false);
    };

    const onLoginFailure = (res) => {
        console.log('Login Failed:', res);
    };

    return (
        <div>
            {showloginButton ?
                <GoogleLogin
                    clientId={clientId}
                    buttonText="Sign In"
                    onSuccess={onLoginSuccess}
                    onFailure={onLoginFailure}
                    cookiePolicy={'single_host_origin'}
                    isSignedIn={true}
                /> : <Home />}

        </div>
    );
}
export default Login;