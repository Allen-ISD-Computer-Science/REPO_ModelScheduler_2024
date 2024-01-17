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

    const renderLogin = () => {
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
    };

    const renderRegister = () => {
        <>
            <EmailField

            />
            <PasswordField

            />
            <PasswordField

            />
        </>
    };

    const renderReset = () => {
        <>
            <EmailField
                // Verify 6 digit code sent in email
            />
        </>
    };
    return (
        <>
        {/* Login */}
        {(page == "login") ? renderLogin : null}

        {/* Register */}
        {(page == "register") ? renderRegister : null}

        {/* Forgot Password */}
        {(page == "reset") ? renderReset : null}
        </>
    );
};

export default LoginCard;

import PropTypes from "prop-types";

LoginCard.propTypes = {
    page: PropTypes.string.isRequired
}