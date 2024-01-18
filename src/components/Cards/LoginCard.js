import  { useState } from 'react';

import { LoginButton } from '../Buttons';
import { EmailField, PasswordField } from '../Inputs';

const LoginCard = ({ page }) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);

    return (
        <>
        <div className="space-y-4">
            {page == "login" ? (
                <>
                <EmailField
                    setEmail={setEmail}
                    emailError={emailError}
                    emailValid={emailValid}
                    setEmailValid={setEmailValid}
                />
        
                <PasswordField
                    setPassword={setPassword}
                    passwordError={passwordError}
                    passwordValid={passwordValid}
                    setPasswordValid={setPasswordValid}
                />
        
                <LoginButton 
                    email={email}
                    setEmailError={setEmailError}
                    setEmailValid={setEmailValid}
                    password={password}
                    setPasswordError={setPasswordError}
                    setPasswordValid={setPasswordValid}
                />
                </>
            ) : (null)}

            {page == "register" ? (
                <>
                <EmailField

                />
                <PasswordField

                />
                <PasswordField

                />

                <LoginButton
                    email={email}
                    setEmailError={setEmailError}
                    setEmailValid={setEmailValid}
                    password={password}
                    setPasswordError={setPasswordError}
                    setPasswordValid={setPasswordValid}
                />

                </>
            ) : (null)}

            {page == "reset" ? (
                <>
                <EmailField
                    // Verify 6 digit code sent in email
                />

                <LoginButton 
                    email={email}
                    setEmailError={setEmailError}
                    setEmailValid={setEmailValid}
                    password={password}
                    setPasswordError={setPasswordError}
                    setPasswordValid={setPasswordValid}
                />

                </>
            ) : (null)}
        </div>
        </>
    );
};

export default LoginCard;

import PropTypes from "prop-types";

LoginCard.propTypes = {
    page: PropTypes.string.isRequired
}