const LoginLayout = ({ children }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-screen">{children}</div>
    </>
  );
};

export default LoginLayout;

import PropTypes from "prop-types";

LoginLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
