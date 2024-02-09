const GuideLayout = ({ children }) => {
  return (
    <>
      <div className="flex flex-row place-content-around items-center w-screen h-screen align-middle">{children}</div>
    </>
  );
};

export default GuideLayout;

import PropTypes from "prop-types";

GuideLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
