import { Input } from "@nextui-org/input";

export default function EmailField({ setEmail, emailError, emailValid, setEmailValid, ...props }) {

  const changeInput = () => {
    setEmailValid(false);
    setEmail;
  };

  return (
    <>
      {/* Email Layout */}
      <Input
        {...props}
        isRequired
        type="email"
        label="Email Address"
        variant="bordered"
        className="justify-between max-w-sm align-middle"
        isInvalid={emailValid}
        errorMessage={emailValid && emailError}
        onValueChange={changeInput}
      />

      {/* Send Info To Server On Button Click */}
    </>
  );
}

import PropTypes from "prop-types";

EmailField.propTypes = {
  setEmail: PropTypes.string.isRequired,
  emailError: PropTypes.string.isRequired,
  emailValid: PropTypes.bool.isRequired,
  setEmailValid: PropTypes.bool.isRequired
};