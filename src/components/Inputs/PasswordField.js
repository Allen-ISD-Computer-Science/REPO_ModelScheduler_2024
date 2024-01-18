import { useState } from "react";
import { Input } from "@nextui-org/input";
import { Button } from "@nextui-org/button";

import { ShowPassword } from "@/components/Images";
import { HidePassword } from "@/components/Images";

const PasswordField = ({ passwordValid, passwordError, setPassword, setPasswordValid, ...props }) => {

  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
  const changeInput = () => {
    setPasswordValid(false);
    setPassword;
  };

  return (
    <>
      {/* Password Layout */}
      <Input
        {...props}
        isRequired
        label="Password"
        variant="bordered"
        className="max-w-sm align-middle"
        // Visibility
        endContent={
          <button className="focus:outline-none align-middle" type="button" onClick={toggleVisibility}>
            {isVisible ? (
              <HidePassword className="text-9x1 text-default-400 pointer-events-none" />
            ) : (
              <ShowPassword className="text-2x1 text-default-400 pointer-events-none" />
            )}
          </button>
        }
        type={isVisible ? "text" : "password"}
        onValueChange={changeInput}
        errorMessage={passwordValid && passwordError}        
        isInvalid={passwordValid}
      />
    </>
  );
};

export default PasswordField;

import PropTypes from "prop-types";

PasswordField.propTypes = {
  setPassword: PropTypes.string.isRequired,
  passwordError: PropTypes.string.isRequired,
  passwordValid: PropTypes.bool.isRequired,
  setPasswordValid: PropTypes.bool.isRequired
}