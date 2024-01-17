const LoginLayout = ({ children }) => {
  return (
    <>
      <div className="flex flex-row place-content-around items-center w-screen h-screen align-middle">
        {children}
      </div>
    </>
  );
};

export default LoginLayout;

import PropTypes from "prop-types";

LoginLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
