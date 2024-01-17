import { Button } from "@nextui-org/button";

const LoginButton = ({ email, setEmailError, setEmailValid, password, setPasswordError, setPasswordValid }) => {

  const onButtonClick = () => {
    // Add if Email or Password are incorrect

    // Check Email
    if (email == "") {
      setEmailError("Please enter an email");
      setEmailValid(true);
    } else if (!email.match("@student.allenisd.org")) {
      setEmailError("Please enter a student email");
      setEmailValid(true);
    } else {
      setEmailError("");
      setEmailValid(false);
    }

    // Check Password
    if (password == "") {
      setPasswordError("Please enter a password");
      setPasswordValid(true);
    } else {
      setPasswordError("");
      setPasswordValid(false);
    }
  };

  return (
    <>
      <Button
        color="primary"
        variant="shadow"
        onClick={onButtonClick}
      >
        Log in
      </Button>
    </>
  );
};

export default LoginButton;

import PropTypes from "prop-types";

LoginButton.propTypes = {
  email: PropTypes.string.isRequired,
  setEmailError: PropTypes.string.isRequired,
  setEmailValid: PropTypes.bool.isRequired,
  password: PropTypes.string.isRequired,
  setPasswordError: PropTypes.string.isRequired,
  setPasswordValid: PropTypes.bool.isRequired
};
